/*
 * @Description: 这是***页面（组件）
 * @Date: 2022-08-24 12:44:19
 * @Author: 米虫
 * @LastEditors: 米虫
 * @LastEditTime: 2022-08-24 12:44:49
 */
const dashboard = () => import('@/views/main/analysis/dashboard/dashboard.vue')
export default {
  path: '/main/analysis/dashboard',
  name: 'dashboard',
  component: dashboard,
  children: []
}
