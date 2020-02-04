<template>
  <div class="blue lighten-3 pa-3">
    <h1>User 컴포넌트</h1>
    <p>이름: 뷰제이에스</p>
    <p>{{ getDateAndTime(createdAt) }}</p>
    {{helloToMixin}}
    {{test}}
    <hr>
    <v-layout row wrap>
      <v-flex xs12 sm6>
              <!-- v-bind = :변수명="어떤값" -->
              <!-- props는 숫자나 object나 어떤형태든 넣어줄수있음 -->
        <UserDetail 
          :name="name"
          :address="address"
          :phone="phone"
          :hasDog="hasDog"
          ></UserDetail>
      </v-flex>
      <v-flex xs12 sm6>
        <UserEdit 
          :name="name"
          :address="address"
          :phone="phone"
          :hasDog="hasDog"
          @child="parents">
          </UserEdit>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
//props : 부모 컴포넌트 (user.vue) 에서 자식컴포넌트(UserDetail.vue)로
//        어떤 정보를 넘겨주는 property
//v-bind : 부모에게서 전달해주고자하려는값을 전달해줄수잇음
import UserDetail from "./UserDetail.vue"
import UserEdit from "./UserEdit.vue"
import { dateFormat } from "../mixins/dateFormat"
export default {
  components: {
    UserDetail,
    UserEdit
  },
  data(){
    return{
      name:'Hoza',
      address: 'Seoul',
      phone:'1234-5678',
      hasDog : true,
      createdAt: null,
    }
  },
  computed:{
    helloToMixin(){
      //믹스인을통해 컴포넌트안에들어간 값들은 모두 this를 통해 불러올수있다
      return this.mixinData + "안녕하세요!"
    },
    test(){
      let a = '가나다'
      a = 'abc'
      return a
    }
  },
  created(){
    console.log("유저 컴포넌트")
    this.createdAt = new Date()
  },
  methods:{
    parents(user){
      // user = {name,address , phone , hasDog}
      this.name = user.name
      this.address = user.address
      this.phone = user.phone
      this.hasDog = user.hasDog
      console.log("부모가 받았어!")
    },
    getDateAndTime(date){
      if(date != null) {
        let hour = date.getHours()
        let minutes = date.getMinutes()
        let fullDate = `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}`
        return ` ${hour}:${minutes} ${fullDate}`
      } else {
        return null
      }
    }
  },
  //mixin :같은기능을 여러곳에서 수행할수있게해줌 ,mixin은 array 형태로
  mixins:[dateFormat]
}
</script>