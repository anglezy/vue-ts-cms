/*
 * @Description: 这是***页面（组件）
 * @Date: 2022-08-19 01:30:48
 * @Author: 米虫
 * @LastEditors: 米虫
 * @LastEditTime: 2022-08-27 14:40:48
 */
import { createStore, Store, useStore as useVuexStore } from 'vuex'

import login from './login/login'
import system from './main/system/system'

import { IRootState, IStoreType } from './types'

const store = createStore<IRootState>({
  state() {
    return {
      name: 'zy',
      age: 18
    }
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    login,
    system
  }
})

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}

export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export default store
