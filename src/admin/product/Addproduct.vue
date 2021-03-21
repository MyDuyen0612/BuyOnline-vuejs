<template>
    <div class="addproduct">
      <h3 class="text-center text-primary">Thêm sản phẩm</h3>
      <b-form @submit="submit" >
        <b-alert :show="errors.length>-1?false:true" variant="danger">
        <p v-if="errors.length">
          <b>Please correct the following error(s):</b>
          <ul>
            <li v-for="error in errors" :key="error">{{ error }}</li>
          </ul>
        </p>
        </b-alert>
        <b-container fluid>
          <b-row>
            <b-col >
              <b-row>
                <b-col sm="12">
                  <b-form-group
                    id="name"
                    label="Tên sản phẩm:"
                    label-for="name" 
                  >
                    <b-form-input
                      id="name"
                      v-model="product.name"
                      name="name"
                      type="text"
                      placeholder="Nhập tên sản phẩm"
                      trim
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
                            <b-row>
                <b-col sm="12">
                  <b-form-group
                    id="name"
                    label="Danh mục :"
                    label-for="name" 
                  >
                      <b-form-select v-model="selectCategory" size="sm" class="mt-3">
                        <b-form-select-option v-for="(itemCategory,index) in categorys" :key="index" :value="itemCategory">{{itemCategory.name}}</b-form-select-option>
                      </b-form-select>
                  </b-form-group>
                  <button @click="themCategory"> Thêm danh mục</button>
                  <div v-for="(itemCategory,index) in product.category" :key="index">
                      {{itemCategory.name}}
                  </div>
                </b-col>
              </b-row>
              <b-row>
                <b-col sm="6">
                  <b-form-group id="price" label="Đơn giá:" label-for="price">
                    <b-form-input
                    id="price"
                    v-model="product.price"
                    type="number"
                    name="price"
                    placeholder="Nhập giá sản phẩm"
                    min="50000"
                  ></b-form-input>
                </b-form-group>
                </b-col>

                <b-col sm="6">
                  <b-form-group id="discount" label="Giá khuyến mãi:" label-for="discount">
                    <b-form-input
                    id="discount"
                    v-model="product.discount"
                    type="number"
                    name="discount"
                    placeholder="Nhập giá khuyến mãi"
                    min="5000"
                  ></b-form-input>
                </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                    <b-form-textarea
                        id="shortIntroduction"
                        v-model="product.shortIntroduction"
                        type="text"
                        placeholder="Mô tả ngắn"
                        rows="3"
                        max-rows="6"
                      ></b-form-textarea>
                </b-col>
              </b-row>  
              <b-row>
                <b-col>
                    <b-form-textarea
                        id="introduce"
                        v-model="product.introduce"
                        type="text"
                        placeholder="Mô tả"
                        rows="3"
                        max-rows="6"
                      ></b-form-textarea>
                </b-col>
              </b-row>  
              <b-row>
                
                  <b-button id="btnThem" type="submit" variant="primary" >Thêm sản phẩm</b-button>  
              </b-row>
            </b-col>
            <b-col>
              <b-row v-for="(itemColor,indexColor) in product.color" :key="indexColor">
                 <b-container >
                   <b-row>

                      <b-col > 
                  <b-form-group
                  id="input-color"
                  label="Tên màu sắc:"
                  label-for="input-color"
                >
                
                <b-form-input
                v-model="itemColor.name"
                  id="input-color"
                  type="text"
                  required
                >
                  </b-form-input>
                
                    </b-form-group>
                    </b-col>   
                    <b-col>               
                        <b-button variant="danger" @click="deleteColor(indexColor)" style="margin-top:2em">Xoá kích thước</b-button>    
                    </b-col>
                   </b-row>
                   
                    <b-row>
                      <b-col>
                        
                          <input type="file" @change="imageChange(indexColor,$event)" multiple />
                      </b-col>
                    </b-row>
                 </b-container>
                <b-container >  
                  <b-row v-for="(itemSize,indexSize) in itemColor.size" :key="indexSize">
                    <b-col >          
                      <b-form-group
                        id="input-size"
                        label="Tên số lượng:"
                        label-for="input-size"
                      >
                      
                      <b-form-input
                        id="input-size"
                        type="text"
                        required
                        v-model="itemSize.name"
                      ></b-form-input>
                      
                    </b-form-group></b-col>
                    
                    <b-col><b-form-group
                        id="input-soluong"
                        label="Số lượng:"
                        label-for="input-soluong"
                      >
                      <b-form-input
                        id="input-soluong"
                        type="number"
                        min=1
                        required
                        v-model="itemSize.amount"
                      ></b-form-input>
                    </b-form-group>
                  </b-col>
                   <b-col >
                      <b-button variant="danger" @click="deleteSize(indexSize,indexColor)" style="margin-top:2em">Xoá màu sắc</b-button>
                    </b-col>
                </b-row>
                <b-row>
                <b-col> 
                <b-button variant="primary" @click="newSize(indexColor)">Thêm màu sắc</b-button>
                
                </b-col>
                </b-row>
                </b-container>
               
                
              
              </b-row>
              <b-row class="mt-3">
                  <b-col>
                      <b-button variant="primary" @click="newColor()">Thêm kích thước</b-button>
                  </b-col>
              </b-row>
            </b-col>

          </b-row>
        </b-container>
      </b-form>
    </div>
</template>

<script>
import categoryAPI from "../../api/categoryAPI";
import productAPI from "../../api/productAPI";
export default {
  name: "Addproduct",
  data() {
    return {
      errors: [],
      image: [],
      product: {
        name: "",
        price: 0,
        discount: 0,
        shortIntroduction: "",
        introduce: "",
        category: [],
        color: [
          {
            name: "",
            size: [
              {
                name: "",
                amount: 1,
              },
            ],
            image: [],
          },
        ],
      },
      categorys: {
        name:''
      },
      selectCategory: {},
    };
  },
  methods: {
    deleteColor: function (indexColor) {
      this.product.color.splice(indexColor, 1);
    },
    deleteSize: function (indexSize, indexColor) {
      this.product.color[indexColor].size.splice(indexSize, 1);
    },
    newColor: function () {
      const colorNew = {
        name: "",
        size: [
          {
            name: "",
            amount: 1,
          },
        ],
        image: [],
      };
      this.product.color.push(colorNew);
    },
    newSize: function (indexColor) {
      const sizeNew = {
        name: "",
        amount: 1,
      };
      this.product.color[indexColor].size.push(sizeNew);
    },
    submit: function (e) {
      e.preventDefault();
      
      if (
        this.product.name &&
        this.product.price &&
        this.product.discount &&
        this.product.shortIntroduction &&
        this.product.introduce 
      ) {
        const formdata = new FormData();
        formdata.append("product",JSON.stringify(this.product));
       for (let index = 0; index < this.image.length; index++) {
         formdata.append("file",this.image[index]);
         
       }
        productAPI
          .save(formdata)
          .then((response) => {
            alert("thanh cong");
            console.log(response)
          })
          .catch((error) => {
            alert("that bai");
            console.log(error.response);
          });
      }
      this.errors = [];

      if (!this.product.name) {
        this.errors.push("Nhập tên sản phẩm");
      }
      if (!this.product.price) {
        this.errors.push("Nhập giá");
      }
      if (!this.product.discount) {
        this.errors.push("Nhập mã giảm giá");
      }
      if (!this.product.color[0].name) {
        this.errors.push("Nhập màu sản phẩm");
      }
      if (!this.product.color[0].size[0].name) {
        this.errors.push("Nhập size sản phẩm");
      }
      if (!this.product.color[0].size[0].amount) {
        this.errors.push("Nhập số lượng của size");
      }
      if (!this.product.shortIntroduction) {
        this.errors.push("Nhập mô tả ngắn");
      }
      if (!this.product.introduce) {
        this.errors.push("Nhập mô tả");
      }
      if (this.product.color[0].image) {
        this.errors.push("Chọn hình cho màu sản phẩm");
      }
    },
    imageChange: function (indexColor, event) {
      for (let index = 0; index < event.target.files.length; index++) {
        this.image.push(event.target.files[index]);
        
      }
      event.target.files.forEach((element) => {
        const file = {
          fileName: element.name,
        };
        this.product.color[indexColor].image.push(file);
      });
    },
    themCategory:function(){
      const category =this.selectCategory;
        if(this.product.category.indexOf(category)==-1)
        this.product.category.push(this.selectCategory);
    }
  },
  mounted() {
    categoryAPI.getAll().then((response) => {
      this.categorys = response;
    });
  },
};
</script>

<style lang="scss" scoped>
.btn-addsp {
  display: block;
  background-color: rgb(9, 158, 9);
  border: 1px solid white;
  border-radius: 0.2rem;
  height: 35px;
  color: white;
  margin-top: 2%;
}
#introduce {
  margin-top: 2%;
}
#btnThem {
  margin-top: 2%;
}
</style>