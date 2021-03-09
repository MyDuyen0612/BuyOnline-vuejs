<template>
  <div>
  <div class="py-4 px-3 mb-4 bg-light">
    <div class="media d-flex align-items-center">
      <img src="../assets/img/admin.jpg" 
      alt="..." width="65" class="mr-3 rounded-circle img-thumbnail shadow-sm">
      <div class="media-body">
        <h4 class="m-0">My Duyen</h4>
        <p class="font-weight-light text-muted mb-0">Administrator</p>
      </div>
    </div>
  </div>

  <p class="text-gray font-weight-bold text-uppercase px-3 small pb-4 mb-0">Shop Shinn_1999</p>

  <ul class="nav flex-column bg-white mb-0">
    <li class="nav-item">
      <router-link to="/admin/sanpham" class="nav-link text-dark font-italic bg-light">
        <i class="fa fa-th-large mr-3 text-primary fa-fw"></i>
         Sản phẩm
      </router-link>
    </li>
    <li class="nav-item">
      <router-link to="/admin/donhang" class="nav-link text-dark font-italic bg-light">
        <i class="fa fa-cubes mr-3 text-primary fa-fw"></i>
          Đơn hàng
      </router-link>
    </li>
    <li class="nav-item">
      <router-link to="/admin/giaohang" class="nav-link text-dark font-italic bg-light">
        <i class="fas fa-truck-moving mr-3 text-primary fa-fw"></i>
          Giao hàng
      </router-link>
    </li>
    <li class="nav-item">
      <router-link to="/admin/thongbao" class="nav-link text-dark font-italic bg-light">
        <i class="fas fa-bell mr-3 text-primary fa-fw"></i>
          Thông báo
      </router-link>
    </li>
    <li class="nav-item">
       <router-link to="/admin/taikhoan" class="nav-link text-dark font-italic bg-light">
        <i class="fas fa-user mr-3 text-primary fa-fw"></i>
          Tài khoản
       </router-link>
    </li>
     <li class="nav-item">
       <router-link to="/admin/user" class="nav-link text-dark font-italic bg-light">
        <i class="fas fa-user mr-3 text-primary fa-fw"></i>
         User
       </router-link>
    </li>
  </ul>
</div>
</template>

<script>
  export default {
    name: 'Menu',

  }
</script>
<style  scoped>

</style>