import Vue from 'vue'
import Router from 'vue-router'

import Home from '../view/pages/home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },

  ]
})