import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
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
  },
  {
    path: "/Example04-1",
    component: () => import("@/views/example04/Example04-1.vue")
  },
  {
    path: "/Example04-2",
    component: () => import("@/views/example04/Example04-2.vue")
  },
  {
    path: "/Example04-3",
    component: () => import("@/views/example04/Example04-3.vue")
  },
  {
    path: "/Example05-1",
    component: () => import("@/views/example05/Example05-1.vue")
  },
  {
    path: "/Example05-2",
    component: () => import("@/views/example05/Example05-2.vue")
  },
  {
    path: "/Example06-1",
    component: () => import("@/views/example06/Example06-1.vue")
  },
  {
    path: "/Example06-2",
    component: () => import("@/views/example06/Example06-2.vue")
  },
  {
    path: "/Example06-3",
    component: () => import("@/views/example06/Example06-3.vue")
  },
  {
    path: "/Example07-1",
    component: () => import("@/views/example07/Example07-1.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
