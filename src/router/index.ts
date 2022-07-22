import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import RegisterComponent from "../views/Auth/Register.vue";
import LoaderComponent from "../components/Loader/Loader.component.vue";

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: "/",
    component: () => import("../views/Layout/MainLayout.vue"),
    children: [
      {
        path: "/",
        component: () => import("../views/Homepage/HomePage.vue"),
      },
      {
        path: "/Testimonial",
        component: () => import("../views/Testimonial/Testimonial.vue"),
      },
      {
        path: "/404ErrorPage",
        component: () => import("../views/Homepage/404ErrorPage.vue"),
      },
      {
        path: "/Termsandconditions",
        component: () => import("../views/Legals/Termsandconditions.vue"),
      },
      {
        path: "/privacypolicy",
        component: () => import("../views/Legals/Privacypolicy.vue"),
      },
      {
        path: "/company",
        component: () => import("../views/Company/company.vue"),
      },
      {
        path: "/Downloads",
        component: () => import("../views/Downloads/Downloads.vue"),
      },

      {
        path: "/membership",
        component: () => import("../views/MemberShip/membership.vue"),
      },
    ],
  },
  {
    path: "/HelpcenterLayout",
    component: () => import("../views/Layout/helpcenterLayout.vue"),
    children: [
      {
        path: "/HelpCenter",
        component: () => import("../views/HelpCenter/HelpCenter.vue"),
      },
    ],
  },

  {
    path: "/test",
    component: LoaderComponent,
  },

  {
    path: "/registerlayout",
    component: () => import("../views/Layout/AuthLayout.vue"),
   
    children: [
      {
        path: "/register",
        component: RegisterComponent,
      },
      {
        path: "/forgetpassword",
        component: () => import("../views/Auth/ForgetPassword.vue"),
      },
      {
        path: "/ConfirmPassword",
        component: () => import("../views/Auth/ConfirmPassword.vue"),
      },
    ],
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  
})

export default router
