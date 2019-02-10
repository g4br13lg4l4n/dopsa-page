import isLocal from '../plugin/isLocal'

const url = isLocal ? 'http://localhost:8000/api/' : 'http://dev.system.grupodopsa.com/api/'
const configService = {
  apiUrl: url
}
export default configService
