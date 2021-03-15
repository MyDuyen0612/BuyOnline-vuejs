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
<<<<<<< HEAD
import Transport from '../admin/Transport.vue'
import Productdetail from '../components/Productdetail.vue'

=======
import Cart from '../user/Cart.vue'
import Transport from '../admin/Transport.vue'
import Productdetail from '../components/Productdetail.vue'
>>>>>>> a532a00471beb51c0319bf668fab72281ac4a422
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
<<<<<<< HEAD
=======
        path: '/cart',
        name: 'Cart',
        component: Cart
      },
      {
>>>>>>> a532a00471beb51c0319bf668fab72281ac4a422
        path: 'productdetail',
        name: 'productdetail',
        component: Productdetail
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
        path: 'giaohang',
        name: 'Transport',
        component: Transport,
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
