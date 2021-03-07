<template>
  <div class="menuuser">
  <div class="py-4 px-3 mb-4">
    <div class="media d-flex align-items-center">
      <img src="../assets/img/admin.jpg" 
      alt="..." width="65" class="mr-3 rounded-circle img-thumbnail shadow-sm">
      <div class="media-body">
        <h4 class="m-0">Shinn_1999</h4>
      </div>
    </div>
  </div>
  <div class="text-center my-3">
    <b-button id="button-1" variant="light"><b-icon icon="suit-heart"></b-icon></b-button>
    <b-button id="button-2" variant="light"><b-icon icon="cart"></b-icon></b-button>
    <b-tooltip target="button-1" placement="bottom" variant="light">Sản phẩm yêu thích</b-tooltip>&nbsp;
    <b-tooltip target="button-2" placement="bottom" variant="light">Giỏ hàng</b-tooltip>
  </div>
  <nav class="mb-3">
    <b-nav vertical>
      <b-nav-item active >NEW ARRIVALS</b-nav-item>
        <b-nav-item >ĐỒ NAM</b-nav-item>
        <b-nav-item >ĐỒ NỮ</b-nav-item>
        <b-nav-item >ĐỒ ĐÔI</b-nav-item>
        <b-nav-item >ÁO KHOÁC</b-nav-item>
    </b-nav>
  </nav>
</div>
</template>

<script>
  export default {
    name: 'Menuuser',

  }
</script>
<style  scoped>
.nav-item > .nav-link{
  color: darkslategrey;
  text-align: center;
}
.nav-item > .nav-link:hover{
  color: rgb(161, 158, 158);
}
</style>