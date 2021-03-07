<template>
  <div class="product">
    <div :class="'product-inner ' + product.color">
      <div class="product-image-wrap">
        <img :src="product.src" class="image" />
      </div>
      <div class="product-detail">
        <h2>{{ product.title }}</h2>
        <div class="d-flex justify-content-between">
          <p>Price: <strong>{{product.price}}</strong></p>
          <b-button href="#" variant="light"><b-icon icon="cart"></b-icon></b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'product',
  props: ['product']
}
</script>

<style>
  .product {
    flex: 1 1 33.333%;
    width: 100%;
    padding: 25px;
  }
  .product-inner {
    position: relative;
    padding: 25px;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
    perspective: 1000px;
  }
  .product-inner.green {
    background-image: linear-gradient(to bottom right, #24D484, #116432);
  }
  .product-inner.blue {
    background-image: linear-gradient(to bottom left, #24D484, #2474C4 70%);
  }
  .product-inner.pink {
    background-image: linear-gradient(to bottom right, #F444A4, #1168D4);
  }

  .product-image-wrap {
    position: relative;
    z-index: 1;
    transform-origin: center;
  }
  .product-image-wrap .image {
    width: 100%;
    filter: drop-shadow(0px 0px 12px rgba(0, 0, 0, 0.25));
  }
  .product-detail {
    background-color: #FFF;
    padding: 25px;
    margin: 0px -25px -25px;
  }
  .product-detail h2 {
    font-size: 20px;
    font-weight: 500;
    color: #676767;
    margin-bottom: 15px;
  }
  .product-detail p {
    font-size: 14px;
    line-height: 1.5;
    font-weight: 300;
    color: #676767;
  }
</style>