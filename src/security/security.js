import axios from 'axios'
import configService from '../API/config'

const access = {
  'Content-Type':'multipart/form-data',
  'grant_type': 'client_credentials',
  'client_id': '4',
  'client_secret': 'D226qJbWZYrzAXxVZVQEzhqVttrXBTbCXVtb3FMg'
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
