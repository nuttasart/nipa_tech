import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import NvisionRestfulExample from "@/views/NvisionRestfulExample.vue";
import NvisionWebSocketExample from "@/views/NvisionWebSocketExample.vue";
import Nuttasart from "../views/Nuttasart.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "nuttasart",
    component: Nuttasart,
  },
  {
    path: "/restful",
    name: "restful",
    component: NvisionRestfulExample,
  },
  {
    path: "/websocket",
    name: "websocket",
    component: NvisionWebSocketExample,
  },
  {
    path: "/nuttasart",
    name: "nuttasart",
    component: Nuttasart,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
