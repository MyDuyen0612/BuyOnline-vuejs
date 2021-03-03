<template>
  <div class="home">
    <Header/>
    <Sidebar/>
    <Carousel/>
  </div>
</template>

<script>
import Header from '../user/Header.vue'
import Sidebar from '../user/Sidebar.vue'
import Carousel from '../user/Carousel.vue'
export default {
  name: 'Home',
 components:{
    Header, 
    Sidebar,
    Carousel
}
}
</script>
<style scoped>

</style>
