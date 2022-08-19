/*
 * @Description: 这是***页面（组件）
 * @Date: 2022-08-18 16:44:01
 * @Author: 米虫
 * @LastEditors: 米虫
 * @LastEditTime: 2022-08-19 14:25:51
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 全局引用
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import './service/axios.ts'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(ElementPlus)
app.mount('#app')
