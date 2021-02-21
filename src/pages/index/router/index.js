import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/index',
    name: 'Home',
    component: () => import(/* webpackChunkName: "searchresults" */ '../views/Home.vue')
  },
  {
    path: '/index/count',
    name: 'count',
    component: () => import(/* webpackChunkName: "searchresults" */ '../components/count.vue')
  },
]

// eslint-disable-next-line no-new
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
