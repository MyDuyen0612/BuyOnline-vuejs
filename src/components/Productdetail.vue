<template>
  <b-container fluid>
    <b-row>
      <div class="col-lg-6 col-md-12 col-sm-12">
        <img  :src="product.color[0].image[0].fileDownloadUri"/>
      </div>
      <div class="col-lg-6 col-md-12 col-sm-12">
        <div class="wrapper">
          <div class="outer">
            <div class="content">
              <span class="bg">Khuyến mãi</span><br>
              <span class="product__content">{{product.name}}</span>
              <p>
                {{product.introduce}}
              </p>
              <h6>Color:</h6>
              <div class="colors-wrap">
                <span class="colors" style="background:#f43542"></span>
                <span class="colors"  v-for="(colorItem, colorIndex) in colors" :key="colorIndex">{{colorItem.name}}</span>
              </div>
              <h6>Size:</h6>
              <div class="size-wrap">
                <span class="size" v-for="(itemSize,itemIndex) in sizes" 
                :key="itemIndex" 
                :value="itemSize" @click="SizeActive(itemSize)"
                :class="sizeAcive.id==itemSize.id ? 'selected' : ''">{{itemSize.name}}</span>
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
          </div>
        </div>
      </div>
      
    </b-row>
  </b-container>
</template>

<script>
import productAPI from'../api/productAPI'
export default {
  name: "Productdetail",
  data(){
    return {
      colors:[],
      sizes:[],
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
            code: '',
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
  methods: {
    SizeActive: function (itemSize) {
      // console.log(itemSize);
      this.sizeAcive = itemSize;
    },
  },
  mounted(){
    productAPI.find(
    this.$route.params.url).then((response)=>{
    // console.log(response);
    this.product = response;
    this.colors = this.product.color;
    this.sizes = this.product.color[0].size
    // console.log(this.colors);
    }).catch(()=>{
    })
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
.product__content{
  font-size:2.5em
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
  .product__content{
  font-size: 1.0em
  }
}
.colors{
    width:20px;
    height:20px;
    display:inline-block;
    transition:0.3s all;
    border-radius:50%;
    /* background:#f43542;  */
    margin: 0 15px;
}
.colors:hover, .size:hover{
    transform: scale(1.2);
    box-shadow: 0 0 0 8px rgba(173, 173, 170, .3);
    cursor: pointer;
}
.colors:active, .size:active{
    transform: scale(.8);
}
.selected{
    box-shadow: 0 0 0 4px #fff, 0 0 0 8px rgba(173, 173, 170, .3);
}
.colors-wrap, .size-wrap{
    width: 100%;
    margin: 5px auto;
    padding: 10px;
    border-radius: 70px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.size{
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 15px;
    cursor: pointer;
    transition: all .3s;
}


</style>
