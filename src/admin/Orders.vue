<template>
  <div class="Donhang">
    <div class="row h-100">
      <div class="col-md-8">
        <h5>Danh sách đơn hàng</h5>
        <Inputtable :fields="fields" :items="items" :isAdd="false"/>
      </div>
      <div class="col-md-4">
        <img src="../assets/img/orders.svg" atl="" class="img-fluid" />
      </div>
    </div>
  </div>
</template>

<script>
import Inputtable from "../components/Inputtable.vue";
export default {
  name: "Donhang",
  components: {
    Inputtable,
  },
  data() {
    return {
      items: [
        { Madh: "DH01", Tenkh: "Mỹ Duyên", Price: "2500000" },
        { Madh: "DH02", Tenkh: "Mỹ Duyên", Price: "1000000" },
      ],
      fields: [
        {
          key: "Madh",
          label: "Mã đơn hàng",
        },
        {
          key: "Tenkh",
          label: "Tên khách hàng",
        },
        {
          key: "Price",
          label: "Giá",
        },
        {
          key: "action",
          label: "Hành động",
        },
      ],
    };
  },
};
</script>

<style  scoped>
</style>