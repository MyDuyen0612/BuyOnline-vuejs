import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        cartItems:{
            quanlity:0,
            product:[
                
                    {id: 2, name:'Dat',price: 500000,quanlity:1},

                
            ],
            monney:0,
            phivanchuyen:0
        },
       
    },
    mutations: {
        addToCart(state, payload){
           
        let item = payload;
        
        if(!item){
            let bool = state.cartItems.product.some(i=>i.id === payload.id);
            if(bool){
                let index = state.cartItems.product.findIndex(el => el.id ==payload.id);
                state.cartItems.product[index].quanlity = payload.quanlity;
                 let sum = 0;
                state.cartItems.product.forEach(element => {
                    sum += element.price
                });
                state.cartItems.monney = sum - state.cartItems.phivanchuyen;
            }else{
                state.cartItems.product.push(item);
                let sum = 0;
                state.cartItems.product.forEach(element => {
                    sum += element.price
                });
                state.cartItems.monney = sum - state.cartItems.phivanchuyen;
                state.cartItems.quanlity++;
            }
        }


        }, 
        removeItem(){
            // if(state.cartItems.length > 0){
            //     let bool = state.cartItems.some(i => i.id === payload.id)
            //     if (bool){
            //         let index = state.cartItems.findIndex(el => el.id === payload.id)
            //         if (state.cartItems[index]["quanlity"]!==0){
            //             state.cartItems[index]["quanlity"] -= 1
            //             state.cartItemCount--
            //         }
            //         if (state.cartItems[index]["quanlity"]===0){
            //             state.cartItems.splice(index,1)
            //         }
            //     }
            // }
        }
    },
    actions:{
        // addToCart: (context,payload) =>{
        //     context.commit("addToCart",payload)
        // },
        // removeItem: (context,payload) => {
        //     context.commit("removeItem",payload)
        // }
    }

})