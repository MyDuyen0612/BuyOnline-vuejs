<template>
<div class="Donhang">
    <div class="row h-100">
      <div class="col-md-6">
        <h3>Đơn hàng</h3>
        <p>Đơn hàng đang chờ duyệt
        </p>
      </div>
      <div class="col-md-6">
      <img src="../assets/img/home_admin.svg" atl="" class="img-fluid"/>
      </div>
    </div>
    <h5>Danh sách đơn hàng</h5>
    <Inputtable/>
</div>
</template>

<script>
import Inputtable from '../components/Inputtable.vue'
  export default {
    name: 'Donhang',
    components:{
      Inputtable
    }
  }
</script>

<style  scoped>

</style>