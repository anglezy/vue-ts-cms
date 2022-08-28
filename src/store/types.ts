/*
 * @Description: 这是***页面（组件）
 * @Date: 2022-08-20 15:00:18
 * @Author: 米虫
 * @LastEditors: 米虫
 * @LastEditTime: 2022-08-27 18:26:07
 */
import { ILoginState } from './login/types'
import { ISystemState } from './main/system/types'

export interface IRootState {
  name: string
  age: number
}

export interface IRootWithModule {
  login: ILoginState
  system: ISystemState
}

export type IStoreType = IRootState & IRootWithModule
