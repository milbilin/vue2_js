import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/props',
    name: 'props',
    component: () => import('../views/PropsView.vue')
  },
  {
    path: '/emit',
    name: 'emit',
    component: () => import('../views/EmitView.vue')
  },
  {
    path: '/ref',
    name: 'ref',
    component: () => import('../views/RefView.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
