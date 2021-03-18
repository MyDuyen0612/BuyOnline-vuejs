<template>
    <div class="addproduct">
      <h3 class="text-center text-primary">Thêm sản phẩm</h3>
      <b-form @submit="checkForm">
        <p v-if="errors.length">
          <b>Please correct the following error(s):</b>
          <ul>
            <li v-for="error in errors" :key="error">{{ error }}</li>
          </ul>
        </p>
        <b-row>
          <b-col sm="12">
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
          </b-col>
        </b-row>

        <b-row>
          <b-col sm="6">
            <b-form-group id="price" label="Đơn giá:" label-for="price">
              <b-form-input
              id="price"
              v-model="product.price"
              type="number"
              name="price"
              placeholder="Nhập giá sản phẩm"
              min="50000"
            ></b-form-input>
          </b-form-group>
          </b-col>

          <b-col sm="6">
            <b-form-group id="discount" label="Giá khuyến mãi:" label-for="discount">
              <b-form-input
              id="discount"
              v-model="product.discount"
              type="number"
              name="discount"
              placeholder="Nhập giá khuyến mãi"
              min="5000"
            ></b-form-input>
          </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <b-input-group>
              <b-row>
                <b-col sm="4">
                  <b-form-input
                    id="color"
                    v-model="product.color[0].name"
                    name="color"
                    type="text"
                    placeholder="Nhập màu sản phẩm"
                    trim
                  ></b-form-input>
                </b-col>

                <b-col sm="8">
                    <b-form-file accept=".jpg, .png, .gif" v-model=" product.color[0].image" multiple
                      placeholder="Chọn hình cho sản phẩm"
                    ></b-form-file>
                </b-col>

                <b-col sm="4">
                  <b-form-group label="Chọn size" v-slot="{ ariaDescribedby }">
                    <b-form-radio v-model="product.color[0].size[0].name" :aria-describedby="ariaDescribedby"
                      name="some-radios" value="S">S</b-form-radio>
                    <b-form-radio v-model="product.color[0].size[0].name" :aria-describedby="ariaDescribedby"
                      name="some-radios" value="M">M</b-form-radio>
                    <b-form-radio v-model="product.color[0].size[0].name" :aria-describedby="ariaDescribedby"
                      name="some-radios" value="L">L</b-form-radio>
                  </b-form-group>
                  <div class="mt-3">Size: <strong>{{product.color[0].size[0].name}}</strong></div>
                </b-col>

                <b-col sm="4">
                  <b-form-group
                    id="amount"
                    label="Số lượng sản phẩm của màu:"
                    label-for="amount"
                  >
                    <b-form-input type="number"
                      v-model="product.color[0].size[0].amount"
                      name="amount"
                      placeholder="Nhập số lượng sản phẩm"
                      min="1">
                    </b-form-input>
                  </b-form-group>
                  </b-col>
              </b-row>
            </b-input-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
              <b-form-textarea
                  id="shortIntroduction"
                  v-model="product.shortIntroduction"
                  type="text"
                  placeholder="Mô tả ngắn"
                  rows="3"
                  max-rows="6"
                ></b-form-textarea>
          </b-col>
        </b-row>  
        <b-row>
          <b-col>
              <b-form-textarea
                  id="introduce"
                  v-model="product.introduce"
                  type="text"
                  placeholder="Mô tả"
                  rows="3"
                  max-rows="6"
                ></b-form-textarea>
          </b-col>
        </b-row>  
        <!-- <b-button class="mt-3" variant="warning" block >Thêm sản phẩm</b-button> -->
        <b-button id="btnThem" type="submit" variant="primary">Submit</b-button>  
      </b-form>
    </div>
</template>

<script>

export default {
  name: "Addproduct",
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

        color: [
          {
          name:'',
          size: [{
            name:'',
            amount: 1,
          }],
          image: [],
        }
        ],
      },
    };
  },
  methods: {
    checkForm: function (e) {
      e.preventDefault();
    
      if (this.product.name && this.product.price  && this.product.discount
      && this.product.shortIntroduction && this.product.introduce && this.product.color[0].name 
      && this.product.color[0].size[0].name && this.product.color[0].size[0].amount
      && this.product.color[0].image)
      {
        return true;
      }
      this.errors = [];

      if (!this.product.name) {
        this.errors.push("Nhập tên sản phẩm");
      }
      if (!this.product.price) {
        this.errors.push("Nhập giá");
      }
      if (!this.product.discount) {
        this.errors.push("Nhập mã giảm giá");
      }
      if (!this.product.color[0].name) {
        this.errors.push("Nhập màu sản phẩm");
      }
      if (!this.product.color[0].size[0].name ) {
        this.errors.push("Nhập size sản phẩm");
      }
      if (!this.product.color[0].size[0].amount) {
        this.errors.push("Nhập số lượng của size");
      }
      if (!this.product.shortIntroduction) {
        this.errors.push("Nhập mô tả ngắn");
      }
      if (!this.product.introduce) {
        this.errors.push("Nhập mô tả");
      }
      if (this.product.color[0].image) {
        this.errors.push("Chọn hình cho màu sản phẩm");
      }
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
#introduce{
  margin-top: 2%;
}
#btnThem{
  margin-top: 2%;
}
</style>