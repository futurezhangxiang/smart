import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// 引入css
// import './assets/css/reset.css'
import 'normalize.css'
import './assets/css/base.css'
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
