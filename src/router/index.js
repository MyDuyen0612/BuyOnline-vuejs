import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Admin from '../views/Admin.vue'
import Productpage from '../admin/Productpage.vue'
import Login from '../components/Login.vue'
import Orders from '../admin/Orders.vue'

Vue.use(VueRouter)

const routes = [
  //User
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


  //Admin
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    redirect: '/admin/sanpham',
    children:[
      {
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
        name: 'Productpage',
        component: Productpage,
      },
      {
        path: 'thongbao',
        name: 'Productpage',
        component: Productpage,
      },
      {
        path: 'taikhoan',
        name: 'Productpage',
        component: Productpage,
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
