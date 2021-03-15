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
      <b-tooltip target="button-3" placement="top" variant="light">
        Giỏ hàng
      </b-tooltip>
    </div>

    <nav class="mb-3">
      <b-nav vertical>
        <b-nav-item to="/" id="item">NEW ARRIVALS</b-nav-item>
        <b-nav-item to="/register" id="item">ĐĂNG KÝ</b-nav-item>
        <b-nav-item to="/admin/user" id="item">XEM DANH SÁCH THÀNH VIÊN</b-nav-item>
        <b-nav-item id="item">ĐỒ ĐÔI</b-nav-item>
        <b-nav-item id="item">ÁO KHOÁC</b-nav-item>
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
  color: black;
  text-align: center;
}
.nav-item > .nav-link:hover {
  color: blue;
}
.list-icon{
  margin-bottom: 15px;
}
.btn-icon{
  margin: 0px 12px 0px 12px;
}
#button-1 {
  width: 50px;
  height: 50px;
  background: grey;
  transition: width 2s, height 2s, transform 2s;
}

#button-1:hover {
  background: red;
  width: 75px;
  height: 75px;
  transform: rotate(720deg);
}
#button-2 {
  width: 50px;
  height: 50px;
  background: grey;
  transition: width 2s, height 2s, transform 2s;
}

#button-2:hover {
  background: red;
  width: 75px;
  height: 75px;
  transform: rotate(720deg);
}
#button-3 {

  width: 50px;
  height: 50px;
  background: grey;
  transition: width 2s, height 2s, transform 2s;
  
}

#button-3:hover {
  background: red;
  width: 75px;
  height: 75px;
  transform: rotate(720deg);
}
#item{
  font-size: 15px;
  color: black;
  transition-property: width;
  transition-duration: 2s;
}
#item:hover{
  
  font-size: 20px;
}
</style>