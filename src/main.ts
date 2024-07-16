import { createApp, ref } from "vue";
import { setupI18n } from "./locales";
import { setupRouter } from "./router";

import "./styles";
import App from "~/App.vue";

const app = createApp(App);

void Promise.all([
  setupI18n(app),
  setupRouter(app),
]).finally(() => {
  app.mount("#app");
});
