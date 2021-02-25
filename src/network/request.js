import axios from 'axios'
export function request(config) {
  const instance = axios.create({
    baseURL: 'https://m.maizuo.com',
    headers: {
      'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1613902053208391813201921","bc":"360700"}'
    },
    method: 'GET',
    timeout: 5000
  })
  return instance(config)
}