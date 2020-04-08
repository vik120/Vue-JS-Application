import Vue from 'vue'
import App from './app/index'
import router from './router'
import store from './store'
import './registerServiceWorker'
import 'jquery'
import 'bootstrap'
import 'popper.js'
import '@fortawesome/fontawesome-free/css/all.css'
import VueGoogleCharts from 'vue-google-charts'

Vue.config.productionTip = false
Vue.use(VueGoogleCharts)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
