<!--
 * Created by sam on 2017. 7. 8..
-->
<template>
  <top-layout>
    <div class="container">
      <div class="navbar-header">
        <router-link :to="{path: '/'}" class="navbar-brand">
          <img class="logo-s" src="/static/img/logo-s.png"/>
          <b>Twice</b>
        </router-link>

        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse">
          <i class="fa fa-bars"></i>
        </button>
      </div>

      <div class="collapse navbar-collapse pull-left" id="navbar-collapse">
        <ul class="nav navbar-nav">
          <linker
            v-for="(item, i) in navItems"
            :key="item.linkName + i"
            :to="item.to">{{item.linkName}}
          </linker>
        </ul>
      </div>
    </div>
  </top-layout>
</template>

<script>
  import Linker from './util/Linker'
  import TopLayout from './util/TopLayout'
  export default {
    components: {
      TopLayout,
      Linker
    },
    name: 'TopSection',
    data () {
      return {
        navItems: [
          {to: '/profile', linkName: 'PROFILE2'},
          {to: '/profile2', linkName: 'PROFILE2'},
          {to: '/form', linkName: 'form'}
        ]
      }
    }
  }
</script>

<style>
  .nav-menu {
    text-decoration: none;
    font-family: 'Oswald', sans-serif;
    font-weight: normal;
    color: #e53862;
    font-size: 16px;
  }

  .nav-background-color {
    background-color: #333;
  }

  .navbar-brand > img {
    display: inline;
  }

  .logo-s {
    width: 104px;
    height: 40px;
    margin-top: -15px;
    margin-right: 10px;
  }
</style>
