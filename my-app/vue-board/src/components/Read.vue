<template>
    <div>
        <table>
            <tr>
                <td>글번호</td>
                <td>글쓴이</td>
                <td>제목</td>
                <td>내용</td>
            </tr>
            <tr :key="index" v-for="(value,index) in data" @click="detail(index)">
                <td>{{ index }}</td>
                <td>{{value.writer}}</td>
                <td>{{value.title}}</td>
                <td>{{value.content}}</td>
            </tr>    
        </table>
        <button @click="write">글쓰기</button>
    </div>
</template>
<script>
import data from '@/data'

export default {
 name: 'Read',
 data() {
     return {
        data: data
     }
 },
 methods:{
     write() {
         this.$router.push({
             path: 'create'
         })
     },
     detail(index) {
         //param 값을 넘겨줄때는 속성값에 push 대신 name으로해야됨
         this.$router.push({
             name: 'Detail',
             params:{
                 contentId : index
             }
         })
     }
 }
}
</script>
