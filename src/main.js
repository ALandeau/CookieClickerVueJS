import Vue from 'vue'
import  VueCookie from 'vue-cookie'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false;
Vue.use(VueCookie);

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');
