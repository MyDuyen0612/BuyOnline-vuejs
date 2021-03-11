<template>
  <div class="menuuser">
    <div class="py-4 px-3 mb-4">
      <div class="media-body">
        <h4 class="m-0 text-center">Shinn_1999</h4>
      </div>
    </div>

    <div class="list-icon d-flex justify-content-center">
       <b-button id="button-1" variant="light">
        <b-icon-person></b-icon-person>
      </b-button>
      <b-button id="button-2" variant="light" class="btn-icon">
        <b-icon-suit-heart></b-icon-suit-heart>
      </b-button>
      <b-button id="button-3" variant="light" to="/cart">
         <b-icon-cart></b-icon-cart>
      </b-button>
     
      <b-tooltip target="button-1" placement="top" variant="light">
        Tài khoản
      </b-tooltip>
      <b-tooltip target="button-2" placement="top" variant="light">
        Sản phẩm yêu thích
      </b-tooltip>
      <b-tooltip  target="button-3" placement="top" variant="light" >
        Giỏ hàng</b-tooltip>
    </div>

    <nav class="mb-3">
      <b-nav vertical>
        <b-nav-item to="/">NEW ARRIVALS</b-nav-item>
        <b-nav-item to="/register">ĐĂNG KÝ</b-nav-item>
        <b-nav-item to="/admin/user">XEM DANH SÁCH THÀNH VIÊN</b-nav-item>
        <b-nav-item>ĐỒ ĐÔI</b-nav-item>
        <b-nav-item>ÁO KHOÁC</b-nav-item>
      </b-nav>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Menuuser",
};
</script>
<style  scoped>
.nav-item > .nav-link {
  color: darkslategrey;
  text-align: center;
}
.nav-item > .nav-link:hover {
  color: rgb(161, 158, 158);
}
.list-icon{
  margin-bottom: 15px;
}
.btn-icon{
  margin: 0px 10px 0px 10px;
}
</style>