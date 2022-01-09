import Vue from "vue";
import VueRouter from "vue-router";
import NProgress from "nprogress";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: () =>
      import("../components/auth-components/login/LoginComponent"),
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../components/auth-components/home/HomeComponent"),
  },
  {
    path: "/register",
    name: "register",
    component: () =>
      import("../components/auth-components/register/RegisterComponent"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// NProgress
router.beforeResolve((to, from, next)=>{
  if (to.name){
    NProgress.start()
    // console.log(from.fullPath);
  }
  next()
})
router.afterEach((to, from )=>{
  NProgress.done()
  // console.log(to.name);
  // console.log(from.path);
})

export default router;
