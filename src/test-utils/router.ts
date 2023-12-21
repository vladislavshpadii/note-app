import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
  routes: [
    {
      path: "/",
      component: {
        template: "<div />",
      },
    },
    {
      path: "/test/:id",
      name: "id",
      component: {
        template: "<div />",
      },
    },
  ],
  history: createWebHistory(),
});
