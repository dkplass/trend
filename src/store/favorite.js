export default {
  namespaced: true,
  state: {
    favoriteQty: 0,
    favorite: [],
    favorite_class: ''
  },
  actions: {
    getFavorite (context) {
      let LocalStorage = JSON.parse(window.localStorage.getItem('favoriteStored')) || []
      context.commit('FAVORITE', LocalStorage)
      context.commit('FAVORITE_TOTAL', LocalStorage.length)
    },
    changeFavoriteClass (context, productId) {
      context.dispatch('getFavorite')
      let result = context.state.favorite.map(function (item) {
        return item.id
      }).indexOf(productId)
      if (result === -1) {
        context.commit('FAVORITE_CLASS', 'far fa-heart')
      } else {
        context.commit('FAVORITE_CLASS', 'fas fa-heart')
      }
    },
    addFavorite (context, product) {
      let favoriteItem = {
        id: product.id,
        title: product.title
      }
      context.commit('ADD_FAVORITE', favoriteItem)
      localStorage.setItem('favoriteStored', JSON.stringify(context.state.favorite))
      context.dispatch('getFavorite')
      context.dispatch('messagesModules/updateMessage', { message: '已加入我的最愛', status: 'success' }, { root: true })
    },
    deleteFavoriteItem (context, id) {
      context.commit('DELETE_FAVORITE', id)
      localStorage.setItem('favoriteStored', JSON.stringify(context.state.favorite))
      context.dispatch('getFavorite')
      context.dispatch('changeFavoriteClass', id)
      context.dispatch('messagesModules/updateMessage', { message: '已移出我的最愛', status: 'danger' }, { root: true })
    },
    isFavoriteItem (context, product) {
      context.dispatch('getFavorite')
      let result = context.state.favorite.map(function (item) {
        return item.id
      }).indexOf(product.id)
      if (result === -1) {
        context.dispatch('addFavorite', product)
        context.dispatch('changeFavoriteClass', product.id)
      } else {
        context.dispatch('deleteFavoriteItem', product.id)
        context.dispatch('changeFavoriteClass', product.id)
      }
    }
  },
  mutations: {
    FAVORITE (state, payload) {
      state.favorite = payload
    },
    FAVORITE_TOTAL (state, payload) {
      state.favoriteQty = payload
    },
    ADD_FAVORITE (state, payload) {
      state.favorite.push(payload)
    },
    DELETE_FAVORITE (state, payload) {
      state.favorite.forEach((item, index) => {
        if (item.id === payload) {
          state.favorite.splice(index, 1)
        }
      })
    },
    FAVORITE_CLASS (state, payload) {
      state.favorite_class = payload
    }
  },
  getters: {
    favorites (state) {
      return state.favorite
    },
    favoritesQty (state) {
      return state.favoriteQty
    },
    favoriteClass (state) {
      return state.favorite_class
    }
  }
}
