<template>
  <div class="blue lighten-3 pa-3">
    <h1>User 컴포넌트</h1>
    <p>이름: {{ name }}</p>
    <v-btn @click="changeName()">이름 변경</v-btn>
    <hr>
    <v-layout row wrap>
      <v-flex xs12 sm6>
              <!-- v-bind = :변수명="어떤값" -->
        <UserDetail :nameOfChild="name"></UserDetail>
      </v-flex>
      <v-flex xs12 sm6>
        <UserEdit></UserEdit>
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

export default {
  components: {
    UserDetail,
    UserEdit
  },
  data(){
    return{
      name:'뷰제이에스'
    }
  },
  methods:{
    //changeName() = changeName = function()
    changeName () {
      this.name = "Hoza"
    }
  }
}
</script>