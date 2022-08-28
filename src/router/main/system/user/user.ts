/*
 * @Description: 这是***页面（组件）
 * @Date: 2022-08-23 18:14:00
 * @Author: 米虫
 * @LastEditors: 米虫
 * @LastEditTime: 2022-08-23 18:17:15
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const user = () => import('@/views/main/system/user/user.vue')
export default {
  path: '/main/system/user',
  name: 'user',
  component: user,
  children: []
}
