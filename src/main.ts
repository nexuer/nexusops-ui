import { createApp, ref } from "vue";
import { setupI18n } from "./i18n";

import App from "~/App.vue";

const app = createApp(App);

void Promise.all([
  setupI18n(app),
]).finally(() => {
  app.mount("#app");
});
