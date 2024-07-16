import process from "node:process";
import type { ProxyOptions } from "vite";
import { readPackageJSON } from "pkg-types";

export function configureProxy(proxyList: [string, string][] | undefined): Record<string, ProxyOptions> {
  const proxyConfig: Record<string, ProxyOptions> = {};
  if (!proxyList) {
    return proxyConfig;
  }
  for (const [prefix, target] of proxyList) {
    const isHttps = /^https:\/\//.test(target);
    proxyConfig[prefix] = {
      target,
      changeOrigin: true,
      ws: true,
      rewrite: (path: string) => path.replace(new RegExp(`^${prefix}`), ""),
      ...(isHttps ? { secure: false } : {}),
    };
  }
  return proxyConfig;
}

export function loadEnvVariables(envConf: Record<string, string>): Partial<Env.ImportMeta> {
  const viteEnv: Partial<Env.ImportMeta> = {};
  for (const [key, value] of Object.entries(envConf)) {
    let realValue: string | number | boolean | Record<string, string> = String(value).replace(/\\n/g, "\n");
    switch (key) {
      case "VITE_PROXY":
        if (realValue) {
          try {
            realValue = JSON.parse(realValue.replace(/'/g, "\""));
          } catch (error) {
            realValue = {};
          }
        }
        break;
      default:
        realValue = realValue === "true" ? true : realValue === "false" ? false : realValue;
    }
    if (realValue) {
      viteEnv[key] = realValue;
      process.env[key] = typeof realValue === "string" ? realValue : JSON.stringify(realValue);
    }
  }

  return viteEnv;
}

export async function getAppInfo(root): Promise<AppInfo> {
  const pkgJson = await readPackageJSON(root);
  const { dependencies, devDependencies, name, version } = pkgJson;

  const __APP_INFO__: AppInfo = {
    pkg: { dependencies, devDependencies, name, version },
    lastBuildTime: new Date(),
  };

  return __APP_INFO__;
}
