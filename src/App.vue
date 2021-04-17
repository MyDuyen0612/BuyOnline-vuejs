<template>
  <div id="app">

    <router-view/>

  </div>
</template>
<script>
export default ({
 created() {
   const date = localStorage.getItem('date');
   const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
   if(today.toISOString()>date){
     localStorage.removeItem('date');
     localStorage.removeItem('jwt');
   }
 },
})
</script>

<style>
</style>