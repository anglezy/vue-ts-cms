/*
 * @Description: 这是***页面（组件）
 * @Date: 2022-08-24 16:34:49
 * @Author: 米虫
 * @LastEditors: 米虫
 * @LastEditTime: 2022-08-28 15:04:41
 */
type IFormType = 'input' | 'password' | 'select' | 'datepicker'

export interface IFormItem {
  field: string
  type: IFormType
  label: string
  rules?: any[]
  placeholder?: any
  // 针对select
  options?: any[]
  // 针对特殊的属性
  otherOptions?: any
}

export interface IForm {
  formItems: IFormItem[]
  labelWidth?: string
  colLayout?: any
  itemLayout?: any
}
