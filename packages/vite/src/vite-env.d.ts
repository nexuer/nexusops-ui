/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PUBLIC_PATH: string;
  readonly VITE_PROXY: [string, string][];
  readonly VITE_DROP_CONSOLE: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
