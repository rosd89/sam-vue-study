<!--
 * Created by sam on 2017. 7. 8..
-->
<template>
  <header class="main-header">
    <nav class="navbar navbar-static-top nav-background-color">
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

            <linker :linkName="'PROFILE'" :to="'/profile'"></linker>

            <li>
              <router-link class="nav-menu" :to="{path: '/profile2'}">PROFILE2</router-link>
            </li>

            <li>
              <router-link class="nav-menu" :to="{path: '/form'}">form</router-link>
            </li>

            <!--<li class="dropdown">-->
              <!--<a href="#" class="dropdown-toggle nav-menu" data-toggle="dropdown">Dropdown <span class="caret"></span></a>-->
              <!--<ul class="dropdown-menu" role="menu">-->
                <!--<li><a href="#">Action</a></li>-->
                <!--<li><a href="#">Another action</a></li>-->
                <!--<li><a href="#">Something else here</a></li>-->
                <!--<li class="divider"></li>-->
                <!--<li><a href="#">Separated link</a></li>-->
                <!--<li class="divider"></li>-->
                <!--<li><a href="#">One more separated link</a></li>-->
              <!--</ul>-->
            <!--</li>-->
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
  import Linker from './util/Linker'
  export default {
    components: {Linker},
    name: 'TopSection'
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
