/*
 * @Description: 这是***页面（组件）
 * @Date: 2022-08-20 00:58:34
 * @Author: 米虫
 * @LastEditors: 米虫
 * @LastEditTime: 2022-08-20 00:58:50
 */
class LocalCache {
  setCache(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  getCache(key: string) {
    // obj => string => obj
    const value = window.localStorage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }

  deleteCache(key: string) {
    window.localStorage.removeItem(key)
  }

  clearCache() {
    window.localStorage.clear()
  }
}

export default new LocalCache()
