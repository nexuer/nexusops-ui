import { createApp, ref } from "vue";
import { setupI18n } from "./locals";
import { setupRouter } from "./router";
import { setupStore } from "./store";
import { SYSTEM_SETTING } from "./setting";

import "./styles";

import { useAppStore } from "./store/modules/app";
import App from "~/App.vue";

const app = createApp(App);

// Configure store
setupStore(app, SYSTEM_SETTING);
// After setupStore
const appStore = useAppStore();

await setupI18n(app, SYSTEM_SETTING, appStore.getUserSetting());

setupRouter(app);

app.mount("#app");
