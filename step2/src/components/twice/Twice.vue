<!--
 * Created by sam on 2017. 7. 1..
-->
<template>
  <div>
    <div>
      <img src="../../../static/twice/twice-logo.jpg"/>

      <ul>
        <h5>basic router</h5>
        <li v-for="m in twice">
          <router-link :to="{path: '/twice/' + m}">{{m}}</router-link>
        </li>
      </ul>

      <ul>
        <h5>event bus</h5>
        <li v-for="m in twice">
          <vueter :to= "'/twice/member/' + m" >{{m}}</vueter>
        </li>
      </ul>

      <ul>
        <h5>without evuet bus</h5>
        <li v-for="m in twice">
          <router-link :to= "'/twice/member2/' + m" >{{m}}</router-link>
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
        twice: ['na-yeon', 'da-hyun']
      }
    }
  }
</script>
