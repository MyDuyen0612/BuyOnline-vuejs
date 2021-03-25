import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'

import './plugins/bootstrap-vue'

import App from './App.vue'
import router from './router'

import { BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'
// import GAuth from 'vue-google-oauth2'
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

// const gauthOption = {
//   clientId: 'AIzaSyCwSxJ34jYRegxB4-Ki8GvBxWtfYMgraFA.apps.googleusercontent.com',
//   scope: 'profile email',
//   prompt: 'select_account'
// }
// Vue.use(GAuth, gauthOption)

Vue.use(VueSidebarMenu)

Vue.use(BootstrapVueIcons)
Vue.config.productionTip = false




new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
