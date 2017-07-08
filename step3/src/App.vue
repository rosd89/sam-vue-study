<template>
  <div class="wrapper">
    <top-section></top-section>
    <router-view></router-view>
    <bottom-section></bottom-section>
  </div>
</template>

<script>
  import TopSection from './components/layout/TopSection'
  import BottomSection from './components/layout/BottomSection'
  export default {
    components: {
      TopSection, BottomSection
    },
    name: 'app'
  }
</script>
