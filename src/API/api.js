import axios from 'axios'
import configService from './config'

import security from '../security/security'
/* eslint-disable */
security.getToken()

const connect = axios.create({
  baseURL: configService.apiUrl,
  headers: security.getStorageToken()
})

const API = {
  getProducts: () => {
    return new Promise((resolve, reject) => {
      connect.get('products')
        .then(resp => {
          resolve(resp.data) 
        })
        .catch(err => {
          reject(err)
        })
    })
  },

  getProduct: (id) => {
    return new Promise((resolve, reject) => {
      connect.get(`products/${id}`)
        .then(resp => {
          resolve(resp.data) 
        })
        .catch(err => {
          reject(err)
        })
    })
  },

  createAccount: (data) => {
    return new Promise((resolve, reject) => {
      connect.post('users', data)
        .then(resp => {
          resolve(resp.data) 
        })
        .catch(err => {
          reject(err)
        })
    })
  },

  login: (data) => {
    console.log(data)
  } 
}

export default API
