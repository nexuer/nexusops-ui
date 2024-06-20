import process from "node:process";
import { resolve } from "node:path";
import type { ConfigEnv, UserConfig } from "vite";
import { defineConfig, loadEnv, mergeConfig } from "vite";
import { configureProxy, updateEnvVariables } from "../utils";
import { configurePlugins } from "../plugins";

interface GenerateConfigOptions {
  overrides?: UserConfig;
}

export async function generateConfig(opts: GenerateConfigOptions = {}) {
  const { overrides = {} } = opts;
  return defineConfig(async (config) => {
    return mergeConfig(await appConfig(config), overrides);
  });
}

async function appConfig(config: ConfigEnv, cwd: string = process.cwd()) {
  const isProductionBuild = config.command === "build";
  const env = updateEnvVariables(loadEnv(config.mode, cwd));
  const pathResolve = (pathname: string) => resolve(cwd, ".", pathname);
  const plugins = configurePlugins(cwd, env, isProductionBuild);
  const appConfig: UserConfig = {
    root: cwd,
    base: env.VITE_PUBLIC_PATH ? env.VITE_PUBLIC_PATH : "/",
    resolve: {
      alias: {
        "~/": `${pathResolve("src")}/`,
      },
    },
    server: {
      open: true,
      proxy: configureProxy(env.VITE_PROXY),
    },
    esbuild: {
      pure: env.VITE_DROP_CONSOLE ? ["console.log", "debugger"] : [],
    },

    plugins,
  };

  return appConfig;
}
