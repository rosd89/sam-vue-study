<!--
 * Created by sam on 2017. 7. 2..
-->
<template>
  <a @click="click">
    <slot></slot>
  </a>
</template>

<script>
  import EventBus from '../../script/EventBus'
  export default {
    name: 'Vueter',
    props: ['to'],
    methods: {
      click () {
        this.$router.push({
          path: this.to,
          force: false
        })
        EventBus.$emit('memberPageMove')
      }
    }
  }
</script>

<style>
  a{
    color: -webkit-link;
    cursor: auto;
    text-decoration-line: underline;
    text-decoration-style: initial;
    text-decoration-color: initial;
  }
</style>
