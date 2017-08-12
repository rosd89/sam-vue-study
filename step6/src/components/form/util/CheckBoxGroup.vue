<!--
 * Created by sam on 2017. 8. 6..
-->
<template>
  <div>
    <span v-for="v in values" :key="v.name">
      <input
        type="checkbox"
        :value="v.value"
        v-model="checkedVal"
        @click="checked">{{v.name}} &nbsp;
    </span>
  </div>
</template>

<script>
  export default {
    name: 'CheckBoxGroup',
    props: ['values'],
    data () {
      return {
        checkedVal: []
      }
    },
    methods: {
      checked () {
        console.log(this.checkedVal)
        this.$emit('checkedToBox', this.checkedVal)
      }
    }
  }
</script>
