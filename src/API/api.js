import axios from 'axios'
import configService from './config'

const connect = axios.create({
  baseURL: configService.apiUrl,
  headers: {
    'X-Requested-With': 'XMLHttpRequest'
  },
})

const API = {
  getArticles: () => {
    return new Promise((resolve, reject) => {
      connect.get('article')
        .then(resp => {
          resolve(resp.data) 
        })
        .catch(err => {
          reject(err)
        })
    })
  },

  getArticle: (id) => {
    return new Promise((resolve, reject) => {
      connect.get('article', id)
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
