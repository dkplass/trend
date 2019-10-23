<template>
  <div>
    <Alert></Alert>
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <router-link to="/home">
        <img src="../assets/logo.png" alt />
      </router-link>
      <button
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        class="navbar-toggler collapsed mx-2"
      >
        <span class="close">
          <i class="fas fa-times"></i>
        </span>
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="navbarSupportedContent" class="collapse navbar-collapse toggle-menu">
        <ul class="navbar-nav mr-auto w-100">
          <li class="nav-item">
            <router-link to="/home" class="nav-link">首頁</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/shop" class="nav-link">線上商店</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/events" class="nav-link">優惠活動</router-link>
          </li>
        </ul>
        <div class="btn-group mx-2 favorite">
          <Favorite></Favorite>
        </div>
        <div class="btn-group mx-2 cart">
          <router-link to="/pay" class="btn cart-btn">
            <i class="fas fa-shopping-cart fa-lg"></i>
            <span class="badge badge-pill badge-danger customize-badge">
              {{ cartstotal }}
            </span>
          </router-link>
        </div>
      </div>
    </nav>
    <main class="main">
      <router-view></router-view>
    </main>
    <footer class="footer bg-light mt-5">
      <div class="container">
        <ul class="row d-md-flex footer-content">
          <li class="footer-item col-md-4 my-4">
            <h5 class="footer-title">Trend</h5>
            <p class="text-muted">熱愛潮流服飾的網路商店</p>
          </li>
          <li class="footer-item col-md-4 my-4">
            <h5 class="footer-title">聯絡我們</h5>
            <ul>
              <li>
                <a href="tel:+1234567890" class="text-muted">TEL： 12345678910</a>
              </li>
              <li>
                <a href="mailto:carolshop@mail.com" class="text-muted">Mail： trend@mail.com</a>
              </li>
              <li class="text-muted">地址： 台中市</li>
            </ul>
          </li>
          <li class="footer-item col-md-4 my-4">
            <h5 class="footer-title">跟隨我們</h5>
            <ul class="social-media">
              <li class="social-media-item">
                <a href="#" class="text-primary">
                  <i class="fab fa-facebook footer-icon"></i>
                </a>
              </li>
              <li class="social-media-item">
                <a href="#" class="text-primary">
                  <i class="fab fa-twitter footer-icon"></i>
                </a>
              </li>
              <li class="social-media-item">
                <a href="#" class="text-primary">
                  <i class="fab fa-instagram footer-icon"></i>
                </a>
              </li>
              <li class="social-media-item">
                <a href="#" class="text-primary">
                  <i class="fab fa-line footer-icon"></i>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <hr />
      <div class="copyright text-center">ⓒ 2019 Trend by Hans</div>
    </footer>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Alert from './AlertMessage'
import Favorite from './Favorite'
export default {
  components: {
    Alert,
    Favorite
  },
  methods: {
    ...mapActions('cartsModules', ['getCart'])
  },
  computed: {
    ...mapGetters('cartsModules', ['cart', 'cartstotal'])
  },
  created () {
    this.getCart()
  }
}
</script>

<style lang="scss" scope>
</style>
