<template>
  <div>
    <b-table striped hover :items="items" :fields="fields" @row-clicked="rowClick"></b-table>
    <b-button @click="writeContent">글쓰기</b-button>
  </div>
</template>
<!--  @row-clicked : 클릭하면 어떤행동을 할건지 정해줄수 있음-->
<script>
import data from '@/data'

//b-table은 자동정렬이 되지만 원래 게시판은 최신순으로 나오니 역순으로 바꿔야함
//sort() 정렬 인자로 함수를 받음 sort((a,b) => {return a-b}) 오름차순으로 정렬하면 a-b 리턴
//내림차순이면 b-a를 리턴

// Array.prototype.map() :  메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환합니다.
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// Array.prototype.filter() : 특정조건에 해당하는 요소를 모아 새로운 배열로 반환
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// ...  전개연산자 기존객체를 모두 받을수있음


export default {
  data() {
  let items = data.Content.sort((a,b) => {return b.content_id - a.content_id})
  items = items.map(contentItem => {return {...contentItem, user_name: data.User.filter(userItem => userItem.user_id === contentItem.user_id)[0].name}})
      return {
        fields: [
          {
            key: 'content_id',
            label : '글번호'
          },
          {
            key: 'title',
            label : '제목'
          },
          {
            key: 'created_at',
            label : '작성일'
          },
          {
            key: 'user_name',
            label : '글쓴이'
          },
        ],
        items: items
      }
    },
    methods:{
      rowClick(item, index , e) {
        this.$router.push({
          path: `/board/free/detail/${item.content_id}`
        })
      },
      writeContent() {
        this.$router.push({
          path: '/board/free/Create'
        })
      }
    }
}
</script>