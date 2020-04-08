import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/index'
import Graph from '../views/graph/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'images',
    component: Home
  },
  {
    path: '/images',
    name: 'images',
    component: Home
  },
  {
    path: '/graph',
    name: 'graph',
    component: Graph
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
