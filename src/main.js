import Vue from 'vue'
import App from './App.vue'
import store from './store'
import axios from "axios"

axios.defaults.baseURL = process.env.VUE_APP_API_URL + "/api"
axios.defaults.headers.common["Content-Type"] = "application/json"
axios.defaults.headers.common["Accept"] = "application/json"

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
