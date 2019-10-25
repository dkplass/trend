<template>
  <div>
    <button
      class="btn dropdown-toggle shadow-none"
      type="button"
      id="dropdownMenuButton"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false">
      <i class="fas fa-heart fa-lg"></i>
      <span class="badge badge-pill badge-danger customize-badge">{{ favoritesQty }}</span>
    </button>
    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
      <div class="text-center" v-if="favoritesQty === 0">目前沒有最愛</div>
      <div
        class="d-flex favorite-list mb-1"
        v-for="favoriteItem in favorites"
        :key="favoriteItem.id"
        v-else>
        <button
          type="button"
          class="btn text-danger btn-sm mx-1"
          @click.prevent="deleteFavoriteItem(favoriteItem.id)"
        >
          <i class="fas fa-trash-alt"></i>
        </button>
        <router-link class="dropdown-item dropdown-item-costomize" :to="`/shop/${favoriteItem.id}`">{{ favoriteItem.title }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'favorite',
  data () {
    return {
      favArr: [],
      prodArr: [],
      favProdArr: []
    }
  },
  methods: {
    deleteFavoriteItem (id) {
      this.$store.dispatch('favoritesModules/deleteFavoriteItem', id)
    },
    ...mapActions('favoritesModules', ['getFavorite', 'deleteFavoriteItem'])
  },
  computed: {
    favorites () {
      return this.$store.getters['favoritesModules/favorites']
    },
    ...mapGetters('favoritesModules', ['favoritesQty'])
  },
  created () {
    const vm = this
    this.$store.dispatch('productsModules/getProducts').then(() => {
      this.getFavorite()
      // console.log(this.$store)
      vm.favArr = vm.$store.getters['favoritesModules/favorites']
      vm.prodArr = vm.$store.getters['productsModules/products']
      // console.log(vm.favArr)
      // console.log(vm.prodArr)
      vm.prodArr.forEach(function (item) {
        vm.favArr.forEach(function (i) {
          if (item.id === i.id) {
            vm.favProdArr.push(item)
          }
        })
      })
      // console.log(vm.favProdArr)
    })
  }
}
</script>

<style lang="scss" scope>
.favorite-list {
  font-size: 0.6rem;
  line-height: 2;
}
</style>
