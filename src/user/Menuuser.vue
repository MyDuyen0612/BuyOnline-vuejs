<template>
  <div >
  <!-- <div class="py-4 px-3 mb-4 bg-light">
    <div class="media d-flex align-items-center">
      <img src="../assets/img/admin.jpg" 
      alt="..." width="65" class="mr-3 rounded-circle img-thumbnail shadow-sm">
      <div class="media-body">
        <h4 class="m-0">My Duyen</h4>
        <p class="font-weight-light text-muted mb-0">Administrator</p>
      </div>
    </div>
  </div> -->
  <div class="d-flex align-items-center  flex-column">
          <!-- <b-img center src="../assets/img/logo.jpg" alt="Center image" class="logo"></b-img> -->
            <!-- <h4 id="sidelbar-no-header-title">Shinn1999</h4> -->
            <div class="text-center my-3">
              <b-button id="button-1" variant="light"><b-icon icon="suit-heart"></b-icon></b-button>
              <b-button id="button-2" variant="light"><b-icon icon="cart"></b-icon></b-button>
              <b-tooltip target="button-1" placement="bottom" variant="light">Sản phẩm yêu thích</b-tooltip>
              <b-tooltip target="button-2" placement="bottom" variant="light">Giỏ hàng</b-tooltip>
            </div>
            <div class="dividee-memu"></div>
          </div>

  <p class="text-gray font-weight-bold text-uppercase px-3 small pb-4 mb-0">Đạt Đẹp Trai</p>

  <ul class="nav flex-column bg-white mb-0">
    <li class="nav-item">
      <router-link to="/" class="nav-link text-dark font-italic bg-light">
        <i class="fa fa-th-large mr-3 text-primary fa-fw"></i>
         Home
      </router-link>
    </li>
    <li class="nav-item">
      <router-link to="/" class="nav-link text-dark font-italic bg-light">
        <i class="fa fa-cubes mr-3 text-primary fa-fw"></i>
          NEW ARRIVALS
      </router-link>
    </li>
    <li class="nav-item">
      <router-link to="/" class="nav-link text-dark font-italic bg-light">
        <i class="fas fa-truck-moving mr-3 text-primary fa-fw"></i>
          WOMEN 
      </router-link>
    </li>
    <li class="nav-item">
      <router-link to="/" class="nav-link text-dark font-italic bg-light">
        <i class="fas fa-bell mr-3 text-primary fa-fw"></i>
          MEN
      </router-link>
    </li>
    <li class="nav-item">
       <router-link to="/" class="nav-link text-dark font-italic bg-light">
        <i class="fas fa-user mr-3 text-primary fa-fw"></i>
          COUPLE
       </router-link>
    </li>
    <li class="nav-item">
       <router-link to="/" class="nav-link text-dark font-italic bg-light">
        <i class="fas fa-user mr-3 text-primary fa-fw"></i>
        
       </router-link>
    </li>
  </ul>
</div>
</template>

<script>
  export default {
    name: 'Menuuser',

  }
</script>
<style  scoped>

</style>