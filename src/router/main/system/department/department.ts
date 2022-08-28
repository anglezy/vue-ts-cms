/*
 * @Description: 这是***页面（组件）
 * @Date: 2022-08-24 12:35:41
 * @Author: 米虫
 * @LastEditors: 米虫
 * @LastEditTime: 2022-08-24 12:35:53
 */
const department = () => import('@/views/main/system/department/department.vue')
export default {
  path: '/main/system/department',
  name: 'department',
  component: department,
  children: []
}
