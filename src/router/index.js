import { createWebHistory, createRouter } from "vue-router";

import Home from "../pages/Home.vue";
import Contact from "../pages/Contact.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },

  {
    path: "/login",
    name: "Login",
    component: () => import('../pages/Auth/Login.vue')
  },

  {
    path: "/register",
    name: "Register",
    component: () => import('../pages/Auth/Register.vue')
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
