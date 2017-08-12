<!--
 * Created by sam on 2017. 7. 30..
-->
<template>
  <div>
    <div>
      <input type="text" v-model="text1" @keyup.enter="clickclick2"/>
      <button @click="clickclick">Click</button>
      <label>{{text2}}</label>
    </div>
    <div>
      <check-box-group
        :values="values"
        v-on:checkedToBox="checkedToBox">
      </check-box-group>
    </div>
    <div>
      <input type="radio" value="apple" v-model="checkedVal2" @click="checkedToRadio"> apple &nbsp;
      <input type="radio" value="banana" v-model="checkedVal2" @click="checkedToRadio"> banana &nbsp;
      <input type="radio" value="cherry" v-model="checkedVal2" @click="checkedToRadio"> cherry &nbsp;
      <label>{{checkedRetVal2}}</label>
    </div>
    <div>
      <select v-model="sData" @change="selectedVal">
        <option value="apple">apple</option>
        <option value="banana">banana</option>
        <option value="cherry">cherry</option>
      </select>
      <label>{{result}}</label>
    </div>
  </div>
</template>

<script>
  import CheckBoxGroup from './util/CheckBoxGroup'
  export default {
    components: {CheckBoxGroup},
    name: 'FormMain',
    data () {
      return {
        text1: '',
        text2: '',
        checkedVal: [],
        checkedRetVal: '',
        checkedVal2: '',
        checkedRetVal2: '',
        sData: '',
        result: '',
        values: [
          {value: 'box1', name: 'Box1'},
          {value: 'box2', name: 'Box2'},
          {value: 'box3', name: 'Box3'},
          {value: 'box4', name: 'Box4'}
        ]
      }
    },
    methods: {
      clickclick () {
        this.text2 = this.text1
      },
      clickclick2 () {
        this.text2 = this.text1.split('').reverse().join('')
      },
      checkedToBox (checkedVal) {
        console.log(checkedVal)
        console.log(checkedVal.join('-'))
      },
      checkedToRadio () {
        const val = this.checkedVal2
        this.checkedRetVal2 = val + '@' + val
      },
      selectedVal () {
        const d = this.sData
        this.result = d + '$' + d
      }
    }
  }
</script>
