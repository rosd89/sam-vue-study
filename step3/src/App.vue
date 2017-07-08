<template>
  <div>
    <top-section></top-section>
    <router-view></router-view>
  </div>
</template>

<script>
  import TopSection from './components/layout/TopSection'
  export default {
    components: {TopSection},
    name: 'app'
  }
</script>
