import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Site',
    component: () => import('../components/Site.vue'),
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('../views/Home.vue'),
        meta: {
          title: '首頁',
        }
      },
      {
        path: '/shop',
        name: 'Shop',
        component: () => import('../views/Shop.vue'),
        meta: {
          title: '商店',
          breadcrumb: [{
            name: '首頁',
            link: '/home'
          },
          {
            name: '線上商店',
            link: '/shop'
          }]
        }
      },
      {
        path: '/shop/:productId',
        name: 'Product',
        component: () => import('../views/Product.vue'),
        meta: {
          title: '商品頁面',
          breadcrumb: [{
            name: '首頁',
            link: '/home'
          },
          {
            name: '線上商店',
            link: '/shop'
          }]
        }
      },
      {
        path: '/pay',
        name: 'Pay',
        component: () => import('../views/Pay.vue'),
        meta: {
          title: '結帳頁面',
        }
      },
      {
        path: '/events',
        name: 'Events',
        component: () => import('../views/Events.vue'),
        meta: {
          title: '優惠活動',
          breadcrumb: [{
            name: '首頁',
            link: '/home'
          },
          {
            name: '優惠活動',
            link: '/events'
          }]
        }
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
