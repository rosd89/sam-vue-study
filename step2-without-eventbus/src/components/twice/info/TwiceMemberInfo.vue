<!--
 * Created by sam on 2017. 7. 2..
-->
<template>
  <div>
    <img :src="`/static/twice/${memberName}.jpg`"/>
  </div>
</template>

<script>
  export default {
    name: 'TwiceMemberInfo',
    computed: {
      memberName () { return this.$route.params.memberName }
    }
  }
</script>
