import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/bmap',
    name: 'BMap',
    component: () => import(/* webpackChunkName: "BMap" */ '@/views/BMap.vue')
  },
  {
    path: '/bmap2',
    name: 'BMap2',
    component: () => import(/* webpackChunkName: "BMap2" */ '@/views/BMap2.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
