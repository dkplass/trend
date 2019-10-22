import axios from 'axios'

export default {
  namespaced: true,
  state: {
    products: []
  },
  actions: {
    getProducts (context) {
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`
      context.commit('LOADING', true, { root: true })
      axios.get(url).then((response) => {
        context.commit('PRODUCTS', response.data.products)
        context.commit('LOADING', false, { root: true })
      })
    }
  },
  mutations: {
    PRODUCTS (state, payload) {
      state.products = payload
    }
  },
  getters: {
    products (state) {
      return state.products
    }
  }
}
