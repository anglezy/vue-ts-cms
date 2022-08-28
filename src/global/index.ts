/*
 * @Description: 这是***页面（组件
 * @Date: 2022-08-19 13:57:18
 * @Author: 米虫
 * @LastEditors: 米虫
 * @LastEditTime: 2022-08-27 16:54:16
 */
import { App } from 'vue'
// import registerElement from './register-element'
import registerProperties from './register-properties'

export function globalRegister(app: App): void {
  app.use(registerProperties)
}
