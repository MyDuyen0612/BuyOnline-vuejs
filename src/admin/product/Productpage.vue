<template>
  <div class="Product">
    <div class="row h-100">
      <div class="col-md-8">
        <h5>Danh sách sản phẩm</h5>
        <Inputtable :items="items" :fields="fields" style="z-index: 2" :link="link"/>
      </div>
      <div class="col-md-4">
        <img
          id="image"
          src="../../assets/img/product.svg"
          atl=""
          class="img-fluid"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Inputtable from "../../components/Inputtable.vue";
export default {
  name: "Product",
  components: {
    Inputtable,
  },
  data() {
    return {
      link: 'addproduct',
      items: [
        { Masp: "sp01", Tensp: "Áo khoăc", Price: "2500000" },
        { Masp: "sp02", Tensp: "Áo thun", Price: "2500000" },
        { Masp: "sp03", Tensp: "Áo len", Price: "2500000" },
        { Masp: "sp04", Tensp: "Quần dài", Price: "2500000" },
        { Masp: "sp05", Tensp: "Váy dài", Price: "2500000" },
      ],
      fields: [
        {
          key: "Masp",
          label: "Mã sản phẩm",
        },
        {
          key: "Tensp",
          label: "Tên sản phẩm",
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
      infoModal: {
        id: "add-modal",
        title: "Thêm mới",
        content: "abc ",
      },
      resetInfoModal() {},
    };
  },
  methods: {},
};
</script>

<style  scoped>
#image {
  position: absolute;
  z-index: 1;
}
</style>