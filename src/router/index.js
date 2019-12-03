import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home,
    redirect:'/firt'
  },
  {
    path: '/firt',
    name: 'firt',
    component: () => import(/* webpackChunkName: "about" */ '../views/pages/Firt.vue'),
    redirect:'/firt/keep',
    children:[
      {
        path: 'keep',
        name: 'keep',
        component: () => import(/* webpackChunkName: "about" */ '../views/pages/Keep.vue'),
      
      },
      {
        path: 'recomme',
        name: 'recomme',
        component: () => import(/* webpackChunkName: "about" */ '../views/pages/Recomme.vue')
      },
      {
        path: 'hot',
        name: 'hot',
        component: () => import(/* webpackChunkName: "about" */ '../views/pages/Hot.vue')
      }
    ]
  },
  {
    path: '/college',
    name: 'college',
    component: () => import(/* webpackChunkName: "about" */ '../views/pages/College.vue')
  },
  {
    path: '/mine',
    name: 'mine',
    component: () => import(/* webpackChunkName: "about" */ '../views/pages/Mine.vue')
  },
  {
    path: '/deil',
    name: 'deil',
    component: () => import(/* webpackChunkName: "about" */ '../views/pages/Deil.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
