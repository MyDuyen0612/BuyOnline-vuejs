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
              <h5>Color:</h5>
              <div class="colors-wrap">
                <span class="colors"></span>
                <span class="color"  v-for="(colorItem, colorIndex) in colors" :key="colorIndex">{{colorItem.name}}</span>
              </div>
              <h5>Size:</h5>
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
            <img  :src="product.color[0].image[0].fileDownloadUri"/>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import productAPI from'../api/productAPI';
export default
{
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
.colors{
    width:20px;
    height:20px;
    display:inline-block;
    transition:0.3s all;
    border-radius:50%;
    background:#f43542; 
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
