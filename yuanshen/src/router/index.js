/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {
        name: 'login'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/load',
      name: 'load',
      component: () => import('../views/Load.vue')
    },
    { // 未匹配到任何
      path: '*',
      redirect: {
        name: 'login'
      }
    }
  ]
})
