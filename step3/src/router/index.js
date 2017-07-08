import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import TwiceProfile from '@/components/profile/TwiceProfile'
import TwiceProfileInfo from '@/components/profile/TwiceProfileInfo'

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/profile',
      name: 'twice-profile',
      component: TwiceProfile,
      children: [
        {
          path: ':memberNumber',
          name: 'twice-profile-number',
          component: TwiceProfileInfo
        }
      ]
    }
  ]
})
