import Vue from 'vue'
import axios from 'axios';
import VueAxios from 'vue-axios';
import Loading from 'vue-loading-overlay';
import { i18n } from "./i18n";
import "./vee-validate";
import 'vue-loading-overlay/dist/vue-loading.css';
import 'bootstrap';
import App from './App.vue'
import router from './router'
import './bus';
import currencyFilter from './filters/currency';
import dateFilter from './filters/date';

Vue.config.productionTip = false
axios.defaults.withCredentials = true;
Vue.use(VueAxios, axios);
Vue.component('Loading', Loading);
Vue.filter('currency', currencyFilter);
Vue.filter('date', dateFilter);

new Vue({
  i18n,
  router,
  render: h => h(App)
}).$mount('#app')

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  
  if(to.meta.requiresAuth) {
    const api = `${process.env.APIPATH}/api/user/check`;	    		
    axios.post(api).then(response => {
      console.log(response.data);
      if(response.data.success) {        
        next();
      } else {
        next({
          path: '/home',
        });
      }
    });
    
  } else {
    next();
  }
});