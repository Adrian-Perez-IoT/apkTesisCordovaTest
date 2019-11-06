import Vue from 'vue'
import VueRouter from 'vue-router'
import Monitoreo from '../views/Monitoreo.vue'
import Notificaciones from '../views/Notificaciones.vue'
import About from '../views/About.vue'
// import Inicio from '../views/Inicio.vue'
import firebase from 'firebase'

Vue.use(VueRouter)

const routes = [
  {
    path: '/signinuser',
    name: 'signinuser',
    component: () => import("../views/SigninUser.vue"),    
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
    component: Monitoreo,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/notificaciones',
    name: 'notificaciones',
    component: Notificaciones,
    meta: {
      requiresAuth: true
    }
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

//nav guards
router.beforeEach((to, from, next) => {
  //Check for requiredAuth guard
  if(to.matched.some(record => record.meta.requiresAuth)) {
    // Check if NOT logged in
    if(!firebase.auth().currentUser){
      //Go to Login
      next({
        path: '/signinuser',
        query: {
          redirect: to.fullPath
        }
      });      
    } else {
      // Procede to rute
      next();  
    }
  } else if(to.matched.some(record => record.meta.requiresGuest)) { 
    // Check if logged in
    if(firebase.auth().currentUser){
      //Go to Login
      next({
        path: '/',
        query: {
          redirect: to.fullPath
        }
      });      
    } else {
      // Procede to rute
      next();  
    }
  } else {
    // Procede to rute
    next();  
  }
});

export default router
