<!--
 * @Description: 这是***页面（组件）
 * @Date: 2022-08-19 01:12:15
 * @Author: 米虫
 * @LastEditors: 米虫
 * @LastEditTime: 2022-08-20 00:22:27
-->
<template>
  <div class="login-container">
    <login-panel />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import LoginPanel from './cpns/login-panel.vue'
export default defineComponent({
  components: {
    LoginPanel
  },

  setup() {
    return {}
  }
})
</script>
<style lang="less" scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url('../../assets/img/login-bg.svg');
}
</style>
