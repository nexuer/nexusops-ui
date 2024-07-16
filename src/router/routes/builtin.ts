import type { RouteRecordRaw } from "vue-router";

export const ROOT_ROUTE: RouteRecordRaw = {
  name: "root",
  path: "/",
  meta: {
    title: "root",
  },
};

export const LoginRoute: RouteRecordRaw = {
  path: "/login",
  name: "login",
  component: () => import("~/views/_builtin/login/index.vue"),
  meta: {
    title: "login",
  },
};

// const PAGE_NOT_FOUND_ROUTE: RouteRecordRaw = {
//   name: "page-not-found",
//   path: "/:pathMatch(.*)*",
//   // component: "layout.blank$view.404",
//   meta: {
//     title: "not-found",
//   },
// };

/** builtin routes, it must be constant and setup in vue-router */
export const builtinRoutes: RouteRecordRaw[] = [ROOT_ROUTE];
