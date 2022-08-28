/*
 * @Description: 这是***页面（组件）
 * @Date: 2022-08-27 16:43:05
 * @Author: 米虫
 * @LastEditors: 米虫
 * @LastEditTime: 2022-08-27 16:44:28
 */
import { App } from 'vue'

import { formatUtcString } from '@/utils/date-format'

export default function registerProperties(app: App) {
  app.config.globalProperties.$filters = {
    foo() {
      console.log('foo')
    },
    formatTime(value: string) {
      return formatUtcString(value)
    }
  }
}
