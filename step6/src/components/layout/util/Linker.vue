<template>
  <li class="active">
    <router-link class="nav-menu" :to="{path: to}">
      <slot></slot>
    </router-link>
  </li>
</template>

<script>
  export default {
    name: 'Linker',
    props: ['to']
  }
</script>
