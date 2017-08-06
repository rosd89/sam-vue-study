import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import TwiceProfile from '@/components/profile/TwiceProfile'
import TwiceProfileInfo from '@/components/profile/TwiceProfileInfo'

import TwiceProfile2 from '@/components/profile2/TwiceProfile2'

import FormMain from '@/components/form/FormMain'

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
    },
    {
      path: '/profile2',
      name: 'twice-profile2',
      component: TwiceProfile2,
      children: []
    },
    {
      path: '/form',
      name: 'form-main',
      component: FormMain,
      children: []
    }
  ]
})
