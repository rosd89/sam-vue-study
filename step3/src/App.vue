<template>
  <div class="wrapper">
    <top-section></top-section>
    <content-component>
      <router-view></router-view>
    </content-component>
    <bottom-section></bottom-section>
  </div>
</template>

<script>
  import TopSection from './components/layout/TopSection'
  import BottomSection from './components/layout/BottomSection'
  import ContentComponent from './components/layout/ContentComponent'
  
  export default {
    components: {
      TopSection, ContentComponent, BottomSection
    },
    name: 'app'
  }
</script>
