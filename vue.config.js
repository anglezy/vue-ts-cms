/*
 * @Description: 这是***页面（组件）
 * @Date: 2022-08-19 00:20:35
 * @Author: 米虫
 * @LastEditors: 米虫
 * @LastEditTime: 2022-08-19 01:26:45
 */
const path = require('path')
module.exports = {
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       components: '@/components'
  //     }
  //   }
  // }
  configureWebpack:(config)=>{
    config.resolve.alias = {
      "@":path.resolve(__dirname,'src'),
      components:'@/components'


    }

  }


}
