/*
 * @Description: 这是***页面（组件）
 * @Date: 2022-08-20 15:01:06
 * @Author: 米虫
 * @LastEditors: 米虫
 * @LastEditTime: 2022-08-20 15:01:53
 */
export interface IAccount {
  name: string
  password: string
}

export interface ILoginResult {
  id: number
  name: string
  token: string
}

export interface IDataType<T = any> {
  code: number
  data: T
}
