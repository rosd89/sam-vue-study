import Vue from 'vue'
import Router from 'vue-router'

import Twice from '@/components/twice/Twice'
import NotFoundView from '@/components/util/NotFoundView'

import TwiceMemberInfo from '@/components/twice/info/TwiceMemberInfo'
import TwiceMemberInfoWithoutEventBus from '@/components/twice/info/TwiceMemberInfoWithoutEventBus'
import NaYeon from '@/components/twice/info/NaYeon'
import DaHyun from '@/components/twice/info/DaHyun'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'NaYeon',
      component: NaYeon
    },
    {
      path: '/twice',
      name: 'Twice',
      component: Twice,
      description: 'TWICE 메인 컴포넌트',
      children: [
        {
          path: 'na-yeon',
          name: 'TwiceMember-NaYeon',
          component: NaYeon
        },
        {
          path: 'da-hyun',
          name: 'TwiceMember-DaHyun',
          component: DaHyun
        },
        {
          path: 'member/:memberName',
          name: 'TwiceMemberInfo',
          component: TwiceMemberInfo
        },
        {
          path: 'member2/:memberName',
          name: 'TwiceMemberInfo',
          component: TwiceMemberInfoWithoutEventBus
        }
      ]
    },
    {
      // not found handler
      path: '*',
      component: NotFoundView
    }
  ]
})
