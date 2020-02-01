<template>
  <div class="red lighten-3 pa-3">
    <h3>자세한 회원 정보를 확인합니다.</h3>
    <p>상세사항</p>
    <v-list dense>
      <v-list-tile>
        <v-list-tile-content>이름:</v-list-tile-content>
        <v-list-tile-content class="align-end">
          {{ name }}
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile>
        <v-list-tile-content>주소:</v-list-tile-content>
        <v-list-tile-content class="align-end">
          {{ address }}
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile>
        <v-list-tile-content>전화번호:</v-list-tile-content>
        <v-list-tile-content class="align-end">
          {{ phone }}
        </v-list-tile-content>  
      </v-list-tile>
      <v-list-tile>
        <v-list-tile-content>반려견유무:</v-list-tile-content>
        <v-list-tile-content class="align-end">
          {{ hasDogKr }}
        </v-list-tile-content>
      </v-list-tile>
    
    
    </v-list>  
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
  props:['name','address','phone','hasDog'],
  computed:{
    hasDogKr(){
      return this.hasDog == true ? '있음' : '없음'
    }
  }
}
</script>
