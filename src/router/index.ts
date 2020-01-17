import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Wifi from '../views/Wifi.vue'
import Network from '../views/wifi/Network.vue'
import Connect from '../views/wifi/Connect.vue'

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
    component: About
  },
  {
    path: '/wifi',
    name: 'wifi',
    component: Wifi
  },
  {
    path: '/wifi/:network',
    name: 'wifi/network',
    component: Network
  },
  {
    path: '/wifi/:network/connect',
    name: 'wifi/network/connect',
    component: Connect
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
