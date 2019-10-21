<template>
  <span>{{ cartQty }}</span>
</template>

<script>
export default {
  name: 'countcart',
  data () {
    return {
      cartQty: 0
    }
  },
  methods: {
    updateQty () {
      const vm = this
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      this.$http.get(url).then(response => {
        vm.cartQty = response.data.data.carts.length
      })
    }
  },
  created () {
    const vm = this
    vm.updateQty()
    vm.$bus.$on('cartQty:refresh', () => {
      vm.updateQty()
    })
  }
}
</script>
