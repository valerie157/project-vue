import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import ServicesView from '../views/ServicesView.vue'
import SignupView from '@/views/SignupView.vue'
import LoginView from '../views/LoginView.vue'
import ForgotPasswordFormView from '../views/ForgotPasswordFormView.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
     component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component:AboutView
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
    },
    {
      path:'/services',
      name:'services',
      component:ServicesView
    },
    {
      path:'/contact',
      name:'contact',
      component:ContactView
    },
    {
      path:'/signup',
      name:'signup',
      component:SignupView
    },
    {
      path:'/login',
      name:'login',
      component:LoginView
    },
    {
      path:'/forgotpassword',
      name:'forgotpassword',
      component:ForgotPasswordFormView
    }
  ]
})

export default router
