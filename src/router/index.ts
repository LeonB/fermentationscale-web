import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/wifi',
    name: 'wifi',
    component: () => import(/* webpackChunkName: "wifi" */ '../views/Wifi.vue')
  },
  {
    path: '/wifi/:network',
    name: 'wifi/network',
    component: () => import(/* webpackChunkName: "network" */ '../views/wifi/Network.vue')
  },
  {
    path: '/wifi/:network/connect',
    name: 'wifi/network/connect',
    component: () => import(/* webpackChunkName: "connect" */ '../views/wifi/Connect.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
