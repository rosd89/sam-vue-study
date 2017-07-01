import Vue from 'vue'
import Router from 'vue-router'
import NaHun from '@/components/NaHun'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'NaHun',
      component: NaHun
    }
  ]
})
