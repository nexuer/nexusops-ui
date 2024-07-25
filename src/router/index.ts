import type { App } from "vue";
import {
  type RouterHistory,
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";

import { setupRouterGuard } from "./guard";
import { basicRoutes } from "./routes";

const { VITE_ROUTER_HISTORY_MODE = "hash", VITE_PUBLIC_PATH } = import.meta.env;

const historyCreator: Record<Env.RouterHistoryMode, (base?: string) => RouterHistory> = {
  hash: createWebHashHistory,
  history: createWebHistory,
  memory: createMemoryHistory,
};

const router = createRouter({
  history: historyCreator[VITE_ROUTER_HISTORY_MODE](VITE_PUBLIC_PATH),
  routes: basicRoutes,
  strict: true,
});

export async function setupRouter(app: App<Element>) {
  app.use(router);
  setupRouterGuard(router);
  await router.isReady();
}
