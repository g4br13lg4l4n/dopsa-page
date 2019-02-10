import isLocal from '../plugin/isLocal'

const url = isLocal ? 'http://localhost:8000/api/' : 'https://dev.system.grupodopsa.com/api/'
const configService = {
  apiUrl: url
}
export default configService
