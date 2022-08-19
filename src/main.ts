/*
 * @Description: 这是***页面（组件）
 * @Date: 2022-08-18 16:44:01
 * @Author: 米虫
 * @LastEditors: 米虫
 * @LastEditTime: 2022-08-19 23:37:12
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 全局引用
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/css/index.less'

// import './service/axios.ts'
import hyRequest from './service'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(ElementPlus)
app.mount('#app')

hyRequest.request({
  url: '/home/multidata',
  method: 'GET',
  headers: {},
  interceptors: {
    requestInterceptor: (config) => {
      console.log('单独请求的config')
      // AxiosRequestConfig<any>.headers?: AxiosRequestHeaders | undefined
      if (config && config.headers) {
        config.headers['token'] = '123'
      }
      return config
    },
    responseInterceptor: (res) => {
      console.log('单独响应的response')
      return res
    }
  }
})

interface DataType {
  data: any
  returnCode: string
  success: boolean
}

hyRequest
  .get<DataType>({
    url: '/home/multidata',
    showLoading: false
  })
  .then((res) => {
    console.log(res.data)
    console.log(res.returnCode)
    console.log(res.success)
  })
