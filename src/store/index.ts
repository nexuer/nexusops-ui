import type { App } from "vue";
import { createPinia } from "pinia";
import { registerPiniaPersistPlugin } from "./plugins";

const store = createPinia();

export function setupStore(app: App, cfg: Config.Config) {
  registerPiniaPersistPlugin(store, cfg.developerConfigurable);
  app.use(store);
}

export { store };
