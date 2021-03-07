<template>
<div class="Product">
    <div class="row h-100">
      <div class="col-md-6">
        <h3>Product</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
        </p>
      </div>
      <div class="col-md-6">
      <img src="../assets/img/product.svg" atl="" class="img-fluid"/>
      </div>
    </div>
    <h5>Danh sách sản phẩm</h5>
    <Inputtable :dataTable="items"/>
</div>
</template>

<script>
import Inputtable from '../components/Inputtable.vue'
  export default {
    name: 'Product',
    components:{
      Inputtable
    },
      data(){
        return {
          items: [
            { 'Mã sản phẩm': 'sp01', 'Tên sản phẩm': 'Áo khoăc', 'Gía': '2500000'},
            { 'Mã sản phẩm': 'sp02', 'Tên sản phẩm': 'Áo thun', 'Gía': '2500000'},
            { 'Mã sản phẩm': 'sp03', 'Tên sản phẩm': 'Áo len', 'Gía': '2500000'},
            { 'Mã sản phẩm': 'sp04', 'Tên sản phẩm': 'Quần dài', 'Gía': '2500000'},
            { 'Mã sản phẩm': 'sp05', 'Tên sản phẩm': 'Váy dài', 'Gía': '2500000'},
          ]
        }
    }
  }
</script>

<style  scoped>

</style>