import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/calc-list",
    name: "Calc-list",
    component: () => import("../views/Calc-list.vue"),
  },
  {
    path: "/calc-done",
    name: "Calc-done",
    component: () => import("../views/Calc-done.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
