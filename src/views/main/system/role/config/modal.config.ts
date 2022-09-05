/*
 * @Description: 这是***页面（组件）
 * @Date: 2022-08-31 09:57:25
 * @Author: 米虫
 * @LastEditors: 米虫
 * @LastEditTime: 2022-08-31 09:57:28
 */
import { IForm } from '@/base-ui/form'

export const modalConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '角色名',
      placeholder: '请输入角色名'
    },
    {
      field: 'intro',
      type: 'input',
      label: '角色介绍',
      placeholder: '请输入角色介绍'
    }
  ],
  colLayout: { span: 24 },
  itemStyle: {}
}
