<template>
  <div class="d-flex cart-outer-div">
    <div class="cart-body">
      <div  class="container mb-5">
        <h4 class="my-4 my-cart">My Cart</h4>
        <div class="d-flex my-3" style="justify-content: space-between;" >
          <h4 class="fw-600">Summary</h4>
          <h4 class="fw-600" style="margin-right: 49%;">Cart</h4>
        </div>
        <div class="d-flex">
     <Summary v-bind:totalPrice="totalPrice" />
      
        <div class="row" style="width=50%" >
          <div style="max-width: 70%" class="col-md-12">
            <ul style="padding:0">
              <li v-for="(itemProduct,indexProduct) in cartItems" :key="indexProduct" style="list-style: none;">
                <div class="cart-items">
                  <img width="50px" height="50px" style="border-radius:50%"/>
                  <h6 class="mt-15">{{itemProduct.product.name}}</h6>
                  <div class="d-flex mt-10" id="example-1">
                    <button v-on:click="itemProduct.amount++" class="add" type="button">+</button>
                    <span class="cart-quanlity">{{itemProduct.amount}}</span>
                    <button v-on:click="itemProduct.amount--" class="remove" type="button">-</button>
                  </div>
                  <h6 class="mt-15">{{itemProduct.price}}</h6>
                  <h6 class="mt-15">{{totalPrice}}</h6>
                </div>
                <div class="line"></div>
              </li>
            </ul>
          </div>
        </div>
        </div>
        <div class="d-flex justify-content-end" style="width: 80%; margin-top:2%">
            <button  class="btn btn-primary" type="button">Checkout</button>
        </div>
      </div>
        <!-- <EmptyCart v-else/>  -->
    </div>
     
   
  </div>
</template>

<script>
// import EmptyCart from "../user/EmptyCart";
import Summary from "../user/Summary";
// import swal from "sweetalert";
export default {
  name: "Cart",
  components:{
    // EmptyCart,
    Summary,
  },
  

 
  data(){
    return {
      cartItems:[],
      lengthCart:0,
      priceCart:0,
      
    }
    
  },
  
  methods:{
    
    addItems(items){
      this.$store.dispatch("addToCart",items)

    },
   
    removeItem(items){
      this.$store.dispatch("removeItem",items)
    },
    
   
    

  },
  
  mounted(){
    
     this.cartItems= this.$store.state.cartItems;
   
    
     this.lengthCart =this.$store.state.lengthCart;
   
     this.priceCart =  this.$store.state.priceCart;
      
  },
};
</script>

<style scoped>
.cart-out-div{
  flex-direction: column;
  height: 100vh;
}
.cart-body{
  background: darkgrey;
  flex: 1;
  overflow: auto;
}
.cart-quanlity{
  display: inline-block;
  padding: 3px 6px;
  width: 46px;
  height: 28px;
  border-radius: 2px;
  background-color: #fff;
  margin: 0 5px;
  text-align: center;
}
.cart-items{
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background: while;
}
.my-cart{
  color: orange;
  font-weight: 600;
}
input[type="text"] {
  border: none;
  width: 100%;
  font-size: 14px;
  font-weight: 500;
  vertical-align: middle;
  text-align: center;
  outline: none;
}
.fw-600{
  font-weight: 600;
}
.line{
  height: 1px;
  border-bottom: 1px solid black;
}
.w-120{
  width:  120%;
}
.w-60{
  width: 60%;
}
.add,
.remove{
  width: 28px;
  height: 28px;
  background: linear-gradient(#fff,#f9f9f9);
  border: 1px solid #c2c2c2;
  cursor: pointer;
  font-size: 16px;
  border-radius: 7px;
  padding-top: 1px;
  outline: none;
}
.mt-10{
  margin-top: 10px;
}
.mt-15{
  margin-top: 15px;
}
.orange-red{
  color: orangered;
}
.darkblue{
  color: darkblue;
}



</style>

