<template>
    <div class="addproduct">
      <b-form @submit="checkForm">
        <p v-if="errors.length">
          <b>Please correct the following error(s):</b>
          <ul>
            <li v-for="error in errors" :key="error">{{ error }}</li>
          </ul>
        </p>

        <b-form-group
          id="name"
          label="Tên sản phẩm:"
          label-for="name"
        >
          <b-form-input
            id="name"
            v-model="product.name"
            name="name"
            type="text"
            placeholder="Nhập tên sản phẩm"
            trim
          ></b-form-input>
        </b-form-group>

        <b-row>
          <b-col>
            <b-form-group id="price" label="Đơn giá:" label-for="price">
              <b-form-input
              id="price"
              v-model="product.price"
              type="number"
              name="price"
              placeholder="Nhập giá sản phẩm"
              min="100000"
            ></b-form-input>
          </b-form-group>
          </b-col>

          <b-col>
            <b-form-group id="price" label="Giá khuyến mãi:" label-for="price">
              <b-form-input
              id="price"
              v-model="product.discount"
              type="number"
              name="price"
              placeholder="Nhập giá sản phẩm"
              min="100000"
            ></b-form-input>
          </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          
        </b-row>

        <b-row>
          <b-col>
              <b-form-textarea
                  id="mota"
                  v-model="product.shortIntroduction"
                  placeholder="Mô tả ngắn"
                  rows="3"
                  max-rows="6"
                ></b-form-textarea>
          </b-col>
        </b-row>  
        <b-row>
          <b-col>
              <b-form-textarea
                  id="mota"
                  v-model="product.introduce"
                  placeholder="Mô tả"
                  rows="3"
                  max-rows="6"
                ></b-form-textarea>
          </b-col>
        </b-row>  
        <!-- <b-button class="mt-3" variant="warning" block >Thêm sản phẩm</b-button> -->
        <b-button type="submit" variant="primary">Submit</b-button>  
      </b-form>
    </div>
</template>

<script>
export default {
  name: "Ađproduct",
  data() {
    return {
      errors: [],
      
      product:{
        name: '',
        price: 0,
        discount:0,
        shortIntroduction:'',
        introduce:'',
        category:[{

        }],
        color: [{
          name:'',
          size: [{
            name:'',
            amount:0
          }],
        }],
        info: '',
        file: [],
      },
    };
  },
   computed: {
      state() {
        return Boolean(this.size)
      }
  },
  methods: {
    checkForm: function (e) {
      if (this.name && this.soluong 
      && this.price && this.color
      && this.file) {
        return true;
      }

      this.errors = [];

      if (!this.name) {
        this.errors.push("Nhập tên sản phẩm");
      }
      if (!this.soluong) {
        this.errors.push("Nhập số lượng");
      }
      if (!this.price) {
        this.errors.push("Nhập giá");
      }
      if (!this.color) {
        this.errors.push("Nhập màu sản phẩm");
      }
      if (!this.file) {
        this.errors.push("Chọn hình sản phẩm");
      }
      e.preventDefault();
    },
  },
};
</script>

<style lang="scss" scoped>
.btn-addsp {
  display: block;
  background-color: rgb(9, 158, 9);
  border: 1px solid white;
  border-radius: 0.2rem;
  height: 35px;
  color: white;
  margin-top: 2%;
}
#mota{
  margin-top: 2%;
}
</style>