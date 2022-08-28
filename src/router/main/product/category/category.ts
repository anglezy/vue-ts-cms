/*
 * @Description: 这是***页面（组件）
 * @Date: 2022-08-24 12:37:32
 * @Author: 米虫
 * @LastEditors: 米虫
 * @LastEditTime: 2022-08-24 12:37:45
 */
const category = () => import('@/views/main/product/category/category.vue')
export default {
  path: '/main/product/category',
  name: 'category',
  component: category,
  children: []
}
