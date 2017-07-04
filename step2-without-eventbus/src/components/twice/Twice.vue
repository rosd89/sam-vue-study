<!--
 * Created by sam on 2017. 7. 1..
-->
<template>
  <div>
    <div>
      <img src="../../../static/twice/twice-logo.jpg"/>

      <ul>
        <li v-for="m in twice">
          <router-link :to="{path: '/twice/' + m}">{{m}}</router-link>
        </li>
      </ul>

      <ul>
        <li v-for="m in twice">
          <router-link :to="{name:'TwiceMemberInfo',params:{memberName:m}}" >{{m}}</router-link>
        </li>

      </ul>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
  import Vueter from '../util/Vueter'

  export default {
    name: 'Twice',
    components: { Vueter },
    data () {
      return {
        twice: ['na-hun', 'da-hun']
      }
    }
  }
</script>
