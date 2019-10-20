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
    name: 'Login',
    path: '/login',
    component: () => import('../views/admin/Login.vue'),
    meta: {       
      title: '後台管理系統登入',
    },
  },
  {
    name: 'Dashboard',
    path: '/admin',
    component: () => import('../components/Dashboard.vue'),
    children: [
      {
        path: 'products',
        name: 'Products',
        component: () => import('../views/admin/Products.vue'),
        meta: { 
          requiresAuth: true,
          title: '產品管理頁面',
        },
      },
      {
        path: 'coupons',
        name: 'Coupons',
        component: () => import('../views/admin/Coupons.vue'),
        meta: { 
          requiresAuth: true,
          title: '產品管理頁面', 
        },
      },
      {
        path: 'orders',
        name: 'Orders',
        component: () => import('../views/admin/Orders.vue'),
        meta: { 
          requiresAuth: true,
          title: '產品管理頁面',
        },
      }
    ],
  },
]

const router = new VueRouter({
  routes
})

export default router
