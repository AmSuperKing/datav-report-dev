import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './plugins/vcharts.js'
import Echarts from 'echarts'
import VueEcharts from 'vue-echarts'
import './styles/index.scss'

Vue.config.productionTip = false
Vue.prototype.$echarts = Echarts
Vue.component('v-chart', VueEcharts)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
