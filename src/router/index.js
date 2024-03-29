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
  {
    path: "/teams",
    name: "Teams",
    component: () =>
      import(/*webpackChunkName: "Teams"*/ "@/views/TeamsView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return {
      top: 0,
      left: 0,
      behavior: "smooth",
    };
  },
});

export default router;
