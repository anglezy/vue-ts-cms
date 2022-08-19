<!--
 * @Description: 这是***页面（组件）
 * @Date: 2022-08-18 16:44:01
 * @Author: 米虫
 * @LastEditors: 米虫
 * @LastEditTime: 2022-08-19 23:47:00
-->
<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
   -->
  <!-- <h2>{{ $store.state.name}}</h2>
  <router-link to="/login">首页</router-link>
  <router-link to="/main">主页</router-link>
  <el-button>456</el-button> -->
  <!-- <el-button type="primary">456</el-button> -->
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import HelloWorld from 'components/HelloWorld.vue'

export default defineComponent({
  name: 'App',
  components: {
    // HelloWorld
  }
})
</script>

<style lang="less">
.app {
  height: 100%;
}
</style>
