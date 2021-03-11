import Vue from 'vue'
import VueRouter from 'vue-router'
import User from '../views/Home.vue'
import Admin from '../views/Admin.vue'
import Productpage from '../admin/Productpage.vue'
import Login from '../user/Login.vue'
import Orders from '../admin/Orders.vue'
import TableUser from '../admin/TableUser.vue'
import Home from '../user/Index.vue'
import Register from '../user/register'
import Cart from '../user/Cart.vue'
Vue.use(VueRouter)

const routes = [
  //User
  {
    path: '/',
    name: 'Home',
    component: User,
    children: [
      {
        path: '',
        name: 'index',
        component: Home
      },
      {
        path: '/login',
        name: 'Login',
        component:  Login
      },
      {
        path: 'register',
        name: 'Register',
        component: Register
      },
      {
        path: '/cart',
        name: 'Cart',
        component: Cart
      },
      
    ]
  },


  //Admin
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    redirect: '/admin/sanpham',
    children: [
      {
        path: 'sanpham',
        name: 'Productpage',
        component:  Productpage,
      },
      {
        path: 'donhang',
        name: 'Orders',
        component: Orders,
      },
      {
        path: 'user',
        name: 'User',
        component: TableUser
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
