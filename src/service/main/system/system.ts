/*
 * @Description: 这是***页面（组件）
 * @Date: 2022-08-27 14:43:17
 * @Author: 米虫
 * @LastEditors: 米虫
 * @LastEditTime: 2022-08-27 14:43:24
 */
import hyRequest from '../../index'

import { IDataType } from '../../types'

export function getPageListData(url: string, queryInfo: any) {
  return hyRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}
