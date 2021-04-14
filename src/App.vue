<template>
  <div id="app">

    <router-view/>

  </div>
</template>
<script>
export default ({
 created() {
   const date = localStorage.getItem('date');
   if(date == Date.now){
     localStorage.removeItem('date');
     localStorage.removeItem('jwt');
   }
 },
})
</script>

<style>
</style>