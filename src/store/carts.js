import axios from 'axios'

export default {
    namespaced: true,
    state: {
        cart: {
            carts: []
        },
        cartsTotal: 0
    },
    actions: {
        getCart (context) {
            const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
            context.commit('LOADING', true, { root: true })
            axios.get(url).then((response) => {
                context.commit('CART', response.data.data)
                context.commit('CARTTOTAL', response.data.data.carts.length)
                context.commit('LOADING', false, { root: true })
            })
        },
        removeCartItem (context, id) {
            const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`
            context.commit('LOADING', true, { root: true })
            axios.delete(url).then((response) => {
                context.commit('LOADING', false, { root: true })
                context.dispatch('getCart')
                if (response.data.success) {
                    context.dispatch('messagesModules/updateMessage', { message: `${response.data.message}`, status: 'success' }, { root: true })
                } else {
                    context.dispatch('messagesModules/updateMessage', { message: `${response.data.message}`, status: 'danger' }, { root: true })
                }
            })
        },
        addToCart (context, { id, qty }) {
            const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
            const cart = {
                product_id: id,
                qty
            }
            context.commit('LOADING', true, { root: true })
            axios.post(url, { data: cart }).then((response) => {
                if (response.data.success) {
                    context.dispatch('messagesModules/updateMessage', { message: `${response.data.message}`, status: 'success' }, { root: true })
                } else {
                    context.dispatch('messagesModules/updateMessage', { message: `${response.data.message}`, status: 'danger' }, { root: true })
                }
                context.commit('LOADING', false, { root: true })
                context.dispatch('getCart')
            })
        }
    },
    mutations: {
        CART (state, payload) {
            state.cart = payload
        },
        CARTTOTAL (state, payload) {
            state.cartsTotal = payload
        }
    },
    getters: {
        cart (state) {
            return state.cart
        },
        cartstotal (state) {
            return state.cartsTotal
        }
    }
}
