import console from "node:console";
import { existsSync, mkdirSync, readdirSync, rmSync, statSync } from "node:fs";
import { dirname, extname, join, parse, relative } from "node:path";
import { pbjs, pbts } from "protobufjs-cli";

function searchProtoFiles(dir, excludeDirs = [], fileList = []) {
  const files = readdirSync(dir);

  files.forEach((file) => {
    const filePath = join(dir, file);
    const stat = statSync(filePath);
    if (stat.isDirectory()) {
      if (!excludeDirs.includes(file)) {
        searchProtoFiles(filePath, excludeDirs, fileList);
      }
    } else if (stat.isFile() && extname(file) === ".proto") {
      fileList.push(filePath);
    }
  });

  return fileList;
};

export function generateCmd(sourceDir, options) {
  const { target: targetDir, exclude: excludeDirs, path: paths } = options;
  if (!existsSync(sourceDir)) {
    throw new Error(`Source directory "${sourceDir}" does not exist.`);
  }

  console.log(`> search ${sourceDir} ...`);
  const protoFiles = searchProtoFiles(sourceDir, excludeDirs);
  console.log(protoFiles);

  if (protoFiles.length === 0) {
    throw new Error(`No .proto files found in the source directory "${sourceDir}".`);
  }

  console.log(`> delete ${targetDir} ...`);
  if (existsSync(targetDir)) {
    rmSync(targetDir, { recursive: true, force: true });
  }
  console.log(`> create ${targetDir} ...`);
  mkdirSync(targetDir, { recursive: true });
  const jsPaths = [];
  protoFiles.forEach((file) => {
    const name = parse(file).name;
    const relativeDir = relative(sourceDir, dirname(file));
    const targetCodeDir = join(targetDir, relativeDir);
    const jsPath = join(targetCodeDir, `${name}.js`);
    mkdirSync(targetCodeDir, { recursive: true });
    // js
    const args = [];
    args.push("--target", "static-module");
    args.push("--wrap", "es6");
    args.push("--out", jsPath);
    args.push("--path", sourceDir);
    if (paths.length > 0) {
      paths.forEach((p) => {
        args.push("--path", p);
      });
    }
    args.push(file);
    pbjs.main(args);
    console.log(`+ ${jsPath}`);
    jsPaths.push(jsPath);
    // ts
    // const tsArgs = [];
    // tsArgs.push("-o", tsPath);
    // tsArgs.push(jsPath);
    // pbts.main(tsArgs);
    // console.log(`+ ${tsPath}`);
  });

  const tsPath = join(targetDir, "index.d.ts");
  const tsArgs = [];
  tsArgs.push("-o", tsPath);
  jsPaths.forEach((p) => {
    tsArgs.push(p);
  });
  pbts.main(tsArgs);
  console.log(`+ ${tsPath}`);
}
