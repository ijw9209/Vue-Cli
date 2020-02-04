<template>
  <div class="yellow lighten-3 pa-3">
    <h3>회원 정보를 수정할 수 있습니다.</h3>
    <p>수정사항</p>
    <v-text-field
      v-model="user.name"
      label="이름"
      ></v-text-field>
    <v-text-field
      v-model="user.address"
      label="주소"
    ></v-text-field>  
    <v-text-field
      v-model="user.phone"
      label="전화번호"
    ></v-text-field>
    <v-radio-group v-model="user.hasDog">
      <v-radio
        label="반려견 있음"
        :value="true"
      ></v-radio>
      <v-radio
        label="반려견 없음"
        :value="false"
      ></v-radio>
    </v-radio-group> 
    <v-btn @click="changeUser()">수정 완료</v-btn>
  </div>
</template>

<script>
import { eventBus } from "../main"
export default{
    props:["name","address","phone","hasDog"],
    data(){
      return {
        user:{}
      }
    },
    created(){
      this.user.name = this.name
      this.user.address = this.address
      this.user.phone = this.phone
      this.user.hasDog = this.hasDog
    },
    //$emit() : 자식컴포넌트가 부모컴포넌트에게 신호를 보낼수있음
    //이렇게해놓고 부모컴포넌트에도 신호를 받는 장치를 선언해야됨
    methods:{
      changeUser(){
       this.$emit("child" , this.user)
       //이런식으로 ==  child(this.user)란 함수안에 값을 넣어줌
       // eventBus.$emit("userWasEdited", new Date())
       eventBus.userWasEdited(new Date())
      }
    }
  }
</script>
