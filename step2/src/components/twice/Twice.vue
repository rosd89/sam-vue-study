<!--
 * Created by sam on 2017. 7. 1..
-->
<template>
  <div>
    <div>
      <img src="../../assets/twice/twice-logo.jpg"/>

      <ul>
        <li v-for="m in twice">
          <router-link :to="{path: '/twice/' + m}">{{m}}</router-link>
        </li>
      </ul>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'Twice',
    data () {
      return {
        twice: ['na-hun', 'da-hun']
      }
    }
  }
</script>
