import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import TwiceProfile from '@/components/profile/TwiceProfile'

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/profile',
      name: 'twice-profile',
      component: TwiceProfile
    }
  ]
})
