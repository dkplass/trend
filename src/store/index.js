import Vue from 'vue'
import Vuex from 'vuex'

import productsModules from './products'
import cartsModules from './carts'
import messagesModules from './message'
import favoritesModules from './favorite'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    isLoading: false
  },
  actions: {
    // status 為 payload(載荷)
    updateLoading (context, status) {
      context.commit('LOADING', status)
    }
  },
  mutations: {
    LOADING (state, status) {
      state.isLoading = status
    }
  },
  modules: {
    productsModules,
    cartsModules,
    messagesModules,
    favoritesModules
  }
})
