import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'

import './plugins/bootstrap-vue'

import {store} from './store/store'
import App from './App.vue'
import router from './router'

import { BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'
// import GAuth from 'vue-google-oauth2'
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

import VueSweetalert2 from 'vue-sweetalert2';



// const gauthOption = {
//   clientId: 'AIzaSyCwSxJ34jYRegxB4-Ki8GvBxWtfYMgraFA.apps.googleusercontent.com',
//   scope: 'profile email',
//   prompt: 'select_account'
// }
// Vue.use(GAuth, gauthOption)

Vue.use(VueSidebarMenu)

Vue.use(BootstrapVueIcons)
Vue.config.productionTip = false

Vue.use(VueSweetalert2);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
