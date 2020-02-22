import axios from 'axios'

export default (params) => {
  return axios.create({
    // baseURL: `http://192.168.0.101:3030`,
    baseURL: `http://10.240.240.40:3030`,
    timeout: 5000,
    withCredentials: true,
    ...params
  })
}
