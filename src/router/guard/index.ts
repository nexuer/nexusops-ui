import type { Router } from "vue-router";
import type { api } from "@nexuer/client-node";

export function setupRouterGuard(router: Router) {
  const menus: api.console.v1.IMenu = {
    routes: [],
  };
  console.log(menus);
}
