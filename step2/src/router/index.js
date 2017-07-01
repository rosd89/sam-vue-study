import Vue from 'vue'
import Router from 'vue-router'

import Twice from '@/components/twice/Twice'

import NaHun from '@/components/twice/info/NaHun'
import DaHun from '@/components/twice/info/DaHun'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'NaHun',
      component: NaHun
    },
    {
      path: '/twice',
      name: 'Twice',
      component: Twice,
      description: 'TWICE 메인 컴포넌트',
      children: [
        {
          path: 'na-hun',
          name: 'TwiceMember-NaHun',
          component: NaHun
        },
        {
          path: 'da-hun',
          name: 'TwiceMember-DaHun',
          component: DaHun
        }
      ]
    }
  ]
})
