import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import VueCarousel from 'vue-carousel'

Vue.config.productionTip = false
Vue.use(Buefy)
Vue.use(VueCarousel)

new Vue({
  render: h => h(App),
}).$mount('#app')
