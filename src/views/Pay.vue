<template>
  <div>
    <div class="container">
      <ul class="row step">
        <li class="col-4 text-center step-node" :class="{'active': step === 1}">確認購物車明細</li>
        <li class="col-4 text-center step-node" :class="{'active': step === 2}">填寫購物人資訊</li>
        <li class="col-4 text-center step-node" :class="{'active': step === 3}">付款/完成訂單</li>
      </ul>
      <template v-if="step === 1">
        <Cartlist
          :cartdata="cart"
          @emitCartItemId="removeCartItem"
          @couponCode="addCouponCode"></Cartlist>
        <div class="mb-4 step-btn">
          <router-link to="/shop" class="btn btn-secondary float-left">
            <i class="fas fa-arrow-left"></i>
            繼續購買
          </router-link>
          <button class="btn btn-danger d-inline-block float-right"
            @click.prevent="cartMessage"
            :disabled="cart.carts.length === 0" v-if="cart.carts.length === 0">
            <span class="px-1">請選購商品</span>
            <i class="fas fa-arrow-right"></i>
          </button>
          <button class="btn btn-danger d-inline-block float-right"
            @click.prevent="step = 2" v-else>
            <span class="px-1">下一步，填寫訂購資料</span>
            <i class="fas fa-arrow-right"></i>
          </button>
        </div>
      </template>
      <div v-if="step === 2" class="my-5 row justify-content-center">
        <div class="col-12">
          <table class="table table-md table-costomize">
            <thead class="thead-costomize">
              <tr>
                <th scope="col">商品名稱</th>
                <th scope="col">商品總價</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in cart.carts" :key="item.id">
                <td>{{ item.product.title }}</td>
                <td>{{ item.final_total | currency }}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td class="text-right text-costomize">訂單總額：</td>
                <td class="text-right text-costomize">{{ cart.final_total | currency }}</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <ValidationObserver
          ref="observer"
          v-slot="{ invalid }"
          tag="form"
          class="col-12 mx-auto form-costomize"
          @submit.prevent="createOrder"
        >
          <ValidationProvider rules="required|email" name="email" v-slot="{ errors }" slim>
            <div class="form-group">
              <label for="useremail">收件人電子郵件</label>
              <input
                type="email"
                class="form-control"
                id="useremail"
                v-model="form.user.email"
                :class="{ 'is-invalid': errors[0] }"
                placeholder="請輸入 Email"
              />
              <span v-if="errors[0]" class="text-danger">{{ errors[0] }}</span>
            </div>
          </ValidationProvider>

          <ValidationProvider rules="required" name="name" v-slot="{ errors }" slim>
            <div class="form-group">
              <label for="username">收件人姓名</label>
              <input
                type="text"
                class="form-control"
                id="username"
                v-model="form.user.name"
                :class="{ 'is-invalid': errors[0] }"
                placeholder="輸入姓名"
              />
              <span v-if="errors[0]" class="text-danger">{{ errors[0] }}</span>
            </div>
          </ValidationProvider>

          <ValidationProvider rules="required|phone" name="phone" v-slot="{ errors }" slim>
            <div class="form-group">
              <label for="usertel">收件人電話</label>
              <input
                type="text"
                class="form-control"
                id="usertel"
                v-model="form.user.tel"
                :class="{ 'is-invalid': errors[0] }"
                placeholder="請輸入電話"
              />
              <span v-if="errors[0]" class="text-danger">{{ errors[0] }}</span>
            </div>
          </ValidationProvider>

          <ValidationProvider rules="required" name="address" v-slot="{ errors }" slim>
            <div class="form-group">
              <label for="useraddress">收件人地址</label>
              <input
                type="text"
                class="form-control"
                id="useraddress"
                v-model="form.user.address"
                :class="{ 'is-invalid': errors[0] }"
                placeholder="請輸入地址"
              />
              <span v-if="errors[0]" class="text-danger">{{ errors[0] }}</span>
            </div>
          </ValidationProvider>

          <div class="form-group">
            <label for="useraddress">其他要求</label>
            <textarea name id class="form-control" v-model="form.message" cols="30" rows="10"></textarea>
          </div>
          <div class="mb-4 mt-5 step-btn">
            <router-link to="/shop" class="btn btn-secondary float-left">
              <i class="fas fa-arrow-left"></i>
              上一步，確認購物車明細
            </router-link>
            <button class="btn btn-danger d-inline-block float-right" :disabled="invalid">
              下一步，完成訂單/付款
              <i class="fas fa-arrow-right"></i>
            </button>
          </div>
        </ValidationObserver>
      </div>
      <div v-if="step === 3" class="my-5 row justify-content-center">
        <div class="col-12">
          <table class="table table-md table-costomize">
            <thead class="thead-costomize">
              <tr>
                <th scope="col">商品名稱</th>
                <th scope="col">商品總價</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in cart.carts" :key="item.id">
                <td>{{ item.product.title }}</td>
                <td>{{ item.final_total | currency }}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td class="text-right text-costomize">訂單總額：</td>
                <td class="text-right text-costomize">{{ cart.final_total | currency }}</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <form class="col-12 mt-5" @submit.prevent="payOrder">
          <table class="table">
            <tbody>
              <tr>
                <th width="100">Email</th>
                <td>{{ order.user.email }}</td>
              </tr>
              <tr>
                <th>姓名</th>
                <td>{{ order.user.name }}</td>
              </tr>
              <tr>
                <th>收件人電話</th>
                <td>{{ order.user.tel }}</td>
              </tr>
              <tr>
                <th>收件人地址</th>
                <td>{{ order.user.address }}</td>
              </tr>
              <tr>
                <th>付款狀態</th>
                <td>
                  <span v-if="!order.is_paid">尚未付款</span>
                  <span v-else class="text-success">付款完成</span>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="text-right" v-if="order.is_paid === false">
            <button class="btn btn-danger">確認付款去</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Cartlist from '../components/Cartlist'
export default {
  components: {
    Cartlist
  },
  data () {
    return {
      step: 1,
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      },
      orderId: '',
      order: {
        user: {}
      }
    }
  },
  methods: {
    removeCartItem (id) {
      this.$store.dispatch('cartsModules/removeCartItem', id)
    },
    addCouponCode (couponCode) {
      const vm = this
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/coupon`
      const coupon = {
        code: couponCode
      }
      vm.$store.dispatch('updateLoading', true)
      this.$http.post(url, { data: coupon }).then(response => {
        if (response.data.success) {
          this.$store.dispatch('messagesModules/updateMessage', { message: `${response.data.message}`, status: 'success' })
        } else {
          this.$store.dispatch('messagesModules/updateMessage', { message: `${response.data.message}`, status: 'danger' })
        }

        vm.getCart()
        vm.$store.dispatch('updateLoading', false)
      })
    },
    createOrder () {
      const vm = this
      const order = vm.form
      vm.$store.dispatch('updateLoading', true)
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order`
      this.$refs.observer.validate().then(isValid => {
        if (isValid) {
          this.$http.post(url, { data: order }).then(response => {
            this.$store.dispatch('messagesModules/updateMessage', { message: '訂單已建立', status: 'success' })
            vm.$store.dispatch('updateLoading', false)

            if (response.data.success) {
              vm.orderId = response.data.orderId
              vm.getOrder()
              vm.step = 3
            }
          })
        } else {
          this.$store.dispatch('messagesModules/updateMessage', { message: '欄位不完整', status: 'success' })
          vm.$store.dispatch('updateLoading', false)
        }
      })
    },
    getOrder () {
      const vm = this
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order/${vm.orderId}`
      vm.step = 3
      vm.$store.dispatch('updateLoading', true)
      this.$http.get(url).then(response => {
        vm.order = response.data.order
        vm.$store.dispatch('updateLoading', false)
      })
    },
    payOrder () {
      const vm = this
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/pay/${vm.orderId}`
      vm.$store.dispatch('updateLoading', true)
      this.$http.post(url).then(response => {
        if (response.data.success) {
          this.$store.dispatch('messagesModules/updateMessage', { message: `${response.data.message}`, status: 'success' })
          this.getOrder()
        } else {
          this.$store.dispatch('messagesModules/updateMessage', { message: `${response.data.message}`, status: 'danger' })
          this.getOrder()
        }
        vm.$store.dispatch('updateLoading', false)
      })
    },
    cartMessage () {
      this.$store.dispatch('messagesModules/updateMessage', { message: '請選購商品在進到下一步驟', status: 'success' })
    },
    ...mapActions('cartsModules', ['getCart'])
  },
  computed: {
    ...mapGetters('cartsModules', ['cart'])
  },
  created () {
    this.getCart()
  }
}
</script>

<style lang="scss" scope>
.step {
  margin: 3rem 0;
  overflow: hidden;
  list-style-type: none;
  padding: 0;
  .step-node {
    color: #000000;
    text-transform: uppercase;
    font-size: 1rem;
    position: relative;
    @for $i from 1 through 3 {
      &:nth-child(#{$i}) {
        &:before {
          content: "#{$i}";
          counter-increment: step;
          width: 20px;
          line-height: 20px;
          display: block;
          font-size: 10px;
          border: 1px solid #8f8260;
          color: #333;
          background-color: #ffffff;
          border-radius: 3px;
          margin: 0 auto 5px auto;
        }
      }
    }
  }
  .step-node + .step-node {
    &:after {
      content: "";
      width: 100%;
      height: 2px;
      background-color: #8f8260;
      position: absolute;
      left: -50%;
      top: 9px;
      z-index: -1;
    }
  }
  .step-node.active:before,
  .step-node.active:after {
    background-color: #8f8260;
    color: white;
  }
}
.step-btn {
  overflow: hidden;
}

.table-costomize {
  .thead-costomize {
    background-color: #8f8260;
    color: #ffffff;
  }
  .text-costomize {
    color: #8f8260;
  }
}

.form-costomize {
  margin-top: 4rem;
}

@media (max-width: 576px) {
  .step {
    .step-node {
      font-size: 0.6rem;
    }
  }
}
</style>
