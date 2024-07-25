import type { RouteRecordRaw } from "vue-router";

export const basicRoutes: RouteRecordRaw[] = [
  {
    name: "root",
    path: "/",
    redirect: "/login",
    meta: {
      title: "root",
    },
  },
  {
    path: "/login",
    name: "login",
    component: () => import("~/views/_basic/login/index.vue"),
    meta: {
      title: "login",
    },
  },
];
