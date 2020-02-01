<template>
  <div class="red lighten-3 pa-3">
    <h3>자세한 회원 정보를 확인합니다.</h3>
    <p>{{ nameOfChild}}</p>
    <p>{{ sayHello }}</p>
    <v-btn @click="switchName()">이름 변경</v-btn> 
  </div>
</template>

<script>
//부모컴포넌트에서에서 User.vue 에서
//값을 주면 자식컴포넌트에서 값받을게 하고 말을해줘야하는데
//그게바로 props라는 프로퍼티로 사용
//props프로퍼티는 array형태로 값을 선언함
export default {
  //부모에서 만든 변수명을 props에 선언
  
  // nameOfChild 가 Object엿는지 String 형태가 기억나지않을때
  // 기록해주는 방법 array형태가 아닌 Object로 써주고
  // 이미 부모컴포넌트에서 값이 상속되어있기때문에 데이터 타입을 써줌(?) 
  props:{
    nameOfChild : {
      type : String,
      //required : 이값은 필요한값이다
      default : 'LEGO',
    }
  },
  computed:{
    sayHello (){
      return this.nameOfChild + '안녕하세요.'
    }
  },
  methods:{
    switchName(){
      this.nameOfChild = '컴퓨터'
    }
  }
}
</script>
