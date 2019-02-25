import isLocal from '../plugin/isLocal'

const url = isLocal ? 'http://127.0.0.1:8001/' : 'https://dev.system.grupodopsa.com/'
const configService = {
  apiUrl: url
}
export default configService
