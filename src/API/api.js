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

  getProduct: (url) => {
    return new Promise((resolve, reject) => {
      connect.get(url)
        .then(resp => {
          resolve(resp.data) 
        })
        .catch(err => {
          reject(err)
        })
    })
  },

  postTransaction: (url, data) =>{
    return new Promise((resolve, reject) => {
      connect.post(url, data)
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
    return new Promise((resolve, reject) => {
      security.getTokenBuyer(data)
      .then(resp => {
        resolve(resp)
      })
      .catch(err => {
        reject(err) 
      })
    })  
  },
  
  me: (url, data) => {

    const connect_me = axios.create({
      baseURL: configService.apiUrl,
      headers: {'Authorization': data.token_type +' '+data.access_token}
    })

    return new Promise((resolve, reject) => {
      connect_me.get(url, data)
        .then(resp => {
          resolve(resp.data) 
        })
        .catch(err => {
          reject(err)
        })

    })
  }
}

export default API
