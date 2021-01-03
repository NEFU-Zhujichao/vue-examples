import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: (Home)
  },
  {
    path: "/Example01",
    name: "example01",
    component: () => import("@/views/example01/Example01.vue")
  },
  {
    path: "/Example02",
    name: "example02",
    component: () => import("@/views/example02/Example02.vue")
  },
  {
    props: true,
    path: "/Example03/students/:sid/homework/:hid",
    name: "example03",
    component: () => import("@/views/example03/Example03.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
