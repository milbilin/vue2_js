import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    children: [
      {
        path: 'news',
        name: 'news',
        component: () => import('../views/AboutNews.vue'),
        beforeEnter: (to, from, next) => {
          console.log(to, from);
          next()
        }
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//全局前置守卫
// router.beforeEach((to, from, next) => {
//   console.log(to, from);
//   next()
// })

// //全局后置守卫
// router.afterEach((to, from) => {
//   console.log(to, from);
// })

export default router
