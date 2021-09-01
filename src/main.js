import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios"

const base = axios.create({
  baseURL: 'http://127.0.0.1:8000'
})
const base1 = axios.create({
  baseURL: ''
})

Vue.prototype.$http = base;
Vue.prototype.$http1 = base1;

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
