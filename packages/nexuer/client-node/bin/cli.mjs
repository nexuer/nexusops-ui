import { argv, exit } from "node:process";
import { Command } from "commander";
import { generateCmd } from "./cli/generate.mjs";

function withErrorHandling(fn) {
  return (...args) => {
    try {
      fn(...args);
    } catch (error) {
      console.error(`Error: ${error.message}`);
      exit(1);
    }
  };
}

const program = new Command();

program
  .command("generate <sourceDir>")
  .description("Generate proto files from the source directory to the target directory")
  .requiredOption("-t, --target <targetDir>", "Target directory")
  .option("-p, --path <paths>", "Comma separated list of proto paths", value => value.split(","))
  .option("-e, --exclude <dirs>", "Comma separated list of directories to exclude", value => value.split(","))
  .action(
    withErrorHandling((sourceDir, options) => {
      generateCmd(sourceDir, options);
    }),
  );

program.parse(argv);
