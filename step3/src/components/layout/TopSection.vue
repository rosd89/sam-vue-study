<!--
 * Created by sam on 2017. 7. 8..
-->
<template>
  <header class="main-header">
    <nav class="navbar navbar-static-top nav-background-color">
      <div class="container">
        <div class="navbar-header">
          <a href="#" class="navbar-brand">
            <img class="logo-s" src="/static/img/logo-s.png"/>
            <b>Twice</b>
          </a>
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse">
            <i class="fa fa-bars"></i>
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
  export default {
    name: 'TopSection'
  }
</script>

<style>
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
