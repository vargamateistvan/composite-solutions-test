import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    redirect: { name: "Todo" },
    children: [
      {
        path: "/todo",
        name: "Todo",
        component: () => import("@/views/todo"),
      },
      {
        path: "/gallery",
        name: "Gallery",
        component: () => import("@/views/gallery"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
