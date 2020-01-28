<template>
  <div>
    <h1>{{ title }} </h1>
    <p>{{ count }} </p>
    <button @click="count ++">추가</button>
    <HomeComponent></HomeComponent>
    <AppStatus></AppStatus>
  </div>
</template>

<script>
  //외부의 뷰 파일을 가져오기 위한 약속(규격) import
  //앞에는 굳이 Home.vue라고 안하고 뒤에 from에 제대로써주면됨
  // 여기서 from .vue는 생략해도 무방
  import HomeComponent from './Home'
  //위에 home.vue를 가져오긴했지만 이걸 컴포넌트라고 선언해줘야함
  export default{
    components: {
      HomeComponent
    },
    data (){
      return {
        title:"안녕하세요.",
        count: 1
      } 
    }
  }
</script>
