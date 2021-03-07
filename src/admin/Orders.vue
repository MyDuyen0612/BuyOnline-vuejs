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
    <Inputtable :dataTable="items"/>
</div>
</template>

<script>
import Inputtable from '../components/Inputtable.vue'
  export default {
    name: 'Donhang',
    components:{
      Inputtable
    },
    data(){
        return {
          items: [
            { 'Mã don hang': 'sp01', 'Khach hang': 'Áo khoăc', 'Gía': '2500000'},
            { 'Mã don hang': 'sp02', 'Khach hang': 'Áo thun', 'Gía': '2500000'},
          ]
        }
    }
  }
</script>

<style  scoped>

</style>