import Vue from 'vue'
import Router from 'vue-router'

import Pay from '../view/pages/pay'
import Car from '../view/pages/car'
import Home from '../view/pages/home'
import Login from '../view/pages/login'
import Search from '../view/pages/search'
import Product from '../view/pages/product'
import Checkout from '../view/pages/checkout'
import Category from '../view/pages/category'
import Register from '../view/pages/register'

Vue.use(Router)


export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/category/:id',
      name: 'Category',
      component: Category
    },
    {
      path: '/seacrh',
      name: 'Search',
      component: Search
    },
    {
      path: 'product',
      name: 'Product',
      component: Product
    },
    {
      path: 'pay',
      name: 'Pay',
      component: Pay
    },
    {
      path: 'car',
      name: 'Car',
      component: Car
    },
    {
      path: 'checkout',
      name: 'Checkout',
      component: Checkout
    },
    {
      path: 'login',
      name: 'Login',
      component: Login
    }, 
    {
      path: 'register',
      name: 'Register',
      component: Register
    },
  ]
})