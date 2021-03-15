<template>
<div class="Product">
    <div class="row h-100">
      <div class="col-md-8">
          <h5>Danh sách sản phẩm</h5>
          <Inputtable :items="items" :fields="fields" style="z-index:2"/>
      </div>
      <div class="col-md-4">
        <img id="image" src="../assets/img/product.svg" atl="" class="img-fluid"/>
      </div>
    </div>
    <!-- Info modal -->
    <b-modal :id="infoModal.id" :title="infoModal.title" @hide="resetInfoModal" hide-footer>
      <b-form @submit.stop.prevent="onSubmit" @reset="resetInfoModal" >
        <b-form-group
          id="input-group-1"
          label="Tên sản phẩm:"
          label-for="input-1">
            <b-form-input
              id="input-1"
              v-model="form.tensp"
              type="text"
              placeholder="Nhập tên sản phẩm"
              required
            ></b-form-input>
        </b-form-group>
        
        <b-form-group
          id="input-group-2"
          label="Giá:"
          label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.price"
              type="number"
              placeholder="Nhập giá sản phẩm"
              required
            ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-3"
          label="Só lượng:"
          label-for="input-3">
            <b-form-input
              id="input-3"
              v-model="form.solung"
              type="number"
              placeholder="Nhập số lượng sản phẩm"
              required
            ></b-form-input>
        </b-form-group>
        
        <b-button class="mt-3" variant="warning" block @click="$bvModal.hide('add-modal')">Thêm sản phẩm</b-button>
      </b-form>
    </b-modal>
</div>
</template>

<script>
import Inputtable from '../components/Inputtable.vue'
  export default {
    name: 'Product',
    components:{
      Inputtable
    },
      data(){
        return {
          form: {
              tensp: '',
              soluong:0

          },
          items: [
            { Masp: 'sp01', Tensp: 'Áo khoăc', Price: '2500000'},
            { Masp: 'sp02', Tensp: 'Áo thun', Price: '2500000'},
            { Masp: 'sp03', Tensp: 'Áo len', Price: '2500000'},
            { Masp: 'sp04', Tensp: 'Quần dài', Price: '2500000'},
            { Masp: 'sp05', Tensp: 'Váy dài', Price: '2500000'},
          ],
          fields  : [
            {
              key: 'Masp',
              label:"Mã sản phẩm"
            },
            {
              key: 'Tensp',
              label:"Tên sản phẩm"
            },
            {
              key: 'Price',
              label:"Giá"
            },
            {
              key: 'action',
              label:"Hành động"
            },
          ],
          infoModal: {
            id: 'add-modal',
            title: 'Thêm mới',
            content: 'abc '
          },
          resetInfoModal() {
            
          },
        };
    },
    methods: {
          onSubmit: (data) => {
            console.log(data);
          },
          
        },
  }
</script>

<style  scoped>
  #image{
    position: absolute;
    z-index: 1;
  }
</style>