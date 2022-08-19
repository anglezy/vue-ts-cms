/*
 * @Description: 这是***页面（组件）
 * @Date: 2022-08-19 01:14:49
 * @Author: 米虫
 * @LastEditors: 米虫
 * @LastEditTime: 2022-08-19 01:22:19
 */
import { createRouter,createWebHashHistory,RouteRecordRaw} from "vue-router"
const routes: RouteRecordRaw[] = [
  {
    path:'/',
    redirect:'/login'
  },
  {
    path:'/login',
    component:()=>import('@/views/login/login.vue')
  },
  {
    path:'/mian',
    component:()=>import('@/views/main/main.vue')
  }
]
const router = createRouter({
  routes,
  history: createWebHashHistory(),
})
export default router
