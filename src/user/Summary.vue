<template>
  <div class="row" style="width: 50%">
      <div class="col-md-4">
          <h6>Total:</h6>
          <h6>Promo Code</h6>
          <h6>Shipping</h6>
          <div class="my-3 line w-120"> </div>
          <h6>Subtotal:</h6>
      </div>
      <div class="col-md-4">
          <h6>Tổng tiền ở đây nèVND</h6>
          <h6>Đây là mã discount</h6>
          <h6>đây là phí VC VND</h6>
          <div class="my-3 line w-60"></div>
          <h6>Đây là tổng cộng sau khi cộng VCVND</h6>
      </div>
  </div>
</template>

<script>
export default {
    name: "Summary",
    props: ["totalPrice"]
};
</script>

<style scoped>
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
</style>