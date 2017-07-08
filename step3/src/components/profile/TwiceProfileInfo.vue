<!--
 * Created by sam on 2017. 7. 9..
-->
<template>
  <img class="profile-img" :src="memberNumber"/>
</template>

<script>
  export default {
    name: 'TwiceProfileInfo',
    computed: {
      memberNumber () {
        return `http://twice.jype.com/images/profile/large/${this.$route.params.memberNumber}.jpg`
      }
    }
  }
</script>

<style>
  .profile-img {
    width: 100%;
    height: 100%;
  }
</style>
