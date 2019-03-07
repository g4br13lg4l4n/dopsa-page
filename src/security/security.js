import axios from 'axios'
import configService from '../API/config'

const access = {
  'Content-Type':'multipart/form-data',
  'grant_type': 'client_credentials',
  'client_id': 2,
  'client_secret': 'Q4zdaVygJAHDKjP3GSvBdVxQXEVirKvhA4vfFovj'
}

const accessBuyer = {
  grant_type: 'password',
  client_id: 1,
  client_secret: 'cinIC4gzXQRmqm2TMf9l75awtjL75TlhDj2Sy4xE',

}

const connect = axios.create({
  baseURL: configService.apiUrl
})

const security = {
  getToken: () => {
      connect.post('oauth/token', access)
        .then(resp => {
          localStorage.header = JSON.stringify(resp.data)
        })
  },

  getTokenBuyer: (_data) => {
    accessBuyer.username = _data['username']
    accessBuyer.password = _data['password']
    return new Promise((resolve, reject) => {
      connect.post('oauth/token', accessBuyer)
          .then(resp => {
            resolve(resp.data)
            localStorage.headerBuyer = JSON.stringify(resp.data)
          }).catch(err => {
            reject(err)
          })
    })
  },

  getStorageBuyerToken: () => {
    if (localStorage.headerBuyer) {
      const token = JSON.parse(localStorage.header)
      return {Authorization: token.token_type+' '+token.access_token};
    }else {
      return ''
    }
  },

  deleteStorageBuyerToken: () => {
    if (localStorage.headerBuyer) {
        localStorage.removeItem('headerBuyer')
    }else {
      return ''
    }
  },

  getStorageToken: ()=> {
    if (localStorage.header) {
      const token = JSON.parse(localStorage.header)
      return {Authorization: token.token_type+' '+token.access_token};
    }else {
      return ''
    }
  }
}

export default security
