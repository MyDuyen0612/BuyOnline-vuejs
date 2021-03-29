<template>
  <div class="transport">
    <div class="row h-100">
      <div class="col-md-8">
        <h3>Giao hàng</h3>
        <Inputtable :fields="fields" :items="items" :isAdd="false" />
      </div>
      <div class="col-md-4">
        <img src="../assets/img/transport.svg" atl="" class="img-fluid"/>
      </div>
    </div>
  </div>
</template>

<script>
import Inputtable from "../components/Inputtable.vue";
export default {
  name: "Transport",
  components: {
    Inputtable,
  },
  data() {
    return {
      items: [
        {
          Mavc: "VC01",
          Tenkh: "Mỹ Dyên",
          Price: "2300000",
          Status: "Đang vận chuyển",
        },
        {
          Mavc: "VC02",
          Tenkh: "Thành Đạt",
          Price: "1100000",
          Status: "Đang vận chuyển",
        },
      ],
      fields: [
        {
          key: "Mavc",
          label: "Mã vận chuyển",
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
          key: "Status",
          label: "Tình trạng",
        },
      ],
    };
  },
};
</script>

<style  scoped>
</style>