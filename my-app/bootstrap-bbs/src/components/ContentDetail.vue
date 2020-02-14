<template>
    <div>
    <b-card>
      <div class="content-detail-content-info">
        <div class="content-detail-content-info-left">
          <div class="content-detail-content-info-left-number">
            {{contentId}}
          </div>
          <div class="content-detail-content-info-left-subject">
            {{title}}
          </div>
        </div>
        <div class="content-detail-content-info-right">
          <div class="content-detail-content-info-right-user">
            글쓴이: {{user}}
          </div>
          <div class="content-detail-content-info-right-created">
            등록일: {{created}}
          </div>
        </div>
      </div>
      <div class="content-detail-content">
        {{context}}
      </div>
      <div class="content-detail-button">
        <b-button variant="primary" @click="updateData">수정</b-button>
        <b-button variant="success" @click="deleteData">삭제</b-button>
      </div>
      <div class="content-detail-comment">
        <!-- props를 넘겨줄때  props는 부모컴포넌트가 자식에게 전달해줄때 사용  :contentId="contentId"-->
        <CommentList :contentId="contentId" />
      </div>
    </b-card>
  </div>    
</template>
<script>
import data from "@/data";
import CommentList from './CommentList';

export default {
    name: "ContentDetail",
    components: {
      CommentList
    },
    data() {
        const contentId = Number(this.$route.params.contentId);
        const contentData = data.Content.filter(item => item.content_id === contentId)[0]
        return{
            contentId : contentId,
            title  : contentData.title,
            context : contentData.context,
            user : data.User.filter(item => item.user_id === contentData.user_id)[0].name,
            created : contentData.created_at
        };
    },
    methods:{
        deleteData(){
            const content_index = data.Content.findIndex(item => item.content_id === this.contentId);
            data.Content.splice(content_index, 1)
            this.$router.push({
                path:'/board/free'
            })
        },
        updateData(){
            this.$router.push({
                path:`/board/free/Create/${this.contentId}`
            })
        }
    }
};
</script>
<!-- flex 속성? 주로 레이아웃을 잡을때 사용
     사용하기위해서는 부모가있고 그안에 자식이 위치하는 상태에서만 사용가능 
     
     flex-direction : 자식들의정렬방향을 정함
                    -row : 수평정렬 방식
                    -row-reverse
                    -column : 수직정렬 방식
                    -column-reverse

      justify-content : 주축을따라 자식들을 정렬하는 방법을 설정가능   
                     -space-between : 여백을 균등히 배분  

      align-items : 교차축을따라  자식들을 정렬하는 방법을 설정가능                            
      -->
<style scoped>
.content-detail-content-info {
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  
}
.content-detail-content-info-left {
  width: 720px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}
.content-detail-content-info-right {
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}
.content-detail-content {
  border: 1px solid black;
  margin-top: 1rem;
  padding-top: 1rem;
  min-height: 720px;
}
.content-detail-button {
  border: 1px solid black;
  margin-top: 1rem;
  padding: 2rem;
}
.content-detail-comment {
  border: 1px solid black;
  margin-top: 1rem;
  padding: 2rem;
}
</style>