<template>
  <div>
    <b-table striped hover :items="dataTable"></b-table>
  </div>
</template>

<script>
  export default {
    props:{
      dataTable:Array
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