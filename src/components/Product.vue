<template>
  <div class="col-md-3 col-6 mt-4">
    <div class="product-grid">
      <div class="product-image">
        <router-link
          :to="{ name: 'ProductDetail', params: { url: product.url } }"
          v-for="(itemColor, indexColor) in product.color"
          :key="indexColor"
        >
          <div v-if="indexColor == 0">
            <img
              class="pic-1"
              :src="
                product.color[indexColor].image[0].fileDownloadUri !=
                'undefined'
                  ? product.color[indexColor].image[0].fileDownloadUri
                  : ''
              "
            />
          </div>
        </router-link>
        <ul class="social">
          <li>
            <router-link
              :to="{ name: 'ProductDetail', params: { url: product.url } }"
              data-tip="Xem chi tiết"
              ><i class="fa fa-search"></i
            ></router-link>
          </li>
          <li>
            <router-link to="#" data-tip="Yêu thích"
              ><i class="fas fa-heart"></i
            ></router-link>
          </li>
          <li>
            <button
              v-on:click="alertDisplay"
              @click="add(product)"
              data-tip="Thêm vào giỏ"
            >
              <i class="fa fa-shopping-cart"></i>
            </button>
          </li>
        </ul>
        <!-- <span class="product-new-label">Sale</span> -->
        <span class="product-discount-label"></span>
      </div>
      <ul class="rating">
        <li class="fa fa-star"></li>
        <li class="fa fa-star"></li>
        <li class="fa fa-star"></li>
        <li class="fa fa-star"></li>
        <li class="fa fa-star disable"></li>
      </ul>
      <div class="product-content">
        <h3 class="title">
          <a href="#">{{ product.name }}</a>
        </h3>
        <div class="price">
          {{ product.discount.toLocaleString() }} đ
          <span> {{ product.price.toLocaleString() }} đ</span>
        </div>
        <a v-on:click="alertDisplay" class="add-to-cart" @click="add(product)"
          >+ Thêm vào giỏ</a
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "product",
  props: ["product"],
  methods: {
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
    add(product) {
      const cartItem = {
        product: product,
        amount: 1,
        price: product.price,
      };
      this.$store.commit("addToCart", cartItem);
    },
  },
};
</script>
<style>
.product-grid {
  text-align: center;
  padding: 0 0 72px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  overflow: hidden;
  position: relative;
  z-index: 1;
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.08);
}

.product-grid .product-image {
  position: relative;
  transition: all 0.3s ease 0s;
}
.product-grid .product-image a {
  display: block;
}
.product-grid .product-image img {
  width: 100%;
  height: auto;
}
.product-image:hover img {
  width:130%;
  height:auto;
  margin:-30% 0 -15% -15%;

}
.product-grid .pic-1 {
  opacity: 1;
  transition: all 0.3s ease-out 0s;
}
.product-grid:hover .pic-1 {
  opacity: 1;
}
.product-grid .pic-2 {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.3s ease-out 0s;
}
.product-grid:hover .pic-2 {
  opacity: 1;
}
.product-grid .social {
  width: 150px;
  padding: 0;
  margin: 0;
  list-style: none;
  opacity: 0;
  transform: translateY(-50%) translateX(-50%);
  position: absolute;
  top: 60%;
  left: 50%;
  z-index: 1;
  transition: all 0.3s ease 0s;
}
.product-grid:hover .social {
  opacity: 1;
  top: 50%;
}
.product-grid .social li {
  display: inline-block;
}
.product-grid .social li a {
  color: #fff;
  background-color: #333;
  font-size: 16px;
  line-height: 40px;
  text-align: center;
  height: 40px;
  width: 40px;
  margin: 0 2px;
  display: block;
  position: relative;
  transition: all 0.3s ease-in-out;
}
.product-grid .social li a:hover {
  color: #fff;
  background-color: #f10c0c;
}
.product-grid .social li a:after,
.product-grid .social li a:before {
  content: attr(data-tip);
  color: #fff;
  background-color: #000;
  font-size: 12px;
  letter-spacing: 1px;
  line-height: 20px;
  padding: 1px 5px;
  white-space: nowrap;
  opacity: 0;
  transform: translateX(-50%);
  position: absolute;
  left: 50%;
  top: -30px;
}
.product-grid .social li a:after {
  content: "";
  height: 15px;
  width: 15px;
  border-radius: 0;
  transform: translateX(-50%) rotate(45deg);
  top: -20px;
  z-index: -1;
}
.product-grid .social li a:hover:after,
.product-grid .social li a:hover:before {
  opacity: 1;
}
.product-grid .product-discount-label,
.product-grid .product-new-label {
  color: #fff;
  background-color: #f10c0c;
  font-size: 12px;
  text-transform: uppercase;
  padding: 2px 7px;
  display: block;
  position: absolute;
  top: 10px;
  left: 0;
}
.product-grid .product-discount-label {
  background-color: #333;
  left: auto;
  right: 0;
}
.product-grid .rating {
  color: #ffd200;
  font-size: 12px;
  padding: 12px 0 0;
  margin: 0;
  list-style: none;
  position: relative;
  z-index: -1;
}
.product-grid .rating li.disable {
  color: rgba(0, 0, 0, 0.2);
}
.product-grid .product-content {
  background-color: #fff;
  text-align: center;
  padding: 12px 0;
  margin: 0 auto;
  position: absolute;
  left: 0;
  right: 0;
  bottom: -30px;
  z-index: 1;
  transition: all 0.3s;
}
.product-grid:hover .product-content {
  bottom: 0;
}
.product-grid .title {
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 0.5px;
  text-transform: capitalize;
  margin: 0 0 10px;
  transition: all 0.3s ease 0s;
}
.product-grid .title a {
  color: #828282;
}
.product-grid .title a:hover,
.product-grid:hover .title a {
  color: #f10c0c;
}
.product-grid .price {
  color: #333;
  font-size: 17px;
  font-weight: 700;
  letter-spacing: 0.6px;
  margin-bottom: 8px;
  text-align: center;
  transition: all 0.3s;
}
.product-grid .price span {
  color: #999;
  font-size: 13px;
  font-weight: 400;
  text-decoration: line-through;
  margin-left: 3px;
  display: inline-block;
}
.product-grid .add-to-cart {
  color: #000;
  font-size: 13px;
  font-weight: 600;
}
@media only screen and (max-width: 990px) {
  .product-grid {
    margin-bottom: 30px;
  }
}
</style>