<template>
  <li class="active">
    <router-link class="nav-menu" :to="{path: to}">{{linkName}}</router-link>
  </li>
</template>

<script>
  export default {
    name: 'Linker',
    props: ['linkName', 'to']
  }
</script>
