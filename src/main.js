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

import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import ImageMagnifier from 'vue-image-magnifier'



Vue.use(VueSidebarMenu)
Vue.use(BootstrapVueIcons)
Vue.config.productionTip = false

Vue.use(VueSweetalert2)
Vue.use(ImageMagnifier)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
