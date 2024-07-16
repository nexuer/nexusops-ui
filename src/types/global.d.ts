export {};

declare global {

  export interface Window {
    /** NProgress instance */
    NProgress?: import("nprogress").NProgress;
    /** Loading bar instance */
    $loadingBar?: import("naive-ui").LoadingBarProviderInst;
    /** Dialog instance */
    $dialog?: import("naive-ui").DialogProviderInst;
    /** Message instance */
    $message?: import("naive-ui").MessageProviderInst;
    /** Notification instance */
    $notification?: import("naive-ui").NotificationProviderInst;
  }

  export interface AppInfo {
    readonly pkg: AppPkg;
    readonly lastBuildTime: Date;
  }

  export interface AppPkg {
    name?: string;
    version?: string;
    dependencies?: Record<string, string>;
    devDependencies?: Record<string, string>;
  }

  export const __APP_INFO__: AppInfo;
  export const __ENV__: Env.ImportMeta;
}
