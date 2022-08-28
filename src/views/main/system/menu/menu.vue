<!--
 * @Description: 这是***页面（组件）
 * @Date: 2022-08-24 12:45:38
 * @Author: 米虫
 * @LastEditors: 米虫
 * @LastEditTime: 2022-08-28 16:09:44
-->
<template>
  <div class="menu">
    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="menu"
    ></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import PageContent from '@/components/page-content'

import { contentTableConfig } from './config/content.config'

export default defineComponent({
  name: 'hy-menu',
  components: {
    PageContent
  },
  setup() {
    return {
      contentTableConfig
    }
  }
})
</script>

<style scoped></style>
