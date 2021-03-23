import Vue from 'vue'
import VueRouter from 'vue-router'

//User
import User from '../views/Home.vue'
import Login from '../user/Login.vue'
import Orders from '../admin/Orders.vue'
import Home from '../user/Index.vue'
import Register from '../user/register'
import Cart from '../user/Cart.vue'
import Productdetail from '../components/Productdetail.vue'
import Profile from '../components/Profile.vue'

//Admin
const Admin = () => import('../views/Admin.vue')
const Productpage = () => import('../admin/product/Productpage.vue')
const TableUser = () => import('../admin/TableUser.vue')
const Category = () => import('../admin/category/Category.vue')
const Checkout = () => import('../user/Checkout.vue')
const Transport = () => import('../admin/Transport.vue')
const Addproduct = () => import("../admin/product/Addproduct.vue")
const AddCategory = () => import('../admin/category/AddCategory.vue')

Vue.use(VueRouter)

const routes = [
  //User

  {
    path: '/',
    name: 'Home',
    component: User,
    children: [{
      path: '',
      name: 'index',
      component: Home
    },

    {
      path: 'login',
      name: 'Login',
      component: Login
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
    {

      path: '/checkout',
      name: 'Checkout',
      component: Checkout
    },

    {
      path: '/:url',
      name: 'ProductDetail',
      component: Productdetail
    },
    {
      path: 'profile',
      name: 'Profile',
      component: Profile
    },

    ]
  },


  //Admin
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    redirect: '/admin/sanpham',
    children: [{
      path: 'sanpham',
      name: 'Productpage',
      component: Productpage,
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
      path: 'addproduct',
      name: 'addproduct',
      component: Addproduct,
    },
    {
      path: 'user',
      name: 'User',
      component: TableUser
    },
    {
      path: 'danhmuc',
      name: 'Category',
      component: Category,
    },
    {
      path: 'addcategory',
      name: 'addcategory',
      component: AddCategory,
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