/*
 * @Description: 这是***页面（组件）
 * @Date: 2022-08-28 15:03:35
 * @Author: 米虫
 * @LastEditors: 米虫
 * @LastEditTime: 2022-08-28 15:03:42
 */
import { ref } from 'vue'
import PageContent from '@/components/page-content'

export function usePageSearch() {
  const pageContentRef = ref<InstanceType<typeof PageContent>>()
  const handleResetClick = () => {
    pageContentRef.value?.getPageData()
  }
  const handleQueryClick = (queryInfo: any) => {
    pageContentRef.value?.getPageData(queryInfo)
  }
  return [pageContentRef, handleResetClick, handleQueryClick]
}
