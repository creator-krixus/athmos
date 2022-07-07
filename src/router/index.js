import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: () => import('../views/Home/Home.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register/Register.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login/Login.vue')
  },
  {
    path: '/task',
    name: 'task',
    component: () => import('../views/Task/Task.vue'),
    beforeEnter: (to, from, next) => {
      if(localStorage.getItem('token') == null){
        next({name: "login"})
      }else{
        next()
      }
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router