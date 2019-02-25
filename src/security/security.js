import axios from 'axios'
import configService from '../API/config'

const connect = axios.create({
  baseURL: configService.apiUrl,
  headers: {
    grant_type: 'client_credentials',
    client_id: '4',
    client_secret: 'D226qJbWZYrzAXxVZVQEzhqVttrXBTbCXVtb3FMg'
  },
})

const security = {
  getToken: () => {
    return new Promise((resolve, reject) => {
      connect.post('oauth/token', '')
        .then(resp => {
          resolve(resp.data) 
        })
        .catch(err => {
          reject(err)
        })
    })
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
