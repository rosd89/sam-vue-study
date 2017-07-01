import Vue from 'vue'
import Router from 'vue-router'

import Twice from '@/components/twice/Twice'

import TwiceMemberInfo from '@/components/twice/info/TwiceMemberInfo'
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
        },
        {
          path: 'member/:memberName',
          name: 'TwiceMemberInfo',
          component: TwiceMemberInfo,
          afterEach: (to, from) => {
            console.log(to)
            console.log(from)
          }
        }
      ]
    }
  ]
})
