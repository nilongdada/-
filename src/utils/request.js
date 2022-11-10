import axios from 'axios'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

// 添加请求拦截器
service.interceptors.request.use(config => {
  return config
})

// 添加响应拦截器
service.interceptors.request.use(res => {
  const { data } = res

  return data
})

export default service

// import axios from 'axios'
// import { MessageBox, Message } from 'element-ui'
// import store from '@/store'
// import { getToken } from '@/utils/auth'

// // 这里是 封装请求的模块

// // create an axios instance 创建axios实例的形式
// const service = axios.create({
//   baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
//   // withCredentials: true, // send cookies when cross-domain requests
//   timeout: 5000 // request timeout
// })

// // request interceptor 请求拦截器
// service.interceptors.request.use(
//   config => {
//     // do something before request is sent
//     // 在请求之前，你可以统一的给所有请求干一些事情

//     if (store.getters.token) {
//       // 如果当前有 token 值的情况，统一的给所有的请求添加自定义请求头
//       config.headers['X-Token'] = getToken()
//     }
//     return config
//   },
//   error => {
//     // do something with request error
//     console.log(error) // for debug
//     return Promise.reject(error) // 在请求期间如果发生错误了
//   }
// )

// // response interceptor 响应拦截器
// service.interceptors.response.use(
//   /**
//    * If you want to get http information such as headers or status
//    * Please return  response => response
//   */

//   /**
//    * Determine the request status by custom code
//    * Here is just an example
//    * You can also judge the status by HTTP Status Code
//    */
//   response => {
//     const res = response.data

//     // if the custom code is not 20000, it is judged as an error.
//     if (res.code !== 20000) { // 20000 状态码是自行约定的 如果返回的code不是2000，就视为错误
//       Message({
//         message: res.message || 'Error',
//         type: 'error',
//         duration: 5 * 1000
//       })

//       // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
//       // 50008 - 不合法的token；50012 - 其他客户端在登录；50014 - token过期
//       if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
//         // to re-login 重新登录
//         MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
//           confirmButtonText: 'Re-Login',
//           cancelButtonText: 'Cancel',
//           type: 'warning'
//         }).then(() => {
//           store.dispatch('user/resetToken').then(() => {
//             // 1.移出 token 2.返回登录页重新登录 3.让页面重新刷新一下
//             location.reload()
//           })
//         })
//       }
//       return Promise.reject(new Error(res.message || 'Error'))
//     } else {
//       return res
//     }
//   },
//   error => {
//     console.log('err' + error) // for debug
//     Message({
//       message: error.message,
//       type: 'error',
//       duration: 5 * 1000
//     })
//     return Promise.reject(error)
//   }
// )

// export default service
