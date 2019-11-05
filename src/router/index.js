import Vue from 'vue'
import VueRouter from 'vue-router'
import Monitoreo from '../views/Monitoreo.vue'
import Notificaciones from '../views/Notificaciones.vue'
import About from '../views/About.vue'
// import Inicio from '../views/Inicio.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/signinuser',
    name: 'signinuser',
    component: () => import("../views/SigninUser.vue")
  },
  {
    path: '/signupuser',
    name: 'signupuser',
    component: () => import("../views/SignupUser.vue")
  },
  {
    path: '/',
    name: 'Inicio',
    component: () => import("../views/Inicio.vue")
  },
  {
    path: '/monitoreo',
    name: 'monitoreo',
    component: Monitoreo
  },
  {
    path: '/notificaciones',
    name: 'notificaciones',
    component: Notificaciones
  },
  {
    path: '/about',
    name: 'about',
    component: About
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
