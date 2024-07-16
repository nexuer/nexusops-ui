import { createApp, ref } from "vue";
import { setupI18n } from "./locales";
import { setupRouter } from "./router";
import { setupStore } from "./store";
import { globalConfig } from "./config";

import "./styles";

import App from "~/App.vue";

const app = createApp(App);

void Promise.all([

  setupStore(app, globalConfig),

  setupI18n(app, globalConfig),

  setupRouter(app),
]).finally(() => {
  app.mount("#app");
});
