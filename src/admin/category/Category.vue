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
          src="../../assets/img/category.svg"
          atl=""
          class="img-fluid"
        />
      </div>
    </div>
  </div>
</template>

<script>
import categoryAPI from '../../api/categoryAPI'
import Inputtable from "../../components/Inputtable.vue";
export default {
  name: "Product",
  components: {
    Inputtable,
  },
  data() {
    return {
      link: 'addcategory',
        items:[
            {
                id:1,
                name:'adfasdfsdf'

            },{
                id:2,
                name:'gegege'
            }
        ],
        fields: [
        {
          key: "id",
          label: "Mã Danh mục",
        },
        {
          key: "name",
          label: "Tên Danh mục",
        }
      ],
    };
  },
  mounted(){
      categoryAPI.getAll().then((response)=>{
          this.category = response;
      }).catch((error)=>{
          console.log(error);
      });
  }
};
</script>

<style  scoped>
#image {
  position: absolute;
  z-index: 1;
}
</style>