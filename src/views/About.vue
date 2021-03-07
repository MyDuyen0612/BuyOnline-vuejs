<template>
  <div class="home">
    <Header/>
    <Sidebar/>
    <Carousel/>
    <section class="products">
      <Product
        v-for="product in products"
        :key="product.color"
        :product="product"
      />
    </section>
  </div>
</template>

<script>
import Header from '../user/Header.vue'
import Sidebar from '../user/Sidebar.vue'
import Carousel from '../user/Carousel.vue'
import Product from '../user/Product.vue';
// import axios from 'axios'
export default {
  name: 'Home',
 components:{
    Header, 
    Sidebar,
    Carousel,
    Product
},
data () {
    return {
     
    }
  },
// created(){
  
//   function product(){
//   axios.get("http://103.146.23.233/api/product").then((response)=>{
//   console.log(response);
//   console.log("tao chua xong");
// })
//   }
//   product();
  
// }
}
</script>
<style scoped>
body {
    font-family: 'montseratt', sans-serif;
}

.products {
  display: flex;
  max-width: 1280px;
  padding: 25px;
  margin: 0 auto;
}
</style>
