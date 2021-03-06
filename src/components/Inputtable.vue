<template>
  <div>
    <b-table striped hover :items="items"></b-table>
  </div>
</template>

<script>
  export default {
    name: 'Inputtable',
    data() {
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