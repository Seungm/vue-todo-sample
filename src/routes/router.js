import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/Home.vue'),
      children: [
        {
          path: 'hello',
          name: 'hello',
          component: () => import('@/components/Hello.vue')
        },
        {
          path: 'world',
          name: 'world',
          component: () => import('@/components/World.vue')
        },
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/About.vue')
    }
  ]
})
