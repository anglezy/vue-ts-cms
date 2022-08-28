/*
 * @Description: 这是***页面（组件）
 * @Date: 2022-08-24 12:35:05
 * @Author: 米虫
 * @LastEditors: 米虫
 * @LastEditTime: 2022-08-24 12:35:09
 */
const role = () => import('@/views/main/system/role/role.vue')
export default {
  path: '/main/system/role',
  name: 'role',
  component: role,
  children: []
}
