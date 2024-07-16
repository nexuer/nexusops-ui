/**
 * Namespace Env
 *
 * It is used to declare the type of the import.meta object
 */
declare namespace Env {
  /** The router history mode */
  type RouterHistoryMode = "hash" | "history" | "memory";

  interface ImportMeta extends ImportMetaEnv {
    readonly VITE_PUBLIC_PATH: string;
    readonly VITE_PROXY: [string, string][];
    readonly VITE_DROP_CONSOLE: boolean;
    readonly VITE_ROUTER_HISTORY_MODE?: RouterHistoryMode;
  }
}

interface ImportMeta {
  readonly env: Env.ImportMeta;
}
