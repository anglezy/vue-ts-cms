/*
 * @Description: 这是***页面（组件）
 * @Date: 2022-08-18 16:44:01
 * @Author: 米虫
 * @LastEditors: 米虫
 * @LastEditTime: 2022-08-19 01:33:49
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
