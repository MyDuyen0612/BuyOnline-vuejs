<template>
  <b-container fluid="md">
    <b-row>
      <b-col>
        <div class="wrapper">
          <div class="outer">
            <div class="content">
              <span class="bg">Khuyến mãi</span>
              <h1>{{product.name}}</h1>
              <p>
                {{product.introduce}}
              </p>
              <h4>Color:</h4>
              <div class="colors-wrap">
                <span class="colors"></span>
                <span class="colors selected"></span>
                <span class="colors"></span>
                <span class="colors"></span>
              </div>
              <h4>Size:</h4>
              <div class="size-wrap">
                <span class="size">S</span>
                <span class="size">M</span>
                <span class="size selected">L</span>
                <span class="size">XL</span>
              </div>
              <div class="button">
                <a href="#">
                  {{product.price.toLocaleString()}}
                  </a
                ><a href="#" class="cart-btn"
                  ><i class="fa fa-plus cart-icon"></i> Thêm vào giỏ</a
                >
              </div>
            </div>
            <img  :src="product.color[0].image[0].fileDownloadUri"/>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import productAPI from'../api/productAPI';
export default {
  name: "Productdetail",
  data(){
    return {
      colorActive:{

      },
      sizeAcive:{

      },
      product:{
        name:'',
        price:0,
        introduce:'',
        color:[
          {
            name:'',
            size:[
            {
              name:'',
              amount:0
            }
            ],
          image:[
            {
              fileDownloadUri:''
            }
          ]
          
          }
        ],
        
      }
    }
  },
  mounted(){
    productAPI.find(
  this.$route.params.url).then((response)=>{
    console.log(response);
    this.product = response;
    
  }).catch(()=>{
    this.$route.push('404')
  })
  }
};
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
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
}
p {
  width: 280px;
  font-size: 13px;
  line-height: 1.4;
  color: #aaa;
  margin: 20px 0;
}
img {
  position: absolute;
  top: 0px;
  right: -30px;
  z-index: 0;
  width: 50%;
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
  background-color: cornflowerblue;
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
  padding: 10px 15px;
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
@media (max-width: 767px) {
  .outer {
    width: 95%;
  }
  .content {
    left: 50%;
    transform: translateX(-50%);
  }
  img {
    display: none;
  }
}
.colors {
  width: 15px;
  height: 15px;
  display: inline-block;
  transition: 0.3s all;
  border-radius: 50%;
  background: #8b8def;
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
  transform: scale(0.8);
}
.colors:nth-child(2) {
  background: #a1050f;
}
.colors:nth-child(3) {
  background: #5e4f03;
}
.colors:nth-child(4) {
  background: #011401;
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
  justify-content: center;
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
