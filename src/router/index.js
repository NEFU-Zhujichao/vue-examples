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
  },
  {
    path: "/homeworks",
    component: () => import("@/views/example07/Example07-2.vue")
  },
  {
    props: true,
    path: "/homeworks/:hid",
    component: () => import("@/views/example07/Example07-3.vue")
  },
  {
    path: "/Example08",
    component: () => import("@/views/example08/Example08.vue")
  },
  {
    path: "/Example09",
    component: () => import("@/views/example09/Example09.vue")
  },
  {
    path: "/Example10",
    component: () => import("@/views/example10/Example10.vue"),
    children: [
      {
        props: true,
        path: "homeworks/:hid",
        component: () => import("@/views/example10/Example10-02.vue")
      }
    ]
  },
  /* 同级路由用name属性区分。
  {
    path: "/Example10",
    component: {
      default: () => import("@/views/example10/Example10.vue"),
      button:  () => import("@/views/example10/Example10-02.vue")
    }
  }*/
  {
    path: "/Example11",
    component: () => import("@/views/example11/Example11.vue")
  },
  {
    path: "/Example12",
    component: () => import("@/views/example12/Example12.vue"),
    children: [
      {
        path: "courses",
        component: () => import("@/views/example12/Courses.vue")
      }
    ]
  },
  {
    path: "/Example13",
    component: () => import("@/views/example13/Example13.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
const teacherRole = "6983f953b49c88210cb9";
const studentRole = "bb63e5f7e0f2ffae845c";
let adminRoutes = [
  {
    path: "/Example11/welcome",
    component: () => import("@/views/example11/Welcome.vue")
  }
];
export function updateRoutes() {
  switch (sessionStorage.getItem("role")) {
    case teacherRole:
      router.addRoutes(adminRoutes);
      break;
    case studentRole:
      break;
  }
}
updateRoutes();
