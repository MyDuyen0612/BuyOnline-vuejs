<template>
  <div class="Product">
    <div class="row h-100">
      <div class="col-md-8">
        <h5>Danh sách sản phẩm</h5>
        <Inputtable :items="product" :fields="fields" style="z-index: 2" :link="link"/>
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
import productAPI from '../../api/productAPI';
import Inputtable from "../../components/Inputtable.vue";
export default {
  name: "Product",
  components: {
    Inputtable,
  },
  data() {
    return {
      link: 'addproduct',
      isLoaded: false,
      product: [
    
      ],
      fields: [
        {
          key: "id",
          label: "Mã sản phẩm",
        },
        {
          key: "name",
          label: "Tên sản phẩm",
        },
        {
          key: "price",
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
  mounted(){
      productAPI.getAll().then((response)=>{
          this.product = response;
          this.isLoaded = true
          // console.log(response);
      }).catch((error)=>{
          console.log(error);
      });
  },
};
</script>

<style  scoped>
#image {
  position: absolute;
  z-index: 1;
}
</style>