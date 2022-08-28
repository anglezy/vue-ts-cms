/*
 * @Description: 这是***页面（组件）
 * @Date: 2022-08-27 16:44:49
 * @Author: 米虫
 * @LastEditors: 米虫
 * @LastEditTime: 2022-08-27 16:45:05
 */
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)

const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function formatUtcString(
  utcString: string,
  format: string = DATE_TIME_FORMAT
) {
  return dayjs.utc(utcString).format(format)
}

export function formatTimestamp(
  timestamp: number,
  format: string = DATE_TIME_FORMAT
) {
  return ''
}
