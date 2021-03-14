<template>
  <div>
    <b-container class="cart">
      <h1>Cart</h1>
      <div class="col-sm-12 col-md-10 col-md-offset-1">
        <table class="table table-hover">
          <thead>
            <tr>
              <th>Product</th>
        
              <th>Quantity</th>
              <th class="text-center">Price</th>
              <th class="text-center">Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="col-sm-8 col-md-6">
                <div class="media">
                  <a class="thumbnail pull-left" href="#">
                    <img
                      class="media-object"
                      src="https://scontent.fsgn4-1.fna.fbcdn.net/v/t1.0-1/p240x240/133437680_389234648816948_2640037853581718702_o.jpg?_nc_cat=106&ccb=1-3&_nc_sid=7206a8&_nc_ohc=-6XqufQNoOAAX_NCdTZ&_nc_ht=scontent.fsgn4-1.fna&tp=6&oh=1357ccc98e984d0e6ca0ed5a24f5bc00&oe=607106FF"
                      style="width: 72px; height: 72px"
                    />
                  </a>
                  <div class="media-body">
                    <h5 class="media-heading"><a href="#">Product Name</a></h5>
                    
                    <span>Status: </span
                    ><span class="text-warning"><strong>In Stock</strong></span>
                  </div>
                </div>
              </td>
              
              <td class="col-sm-1 col-md-1" style="text-align: center">
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  value="8"
                />
              </td>
              <td class="col-sm-1 col-md-1 text-center">
                <strong>$26.11</strong>
              </td>
              <td class="col-sm-1 col-md-1 text-center">
                <strong>$26.11</strong>
              </td>
              <td class="col-sm-1 col-md-1">
                <b-button id="del" variant="outline-danger">
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
              <td><h6>Total</h6></td>
              <td class="text-right">
                <h3><strong>$26.11</strong></h3>
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <b-button id="add" variant="outline-primary">
                  <b-icon-cart-plus></b-icon-cart-plus>
                </b-button>
                <b-tooltip target="add" placement="center" variant="primary">
                Continue to shop
                </b-tooltip>
              </td>
              <td>
                <b-button id="checkout" variant="outline-success">
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
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Cart",
};
</script>

<style scoped>
.thumbnail {
  margin-right: 20px;
}
</style>

