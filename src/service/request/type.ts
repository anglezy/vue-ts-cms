/*
 * @Description: 这是***页面（组件）
 * @Date: 2022-08-19 15:38:11
 * @Author: 米虫
 * @LastEditors: 米虫
 * @LastEditTime: 2022-08-19 16:43:16
 */
import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface HYRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

export interface HYRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: HYRequestInterceptors<T>
  showLoading?: boolean
  headers?: any
}
