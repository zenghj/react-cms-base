import axios from 'axios'

export default axios.create({
  baseURL: '/',
  transformResponse(res) {
    let data = res.data || {}
    data._res = res
    return data
  },
  // proxy: {},
})
