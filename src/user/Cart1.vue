<template>
  <b-container class="cart" id="modal-2">
      <h1>Cart</h1>
     <div class="col-sm-12 col-md-10 col-md-offset-1">
        <table class="table table-hover">
          <thead>
            <tr>
              <th></th>
              <th class="text-center1">Product</th>
              <th class="text-center1">Quantity</th>
              <th class="text-center1">Price</th>
              <th class="text-center1">Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody >
            <tr v-for="(itemProduct,indexProduct) in cartItems" :key="indexProduct">
              <td> </td>
              <td class="col-sm-8 col-md-6">
                <div class="media">
                  <a class="thumbnail pull-left" href="#">
                    <img
                      class="media-object"
                      src=""
                      style="width: 72px; height: 72px"
                    />
                    
                  </a>
                  
                  <div class="media-body">
                    <router-link
              :to="{ name: 'ProductDetail', params: { url: itemProduct.product.url } }"
              
            ><h5 class="media-heading">{{itemProduct.product.name}}</h5></router-link>
                    
                    <span>Status: </span
                    ><span class="text-warning"><strong>In Stocks</strong></span>
                  </div>
                </div>
              </td>
              
              <td class="col-sm-1 col-md-1" style="text-align: center">
           <div class="d-flex mt-10" id="example-1">
           
                    <button v-on:click="itemProduct.amount--" class="add" type="button">-</button>
                    <div class="cart-quanlity">{{itemProduct.amount}}</div>
                    <button v-on:click="itemProduct.amount++" class="remove" type="button">+</button>
                   
                  </div>
              </td>
              <td class="col-sm-1 col-md-1 text-center" >
                <strong >{{itemProduct.price}}</strong>
              </td>
              <td class="col-sm-1 col-md-1 text-center">
                <strong >Tổng tiền nằm đây nè</strong>
              </td>
              <td class="col-sm-1 col-md-1">
                <b-button id="del" pill variant="outline-danger" @click="clean">
                  <b-icon-trash></b-icon-trash>
                </b-button>
                <b-tooltip target="del" placement="center" variant="danger">
                Delete
                </b-tooltip>
              </td>
            </tr>
            
            <tr>
              <td></td>
              <td></td>
              <td></td>
              
              <td><h6>Subtotal</h6></td>
              <td class="text-right">
                <h6><strong>$26.11</strong></h6>
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td><h6>Transport Fee</h6></td>
              <td class="text-right">
                <h6><strong>$26.11</strong></h6>
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td><b-button pill variant="outline-info">Apply</b-button></td>
              <td class="text-right">
                <b-form-input id="input" v-model="text" placeholder="Discount Code"></b-form-input>
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td><h6>Total</h6></td>
              <td class="text-right">
                <h3><strong>$26.11</strong></h3>
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <b-button id="add" pill variant="outline-primary" to="/">
                  <b-icon-cart-plus></b-icon-cart-plus>
                </b-button>
                <b-tooltip target="add" placement="center" variant="primary" >
                Continue to shop
                </b-tooltip>
              </td>
              <td>
                <b-button id="checkout" pill variant="outline-success" to="/checkout">
                  <b-icon-cash></b-icon-cash>
                </b-button></td>
                <td>
                <b-tooltip target="checkout" placement="center" variant="success">
                Checkout
                </b-tooltip>
              </td>
            </tr>
            
          </tbody>
        </table>
        
      </div>
      <EmptyCart/>
    </b-container>
</template>

<script>
export default {
  name:"Cart1",
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
}

</script>

<style  scoped>
h1 {
  text-shadow: 2px 3px 3px red;
}
.text-center1{
  text-align: center;
  text-shadow: 1px 1px 1px  blue;
}
.text-right{
  text-shadow: 1px 1px 1px  blue;
}
.add,
.remove {
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
#input{
  width: 150px;
  height: 35px;
  border-radius: 5px;
}
</style>