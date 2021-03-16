<template>
  <b-container fluid>
    <b-row>
      <Carousel />
    </b-row>

    <b-row>
      <Product
        v-for="product in products"
        :key="product.color"
        :product="product"
      />
    </b-row>
  </b-container>
</template>

<script>
import Carousel from "../components/Carousel.vue";
import Product from "../components/Product.vue";
export default {
  components: { Carousel, Product },
  data() {
    return {
      isActive: true,
      products: [
        {
          title: "Ao dep",
          color: "green",
          price: 2500000,
          src: require("../assets/img/1.jpg"),
        },
        {
          title: "ap dep",
          color: "blue",
          price: 300000,
          src: require("../assets/img/1.jpg"),
        },
        {
          title: "Áo Thun",
          color: "pink1",
          price: 500000,
          src: require("../assets/img/1.jpg"),
        },
        {
          title: "Áo Thun",
          color: "pink2",
          price: 500000,
          src: require("../assets/img/1.jpg"),
        },
        {
          title: "Áo Thun",
          color: "pink3",
          price: 500000,
          src: require("../assets/img/1.jpg"),
        },
        {
          title: "Áo Thun",
          color: "pink4",
          price: 500000,
          src: require("../assets/img/1.jpg"),
        },
        {
          title: "Áo Thun",
          color: "pink5",
          price: 500000,
          src: require("../assets/img/1.jpg"),
        },
      ],
    };
  },
  methods: {
    activeMenu: function () {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style  scoped>
.vertical-nav {
  min-width: 17rem;
  width: 17rem;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.4s;
}

.page-content {
  width: calc(100% - 17rem);
  margin-left: 17rem;
  transition: all 0.4s;
}

/* for toggle behavior */

#sidebar.active {
  margin-left: -17rem;
}

#content.active {
  width: 100%;
  margin: 0;
}

@media (max-width: 768px) {
  #sidebar {
    margin-left: -17rem;
  }
  #sidebar.active {
    margin-left: 0;
  }
  #content {
    width: 100%;
    margin: 0;
  }
  #content.active {
    margin-left: 17rem;
    width: calc(100% - 17rem);
  }
}

body {
  background: #599fd9;
  background: -webkit-linear-gradient(to right, #599fd9, #c2e59c);
  background: linear-gradient(to right, #599fd9, #c2e59c);
  min-height: 100vh;
  overflow-x: hidden;
}
.products {
  display: flex;
  max-width: 1280px;
  padding: 25px;
  margin: 0 auto;
}
</style>