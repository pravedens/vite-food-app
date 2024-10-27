import { createWebHistory, createRouter } from "vue-router";

import Home from "../pages/Home.vue";
import Contact from "../pages/Contact.vue";
import { userAuthStore } from "../stores/authStore";

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
    meta: { requiresAuth: true }
  },

  {
    path: "/login",
    name: "Login",
    component: () => import('../pages/Auth/Login.vue'),
    meta: { requiresGuest: true }
  },

  {
    path: "/register",
    name: "Register",
    component: () => import('../pages/Auth/Register.vue'),
    meta: { requiresGuest: true }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const store = userAuthStore();
  if (to.meta.requiresAuth && !store.isLoggin) {
    next('/login');
  }
  else if (to.meta.requiresGuest && store.isLoggin) {
    next('/')
  }
  else {
    next();
  }
})

export default router;
