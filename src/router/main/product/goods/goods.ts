/*
 * @Description: 这是***页面（组件）
 * @Date: 2022-08-24 12:37:21
 * @Author: 米虫
 * @LastEditors: 米虫
 * @LastEditTime: 2022-08-24 12:38:00
 */
const goods = () => import('@/views/main/product/goods/goods.vue')
export default {
  path: '/main/product/goods',
  name: 'goods',
  component: goods,
  children: []
}
