<!--
 * Created by sam on 2017. 7. 2..
-->
<template>
  <div>
    <img :src="`/static/twice/${memberName}.jpg`"/>
  </div>
</template>

<script>
  import EventBus from '../../../script/EventBus'
  export default {
    name: 'TwiceMemberInfo',
    data () {
      return {
        memberName: ''
      }
    },
    created () {
      EventBus.$on('memberPageMove', this.setImgPath)
      this.setImgPath()

      window.addEventListener('popstate', this.setImgPath)
    },
    destoryed () {
      window.removeEventListener('popstate', this.setImgPath)
    },
    methods: {
      setImgPath () {
        const memberName = this.$route.params.memberName

        if (this.memberName !== memberName) {
          this.memberName = memberName
          window.history.replaceState({memberName}, undefined, undefined)
        }
      }
    }
  }
</script>
