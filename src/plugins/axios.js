import axios from 'axios'

axios.defaults.baseURL = '/';

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Do something with response data
  let data = response.data || {};
  data._response = response
  console.log('[response: ]', response)
  console.log('【axios data:】', data)
  return data;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});

export default axios