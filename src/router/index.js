import Vue from "vue";
import VueRouter from "vue-router";
import loginComp from "../views/LoginPage.vue";
import homeComp from "../views/HomePage.vue";
import registerComp from "../views/RegisterPage";
import newsDetailComp from "../views/NewsDetail.vue";
import myFavoriteComp from "../views/MyFavoritePage.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: homeComp,
  },
  {
    path: "/login",
    name: "login",
    component: loginComp,
  },
  {
    path: "/register",
    name: "register",
    component: registerComp,
  },
  {
    path: "/details/:NewsId",
    name: "details",
    component: newsDetailComp,
  },
  {
    path: "/MyFavorite",
    name: "MyFavorite",
    component: myFavoriteComp,
  },
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name === "login" && localStorage.access_token) {
    next({ name: "home" });
  } else {
    next();
  }
  if (to.name === "register" && localStorage.access_token) {
    next("/");
  } else {
    next();
  }
});

export default router;
