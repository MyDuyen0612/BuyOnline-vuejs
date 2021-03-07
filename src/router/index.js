import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Admin from '../views/Admin.vue'
import Product from '../admin/Product.vue'
import Login from '../components/Login.vue'
import Donhang from '../admin/Donhang.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    redirect: '/admin/sanpham',
    children:[
      {
        path: 'sanpham',
        name: 'Product',
        component: Product,
      },
      {
        path: 'donhang',
        name: 'Donhang',
        component: Donhang,
      },
      {
        path: 'giaohang',
        name: 'Product',
        component: Product,
      },
      {
        path: 'thongbao',
        name: 'Product',
        component: Product,
      },
      {
        path: 'taikhoan',
        name: 'Product',
        component: Product,
      },
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
