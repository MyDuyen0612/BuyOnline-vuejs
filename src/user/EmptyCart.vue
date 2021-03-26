<template>

    <div class="empty" >
        <img src="https://scontent-hkt1-1.xx.fbcdn.net/v/t1.0-9/133437680_389234648816948_2640037853581718702_o.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=ixLGZSVfFbUAX99qfa3&_nc_ht=scontent-hkt1-1.xx&oh=d1c3700542b592e022a61187941dee1a&oe=60827D2D" width="200px"/>
            <div class="mt-5">
                <h4 class="orange-red fw-600">Your cart is empty</h4>
                <h5 class="darkblue fw-600">You can go to home page to view more product.
                   </h5>
                
            </div> 
    </div>
 
</template>

<script>
export default {
    name: "EmptyCart"
};
</script >

<style scoped>
.empty{

    
    text-align: center;
   
    background: gainsboro;

   
    
}

.orange-red{
    color: orangered;
}
.darkblue{
    color: darkblue;
}
.fw-600{
    font-weight: 600;
}
</style>