<template>
  <div>
    <button
      class="btn dropdown-toggle"
      type="button"
      id="dropdownMenuButton"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false">
      <i class="fas fa-heart fa-lg"></i>
      <span class="badge badge-pill badge-danger customize-badge">{{ favoritesQty }}</span>
    </button>
    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
      <div
        class="d-flex favorite-list mb-1"
        v-for="favoriteItem in favorites"
        :key="favoriteItem.id"
      >
        <button
          type="button"
          class="btn text-danger btn-sm mx-1"
          @click.prevent="deleteFavoriteItem(favoriteItem.id)"
        >
          <i class="fas fa-trash-alt"></i>
        </button>
        <a class="dropdown-item" href="#">{{ favoriteItem.title }}</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'favorite',
  data () {
    return {}
  },
  methods: {
    deleteFavoriteItem (id) {
      this.$store.dispatch('favoritesModules/deleteFavoriteItem', id)
    },
    ...mapActions('productsModules', ['getProducts']),
    ...mapActions('favoritesModules', ['getFavorite', 'deleteFavoriteItem', 'incrementIfOddOnRootSum'])
  },
  computed: {
    ...mapGetters('productsModules', ['products']),
    ...mapGetters('favoritesModules', ['favorites', 'favoritesQty'])
  },
  created () {
    this.getProducts()
    this.getFavorite()
    // this.setFavoriteList()
    // console.log(this.$store) // for debug store
  }
}
</script>

<style lang="scss" scope>
.favorite-list {
  font-size: 0.6rem;
  line-height: 2;
}
</style>
