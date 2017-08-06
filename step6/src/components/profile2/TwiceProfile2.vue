<!--
 * Created by sam on 2017. 7. 30..
-->
<template>
  <div>
    <div>
      <button class="btn btn-primary" @click="setCurrentViewType('Add')">Add</button>
      <button class="btn btn-success" @click="setCurrentViewType('View')">View</button>
    </div>

    <section v-if="currentViewType === 'Add'" class="content">
      <div class="row">
        <div class="col-md-6">
          <div class="box box-primary">
            <div class="box-header with-border">
              <h3 class="box-title">Twice Profile</h3>
            </div>

            <form role="form">

              <div class="box-body">

                <div class="form-group">
                  <label for="twiceName">이름: </label>
                  <input id="twiceName" type="text" class="form-control" v-model="name">
                </div>

                <div class="form-group">
                  <label for="twiceBirthDay">생일: </label>
                  <input id="twiceBirthDay" type="text" class="form-control" v-model="birthDay">
                </div>

                <div class="form-group">
                  <label>혈액형: </label>
                  <input type="radio" value="A" v-model="bloodType"> A &nbsp;
                  <input type="radio" value="B" v-model="bloodType"> B &nbsp;
                  <input type="radio" value="O" v-model="bloodType"> O &nbsp;
                  <input type="radio" value="AB" v-model="bloodType"> AB
                </div>

                <div class="form-group">
                  <label for="twiceHobby">취미: </label>
                  <input id="twiceHobby" type="text" class="form-control" v-model="hobby">
                </div>

                <div class="form-group">
                  <label for="twiceSpecialty">특기: </label>
                  <input id="twiceSpecialty" type="text" class="form-control" v-model="specialty">
                </div>

                <div class="form-group">
                  <label for="twiceFavoriteMotto">좌우명: </label>
                  <textarea id="twiceFavoriteMotto" class="form-control" v-model="favoriteMotto"></textarea>
                </div>
              </div>
            </form>

            <div class="box-footer">
              <button class="btn btn-primary" @click="setTwice">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <pre v-if="currentViewType === 'View'">{{data}}</pre>
  </div>
</template>

<script>
  export default {
    name: 'TwiceProfile2',
    data () {
      return {
        currentViewType: 'None',
        name: '',
        birthDay: '',
        bloodType: '',
        hobby: '',
        specialty: '',
        favoriteMotto: '',
        data: {}
      }
    },
    methods: {
      setCurrentViewType (viewType) {
        switch (viewType) {
          case 'Add':
            this.currentViewType = 'Add'
            break
          case 'View':
            this.getTwiceData()
            break
          default:
            this.currentViewType = 'None'
        }
      },
      getTwiceData () {
        const url = 'http://192.168.123.137:3000/api/v1/twice'
        this.$ajax.get(url).then(({data}) => {
          this.data = data
          this.currentViewType = 'View'
        })
      },
      setTwice () {
        const url = 'http://192.168.123.137:3000/api/v1/twice'
        const params = {
          name: this.name,
          birthDay: this.birthDay,
          bloodType: this.bloodType,
          hobby: this.hobby,
          specialty: this.specialty,
          favoriteMotto: this.favoriteMotto
        }
        this.$ajax.post(url, params).then(res => {
          this.getTwiceData()
        }).catch(err => console.log(err))
      }
    }
  }
</script>
