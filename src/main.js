import Vue from 'vue'
import Buefy from 'buefy'
import App from './App.vue'
import router from './router/index'
import VueSession from 'vue-session'
import VueCarousel from 'vue-carousel'
import ProductZoomer from 'vue-product-zoomer'
const options = { persist: true }
Vue.config.productionTip = false
Vue.use(Buefy)
Vue.use(VueSession, options)
Vue.use(VueCarousel)
Vue.use(ProductZoomer)

/* eslint-disable no-new */
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

