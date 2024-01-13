import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/HomeView.vue"),
  },
  {
    path: "/jobs/results",
    name: "JobResults",
    component: () =>
      import(/*webpackChunkName: "Jobs"*/ "@/views/JobResults.vue"),
  },
  {
    path: "/jobs/results/:id",
    name: "JobListing",
    component: () => import(/*webpackChunkName: "Jobs"*/ "@/views/JobView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
