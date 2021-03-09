<template>
  <div>
    <b-table :fields="fields" :items="items" ></b-table>
  </div>
</template>

<script>
  export default {
    props:{
      
      items:Array,
      fields:Array
    },
    name: 'Inputtable',
    data() {
      return {
      }
    }
  }
</script>

<style  scoped>

</style>