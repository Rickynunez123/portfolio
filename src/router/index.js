import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/examples",
      component: () => import("../views/ExampleView.vue"),
    },
    {
      path: "/projects",
      component: () => import("../views/ProjectsView.vue"),
    },
  ],
});

export default router;
