/*
 * @Description: 这是***页面（组件）
 * @Date: 2022-09-01 00:35:23
 * @Author: 米虫
 * @LastEditors: 米虫
 * @LastEditTime: 2022-09-01 00:35:31
 */
import { coordinateData } from './coordinate-data'

export const convertData = function (data: any) {
  const res = []
  for (let i = 0; i < data.length; i++) {
    const geoCoord = coordinateData[data[i].name]
    if (geoCoord) {
      res.push({
        name: data[i].name,
        value: geoCoord.concat(data[i].value)
      })
    }
  }
  return res
}
