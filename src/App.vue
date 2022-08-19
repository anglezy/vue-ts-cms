<!--
 * @Description: 这是***页面（组件）
 * @Date: 2022-08-18 16:44:01
 * @Author: 米虫
 * @LastEditors: 米虫
 * @LastEditTime: 2022-08-19 12:33:06
-->
<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
   -->
  <h2>{{ $store.state.name}}</h2>
  <router-link to="/login">首页</router-link>
  <router-link to="/main">主页</router-link>
  <router-view></router-view>
  <el-button>456</el-button>
   <!-- <el-button type="primary">456</el-button> -->
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from 'components/HelloWorld.vue'

export default defineComponent({
  name: 'App',
  components: {
    // HelloWorld
  }
})
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
