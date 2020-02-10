<template>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">Vue.js로 게시판 만들기</b-navbar-brand>

        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <b-collapse id="nav_collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#">공지사항</b-nav-item>
            <b-nav-item href="#" disabled>자유게시판</b-nav-item>
            <b-nav-item href="#" disabled>구인구직</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>   
    </div>    
</template>
<!-- b-navbar : 브랜딩 네비게이션등 감싸는 컴포넌트 toggleable 속성은 sm,md,lg,xl 등 있음
    b-navbar-brand  : 브랜드 로고
    b-navbar-nav :  b-nav-item을 감싸는 부모컴포넌트
    b-navbar-toggle : 토글버튼 , 화면이작아졌을때 메뉴대신 보여지는 버튼
    b-collapse : 감싸는 컴포넌트 화면이 기준보다 작아졋을때 숨기는 기능을함 
 -->
<script>
export default {
    name: "Header",
    data(){
        return {};
    }
}
</script>