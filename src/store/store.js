
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        user: {
            name: '',
            auth: []
        },
       
        cartItems: [
            
            
        ],
        
        priceCart: 0,
        lengthCart: 0,
  
       

    },
 
    mutations: {
        addToCart(state, payload) {

            let item = payload;
            let sum = 0;
            if (item) {
                let bool = state.cartItems.some(i => i.product.id === payload.product.id);
               
                if (bool) {
                    let index = state.cartItems.findIndex(el => el.product.id == payload.product.id);
                    state.cartItems[index].amount = payload.amount;
                    
                    
                    state.cartItems.forEach(element => {
                        sum += element.price * element.amount
                    });
                  
                    state.priceCart += sum;
                    
                    
                } else {
                    state.cartItems.push(item);
                
                    state.cartItems.forEach(element => {
                        sum += element.price * element.amount
                    });
                  
                    state.priceCart += sum;
                   // console.log(sum);
                }
                //console.log(state.priceCart);
                state.lengthCart = state.cart.cartItems.length;
                this.priceCart = this.$store.state.cart.priceCart;
                localStorage.cart = JSON.stringify(state)
            }
           
            
            

        },



        removeItem(state,payload) {
            if(state.cart.cartItems.length > 0){
                let bool = state.cart.cartItems.some(i => i.id === payload.id);
                if (bool){
                    let index = state.cart.cartItems.findIndex(el => el.id === payload.id)
                    if (state.cart.cartItems[index]["quanlity"]!==0){
                        state.cart.cartItems[index]["quanlity"] -= 1;
                        state.cart.cartItemCount--;
                        state.cart.cartItems.splice(index,1)
                    }
                    if (state.cart.cartItems[index]["quanlity"]===0){
                        state.cart.cartItems.splice(index,1)
                    }
                }
            }

        }
    },
    actions: {
        addToCart: (context, payload) => {
            context.commit("addToCart", payload)
        },

        removeItem: (context,payload) => {
            context.commit("removeItem",payload)
        }
    },
    

})