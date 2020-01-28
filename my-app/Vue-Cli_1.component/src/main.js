import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import '@babel/polyfill'
import StatusComponents from './Status.vue'

//Vue.component('컴포넌트명' , 옵션)
Vue.component('AppStatus' , StatusComponents)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')


//main.js 파일은 Vue 어플리케이션을 관장하는역할을 한다
//그래서 main.js에서 선언한 AppStatus란 컴포넌트는 어떤파일에서나 사용가능하다.
