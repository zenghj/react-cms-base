import axios from 'axios'

const instance = axios.create({
  baseURL: '/',
  // transformResponse(res) {
    // console.log('transformResponse')
    // console.log(res)
    // let data = res.data || {}
    // data._res = res
    // return data
  // },
  // proxy: {},
})


// Add a response interceptor
instance.interceptors.response.use(function (response) {
  // Do something with response data
  let data = response.data || {};
  data._response = response
  return data;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});

export default instance;
