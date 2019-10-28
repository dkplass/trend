export default {
  namespaced: true,
  state: {
    messages: []
  },
  actions: {
    updateMessage (context, { message, status }) {
      const timestamp = Math.floor(new Date() / 1000)
      context.commit('MESSAGE', {
        message,
        status,
        timestamp
      })
      context.dispatch('removeMessageWithTiming', timestamp)
    },
    removeMessage (context, num) {
      context.commit('REMOVE_MESSAGE', num)
    },
    removeMessageWithTiming (context, timestamp) {
      setTimeout(() => {
        context.state.messages.forEach((item, i) => {
          if (item.timestamp === timestamp) {
            context.commit('REMOVE_MESSAGE', i)
          }
        })
      }, 5000)
    }
  },
  mutations: {
    MESSAGE (state, payload) {
      state.messages.push(payload)
    },
    REMOVE_MESSAGE (state, payload) {
      state.messages.splice(payload, 1)
    }
  },
  getters: {
    messages (state) {
      return state.messages
    }
  }
}
