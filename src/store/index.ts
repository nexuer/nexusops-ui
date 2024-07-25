import type { App } from "vue";
import { createPinia } from "pinia";
import { registerPiniaPersistPlugin } from "./plugins";

export function setupStore(app: App, setting: Setting.System) {
  const store = createPinia();
  registerPiniaPersistPlugin(store, setting);
  app.use(store);
}
