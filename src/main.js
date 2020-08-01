import Vue from 'vue'
// 引入vue-router模块
import router from './router/index'
import App from './App.vue'
import axios from 'axios'

Vue.config.productionTip = false

Vue.prototype.$http = axios


new Vue({
  router,
  // template: `
  // <div id="app">ssss</div>
  // `,
  render: h => h(App),
}).$mount('#app')
