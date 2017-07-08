<!--
 * Created by sam on 2017. 7. 9..
-->
<template>
  <div class="content">
    <div class="row">
      <section class="col-md-12">
        <router-view></router-view>
      </section>
    </div>

    <div class="row">
      <div class="col-md-2">
        <router-link v-for="n in members" v-if="currentViewCheck(n)" :key="n" :to="{path: '/profile/' + n}">
          <img class="profile-card" :src="`http://twice.jype.com/images/profile/thumbs/${n}.jpg`" style="opacity: 1;"/>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TwiceProfile',
    data () {
      return {
        members: '123456789'
      }
    },
    methods: {
      currentViewCheck (n) {
        const number = this.$route.params.memberNumber
        if (!number) {
          return true
        }

        return n !== this.$route.params.memberNumber
      }
    }
  }
</script>

<style>
  .profile-card {
    width: 80px;
    height: 80px;
    float: left;
    border: 2px solid #fff;
    margin: 5px;
    padding: 0;
    outline: none;
    cursor: pointer;
    background-repeat: no-repeat;
  }
</style>
