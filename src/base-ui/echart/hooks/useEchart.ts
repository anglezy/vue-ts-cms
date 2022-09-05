/*
 * @Description: 这是***页面（组件）
 * @Date: 2022-09-01 00:42:53
 * @Author: 米虫
 * @LastEditors: 米虫
 * @LastEditTime: 2022-09-01 01:04:20
 */
import * as echarts from 'echarts'

export default function (el: HTMLElement) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const chinaMapData = require('../data/china.json')
  echarts.registerMap('china', chinaMapData)
  const echartInstance = echarts.init(el)

  const setOptions = (options: echarts.EChartsOption) => {
    echartInstance.setOption(options)
  }

  const updateSize = () => {
    echartInstance.resize()
  }

  window.addEventListener('resize', () => {
    echartInstance.resize()
  })

  return {
    echartInstance,
    setOptions,
    updateSize,
    chinaMapData
  }
}
