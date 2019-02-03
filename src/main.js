import Vue from 'vue'
import Buefy from 'buefy'
import App from './App.vue'
import router from './router/index'
import VueCarousel from 'vue-carousel'

Vue.config.productionTip = false
Vue.use(Buefy)
Vue.use(VueCarousel)

new Vue({
  render: h => h(App),
}).$mount('#app')

/* eslint-disable no-new */
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

