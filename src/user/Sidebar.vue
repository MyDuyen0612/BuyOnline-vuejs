<template>
<div class="sidebar">
    <b-sidebar id="sidebar-no-header" aria-labelledby="sidebar-no-header-title" no-header shadow bg-variant="light" text-variant="light" >
      <template #default="{ hide }">
        <div class="p-3">
          <div class="d-flex align-items-center  flex-column">
          <b-img center src="../assets/img/logo.jpg" alt="Center image" class="logo"></b-img>
            <!-- <h4 id="sidebar-no-header-title">Shinn1999</h4> -->
            <div class="text-center my-3">
              <b-button id="button-1" variant="light"><b-icon icon="suit-heart"></b-icon></b-button>
              <b-button id="button-2" variant="light"><b-icon icon="cart"></b-icon></b-button>
              <b-tooltip target="button-1" placement="bottom" variant="light">Sản phẩm yêu thích</b-tooltip>
              <b-tooltip target="button-2" placement="bottom" variant="light">Giỏ hàng</b-tooltip>
            </div>
            <div class="dividee-memu"></div>
          </div>
          <nav class="mb-3">
            <b-nav vertical>
              <b-nav-item active @click="hide">NEW ARRIVALS</b-nav-item>
              <b-nav-item href="#link-1" @click="hide">ĐỒ NAM</b-nav-item>
              <b-nav-item href="#link-1" @click="hide">ĐỒ NỮ</b-nav-item>
              <b-nav-item href="#link-2" @click="hide">ĐỒ ĐÔI</b-nav-item>
              <b-nav-item href="#link-2" @click="hide">ÁO KHOÁC</b-nav-item>

            </b-nav>
          </nav>
          <b-button variant="light" block @click="hide">Close</b-button>
        </div>
      </template>
    </b-sidebar>
  </div>
</template>

<script>
    export default {
      name: 'Sidebar',
    }
</script>

<style>
.b-sidebar{
  width: 270px;
}
/* #sidebar-no-header-title{
  color: darkslategray;
} */
.nav-item > .nav-link{
  color: darkslategrey;
  text-align: center;
}
.nav-item > .nav-link:hover{
  color: rgb(161, 158, 158);
}
.dividee-memu{
  border: 1px solid black;
  width: 100%;
}
.logo{
  width: 80%;
  height: 80%;
}
</style>