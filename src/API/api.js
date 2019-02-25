import axios from 'axios'
import configService from './config'

import security from '../security/security'
/* eslint-disable */
security.getToken().then(resp => {
  console.log(resp)
})

const connect = axios.create({
  baseURL: configService.apiUrl,
  headers: {
    Authorization: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjI5NzA4MzU4NThhNDU3OTI0ZDE5NGZjZTJlNDIwZDk3NDc4ZWVjODliYmY3MDBhMGQ2NzJiOTQyNDI5NTQ1M2Q5MzMyYTAxZDI3ZDcxMTY3In0.eyJhdWQiOiI0IiwianRpIjoiMjk3MDgzNTg1OGE0NTc5MjRkMTk0ZmNlMmU0MjBkOTc0NzhlZWM4OWJiZjcwMGEwZDY3MmI5NDI0Mjk1NDUzZDkzMzJhMDFkMjdkNzExNjciLCJpYXQiOjE1NTEwNTI3MDAsIm5iZiI6MTU1MTA1MjcwMCwiZXhwIjoxNTUxMDU0NTAwLCJzdWIiOiIiLCJzY29wZXMiOltdfQ.RyE-2-cNp_-kJyM_cP08Y-aPHqyjI-RqBE9mSHtIGSNrP3gHPeUe0-6l6LwrLIAQxC_-DBxyUzuVO5YUpXCwZDTV9alzBkhZb2618gkPE-fLXN9-iB0uOgPWjnL_g31RpJqDJaV2t1EdQSy0QLUOGr_c87flmZ4BgDMu9jsD8vTXslWcUX8vcX7fCxeOkXfY_ODElB0lYah9OXWqr2sjvvTjnpsFPLsvJM5uV2Np1IHJnak-RGKf_CX3gUc_PeckZvXJAHWvLxJOSFd7MNNs6nFIU8CU-R_e81oTK3DoWbWzMmNVgQ4Wt4t-mm7wX16IepSFSELUttKKk_Ch7mSZqd8Alk7R2-r4gZFSh1P9hp0xD4MS0VqlJc7apUf4P1Fh3CVAeetNXqLFIGhaK_ozgnjXlW0jQEQje-TqjEoXSOiwvqNW-CJU79tbaLO9BWLvgJD_5pAG9X2D2_K4i6vWvLbpzGbch9M1rcIxbVI_DAy8pyUUEAjOzXS15w56T6uvHuPwltBaj686e3p-YgGx9jMCOWzbj1qX7roa77McwNgK5SR1zn4yRlDd1iifW6bNKOKSfPRD9SPxTrSTGO6otUTAFfNvr7vxfnbqtZGRMjQgs_5hQIZY0ZjxYsAcmPfOvH-9KIAvktM2SVACIbu9qrBYP_Q4Fc9qrJfsyCoSK7g'
  },
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
      connect.get('products', id)
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
