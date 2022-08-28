/*
 * @Description: 这是***页面（组件）
 * @Date: 2022-08-28 16:29:25
 * @Author: 米虫
 * @LastEditors: 米虫
 * @LastEditTime: 2022-08-28 16:29:50
 */
import { useStore } from '@/store'

export function usePermission(pageName: string, hanldeName: string) {
  const store = useStore()
  const permissions = store.state.login.permissions
  const verifyPermission = `system:${pageName}:${hanldeName}`

  // name = "coderwhy"
  // !name -> false
  // !!name -> true
  return !!permissions.find((item) => item === verifyPermission)
}
