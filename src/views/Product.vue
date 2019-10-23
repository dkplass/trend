<template>
  <div>
    <div class="container">
      <Breadcrumb :category="product.title"></Breadcrumb>
      <div class="row">
        <div class="col-lg-6 mx-auto">
          <div class="image text-center">
            <div class="image-layer">
              <a href="#" class="float-right" @click.prevent="is_favoriteItem(product)">
                <i class="favorite-icon" :class="favoriteClass"></i>
              </a>
            </div>
            <img :src="product.imageUrl" class="w-100" alt />
          </div>
        </div>
        <div class="col-lg-6 mx-auto">
          <h4 class="my-4">{{ product.title }}</h4>
          <div class="d-flex justify-content-between align-items-baseline my-4">
            <div
              class="h5"
              v-if="product.price == product.origin_price"
            >售價：{{ product.origin_price }} 元</div>
            <div
              class="h6"
              v-if="product.price !== product.origin_price"
            >原價：{{ product.origin_price }} 元</div>
            <div class="h5" v-if="product.price !== product.origin_price">
              <span class="text-danger">特價：</span>
              {{ product.price }} 元
            </div>
          </div>
          <hr />
          <div class="input-group my-4">
            <select class="form-control mr-5" v-model="qty">
              <option value="0" disabled selected>請選擇數量</option>
              <option :value="num" v-for="num in 10" :key="num">選購 {{ num }} {{ product.unit }}</option>
            </select>
            <button class="btn btn-customize" @click.prevent="addToCart(product.id, qty)">
              <i class="fas fa-spinner fa-spin" v-if="status.loadingItem === product.id"></i>
              <i class="fas fa-plus" v-else></i>
              加入購物車
            </button>
          </div>
          <table class="table table-responsive">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">肩寬</th>
                <th scope="col">全長</th>
                <th scope="col">胸寬</th>
                <th scope="col">腰圍</th>
                <th scope="col">臀圍</th>
                <th scope="col">褲襠</th>
                <th scope="col">褲腿長</th>
                <th scope="col">大腿圍</th>
                <th scope="col">褲管寬</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>36</td>
                <td>30.5cm</td>
                <td>137~140cm</td>
                <td>44cm</td>
                <td>90cm</td>
                <td>100cm</td>
                <td>28cm</td>
                <td>67.5cm</td>
                <td>62cm</td>
                <td>38cm</td>
              </tr>
              <tr>
                <td>38</td>
                <td>34cm</td>
                <td>139~142cm</td>
                <td>45cm</td>
                <td>94cm</td>
                <td>102cm</td>
                <td>28.5cm</td>
                <td>68.5cm</td>
                <td>64cm</td>
                <td>39cm</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col-12 mt-4">
          <h4 class="text-center">商品說明</h4>
          <span>{{ product.description }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Breadcrumb from '../components/Breadcrumb'
export default {
  components: {
    Breadcrumb
  },
  data () {
    return {
      product: {},
      productId: '',
      qty: 1,
      heartClass: 'far fa-heart',
      status: {
        loadingItem: ''
      }
    }
  },
  methods: {
    getProduct () {
      const vm = this
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${vm.productId}`
      vm.$store.dispatch('updateLoading', true)
      this.$http.get(url).then(response => {
        vm.product = response.data.product
        vm.$store.dispatch('updateLoading', false)
      })
    },
    addToCart (id, qty = 1) {
      this.$store.dispatch('cartsModules/addToCart', { id, qty })
    },
    is_favoriteItem (product) {
      this.$store.dispatch('favoritesModules/isFavoriteItem', product)
    },
    ...mapActions('favoritesModules', ['getFavorite', 'changeFavoriteClass', 'isFavoriteItem'])
  },
  computed: {
    ...mapGetters('favoritesModules', ['favorites', 'favoritesQty', 'favoriteClass'])
  },
  created () {
    this.productId = this.$route.params.productId
    this.getProduct()
    this.getFavorite()
    this.$store.dispatch('favoritesModules/changeFavoriteClass', this.productId)
  },
  beforeRouteUpdate (to, from, next) {
    this.productId = to.params.productId
    this.getProduct()
    next()
  }
}
</script>

<style lang="scss" scope>
.btn-customize {
  color: #fff;
  background-color: #8f8260;
  border-color: #8f8260;
}
.image {
  position: relative;
  .image-layer {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .favorite-icon {
    font-size: 2rem;
    color: #8f8260;
    margin: 0.4rem;
  }
}
</style>
