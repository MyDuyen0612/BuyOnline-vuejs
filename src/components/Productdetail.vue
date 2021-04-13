<template >
  <b-container fluid >
    <b-row >
      <div class="col-lg-6 col-md-12 col-sm-12" >
        <image-magnifier
          :src="product.color[0].image[0].fileDownloadUri"
          :zoom-src="product.color[0].image[0].fileDownloadUri"
          width="100%"
          height="100%"
          zoom-width="450"
          zoom-height="350"
        /> 
      </div>
      <div class="col-lg-6 col-md-12 col-sm-12" >
        <div class="wrapper" >
          <div class="outer" >
            <div class="content" >
              <span class="bg" >Khuyến mãi</span><br />

              <span class="product__content"> {{ product.name }}</span>


              <h6>Color: </h6>
              <div class="colors-wrap" >
                <span
                  class="colors"
                  v-for="(colorItem, colorIndex) in colors"
                  :key="colorIndex"
                  :style="{ background: colorItem.code }"
                  @click="ColorActive(colorItem)"
                  :class="colorActive.code == colorItem.code ? 'selected' : ''"
                ></span>
              </div >
              <h6>Size: </h6>
              <div class="size-wrap" >
                <span
                  class="size"
                  v-for="(itemSize, itemIndex) in sizes"
                  :key="itemIndex"
                  :value="itemSize"
                  @click="SizeActive(itemSize)"
                  :class="sizeAcive.id == itemSize.id ? 'selected' : ''"

                  >{{ itemSize.name }}</span
                >
              </div>
              <div class="button" >
                <a href="#" > {{ product.discount.toLocaleString() }} đ  </a
                ><a @click="add(product)" class="cart-btn" v-on:click="alertDisplay"
                  ><i class="fa fa-plus cart-icon" ></i>Thêm vào giỏ</a
                >

              </div >
            </div >
          </div >
        </div >
        
      </div >
      
    </b-row >
    <!-- <div>
      <b-card no-body>
        <b-tabs pills card>
          <b-tab title="Tab 1" active
            ><b-card-text></b-card-text></b-tab
          >
          <b-tab title="Tab 2"><b-card-text>Tab contents 2</b-card-text></b-tab>
        </b-tabs>
      </b-card>
    </div>
    <div>
      <b-tabs content-class="mt-3">
        <b-tab title="First" active><p>I'm the first tab</p></b-tab>
        <b-tab title="Second"><p>I'm the second tab</p></b-tab>
        <b-tab title="Disabled"><p>I'm a disabled tab!</p></b-tab>
      </b-tabs>
    </div> -->
    <div >
      <b-tabs
        active-nav-item-class="font-weight-bold text-uppercase text-danger"
        active-tab-class="font-weight-bold text-success"
        content-class="mt-3">
        <b-tab title="Mô tả" active><p>{{product.introduce}}</p></b-tab>
        <b-tab title="Đánh giá"><p>0 ĐÁNH GIÁ CHO {{product.name}}</p></b-tab>
        <b-tab title="Bình luận" ><p>0 BÌNH LUẬN CHO {{product.name}}</p></b-tab>
      </b-tabs>
    </div >
  </b-container >
</template>

<script>

import productAPI from '../api/productAPI';
export default {
  name: "Productdetail" ,
  data() {
    return {
      colors: [],
      sizes: [],
      colorActive: {},
      sizeAcive: {},
      product: {
        name: '',
        price: 0,
        discount:0,
        introduce: "",
        color: [
          {
            name: '',
            code: '',
            size: [
              {
                name: '',

                amount: 0,
              },
            ],
            image: [
              {

                fileDownloadUri: '',

              },
            ],
          },
        ],
      },
    };
  },
  methods:{
    alertDisplay() {
     // Hàm $swal gọi SweetAlert vào ứng dụng với cấu hình được chỉ định
      this.$swal({
        title: "Thành công!",
        text: "Sản phẩm đã được thêm vào giỏ hàng!",
        icon: "success",
        button: "OK",
      });
      //this.$swal('Thành công!', 'Mã giảm của bạn đang được áp dụng. </br>Hãy mua sắm thật nhiều để nhận được nhiều sự ưu đãi hơn nhé!', 'OK');
    },
    ColorActive: function(colorItem){
      this.ColorActive = colorItem;
    },
    SizeActive: function(itemSize){
      this.SizeActive = itemSize;
    },

   
    
    add(product) {
      const cartItem = {
        product: product,
        amount: 1,
        price: product.price,
      };
      this.$store.commit("addToCart", cartItem);
    },
  },

  mounted() {
    productAPI
      .find(this.$route.params.url)
      .then((response) => {

       
        this.product = response;
        this.colors = this.product.color;
        this.sizes = this.product.color[0].size;
  
      })

      .catch(() => {})

  },

};
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100vh;
}
.outer {
  position: relative;
  background-color: #fff;
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  border-radius: 10px;
  margin-top: -40px;
}
p {
  width: 280px;
  font-size: 13px;
  line-height: 1.4;
  color: #aaa;
  margin: 20px 0;
}
img {
  /* position: absolute; */
  top: 0px;
  right: -30px;
  z-index: 0;
  width: 100%;
  margin-top: -15px;
  height: 85%;
}
.content {
  position: relative;
  left: 20px;
  z-index: 3;
  margin-top: -20%;
}
.bg {
  display: inline-block;
  color: #fff;
  background-color: red;
  padding: 5px 10px;
  border-radius: 50px;
  font-size: 1em;
  margin-bottom: 20px;
}
.button {
  width: fit-content;
  height: fit-content;
  margin-top: 10px;
}
.button a {
  display: inline-block;
  overflow: hidden;
  position: relative;
  font-size: 15px;
  color: #111;
  text-decoration: none;
  padding: 10px 10px;
  border: 1px solid #aaa;
  font-weight: bold;
}
.button a:after {
  content: "";
  position: absolute;
  top: 0;
  right: -10px;
  width: 0%;
  background-color: #111;
  height: 100%;
  z-index: -1;
  transition: width 0.3s ease-in-out;
  transform: skew(-25deg);
  transform-origin: right;
}
.product__content {
  font-size: 2.5em;
}
.button a:hover:after {
  width: 150%;
  left: -10px;
  transform-origin: left;
}
.button a:hover {
  color: #fff;
  transition: all 0.5s ease;
}
.button a:nth-of-type(1) {
  border-radius: 50px 0 0 50px;
  border-right: none;
}
.button a:nth-of-type(2) {
  border-radius: 0px 50px 50px 0;
}
.cart-icon {
  padding-right: 8px;
}
@media (max-width: 768px) {
  .outer {
    width: 95%;
    margin-top: 0;
  }
  .content {
    left: 50%;
    transform: translateX(-40%);
  }
  img {
    /* display: none; */
    width: 100%;
    margin-top: 0px !important;
  }
  .product__content {

    font-size: 1.0em;
}
}
.colors
{
  width: 20px;
  height: 20px;
  display: inline-block;
  transition: 0.3s all;
  border-radius: 50%;
  border: 1px solid black;
  margin: 0 15px;
}
.colors:hover,
.size:hover {
  transform: scale(1.2);
  box-shadow: 0 0 0 8px rgba(173, 173, 170, 0.3);
  cursor: pointer;
}
.colors:active,
.size:active {

  transform: scale(.8);

}
.selected {
  box-shadow: 0 0 0 4px #fff, 0 0 0 8px rgba(173, 173, 170, 0.3);
}
.colors-wrap,
.size-wrap {
  width: 100%;
  margin: 5px auto;
  padding: 10px;
  border-radius: 70px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.size {
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 15px;
  cursor: pointer;
  transition: all 0.3s;
}
</style>