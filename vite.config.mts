import process from "node:process";
import { resolve } from "node:path";
import AutoImport from "unplugin-auto-import/vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";
import { defineConfig, loadEnv } from "vite";
import type { ConfigEnv, UserConfig } from "vite";
import { configureProxy, getAppInfo, loadEnvVariables } from "./build/utils";
import { configureUnoCSS } from "./build/plugins";

export default defineConfig(async (config: ConfigEnv) => {
  const cwd = process.cwd();
  // const isProductionBuild = config.command === "build";
  const env = loadEnvVariables(loadEnv(config.mode, cwd));
  const pathResolve = (pathname: string) => resolve(cwd, ".", pathname);

  const appInfo = await getAppInfo(cwd);

  const appConfig: UserConfig = {
    root: cwd,
    base: env.VITE_PUBLIC_PATH ? env.VITE_PUBLIC_PATH : "/",
    resolve: {
      alias: {
        "~/": `${pathResolve("src")}/`,
      },
    },
    define: {
      __APP_INFO__: JSON.stringify(appInfo),
      __ENV__: JSON.stringify(env),
    },
    server: {
      open: true,
      proxy: configureProxy(env.VITE_PROXY),
    },
    esbuild: {
      pure: env.VITE_DROP_CONSOLE ? ["console.log", "debugger"] : [],
    },

    plugins: [
      vue(),
      AutoImport({
        dts: "src/types/auto-imports.d.ts",
        imports: [
          "vue",
          "vue-i18n",
          "vue-router",
          {
            "naive-ui": [
              "useDialog",
              "useMessage",
              "useNotification",
              "useLoadingBar",
            ],
          },
        ],
      }),

      Components({
        dts: "src/types/components.d.ts",
        resolvers: [
          NaiveUiResolver(),
        ],
      }),

      configureUnoCSS(),
    ],
  };

  return appConfig;
});
