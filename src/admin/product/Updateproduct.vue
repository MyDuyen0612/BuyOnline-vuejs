<template>
    <div class="updateproduct">
      <h3 class="text-center text-primary">Sửa thông tin sản phẩm</h3>
      <b-form @submit="submit" >
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
                      required
                      :placeholder="product.name"
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
                      <b-form-select v-model="selectCategory" size="sm" class="mt-3" required>
                        <b-form-select-option v-for="(itemCategory,index) in categorys" :key="index" :value="itemCategory">{{itemCategory.name}}</b-form-select-option>
                      </b-form-select>
                  </b-form-group>
                 
                    <b-button variant="primary" @click="themCategory">Thêm danh mục</b-button>
                 
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
                    :value="product.price"
                    required
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
                    :value="product.discount"
                    required
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
                        :placeholder="product.shortIntroduction"
                        required
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
                        :placeholder="product.introduce"
                        required
                        rows="3"
                        max-rows="6"
                      ></b-form-textarea>
                </b-col>
              </b-row>  
              <b-row>
                  <b-button id="btnThem" type="submit" variant="primary" >Sửa thông tin sản phẩm</b-button>  
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
                        <b-button variant="danger" @click="deleteColor(indexColor)" style="margin-top:2em">Xoá màu sắc</b-button>    
                      </b-col>
                    </b-row>
                    <b-row v-for="(itemimage,indeximage) in itemColor.image" :key="indeximage">
                      <b-col>
                        <input type="file" @change="imageChange(indexColor,$event)" multiple 
                        accept="image/jpeg, image/png, image/gif"/>
                      </b-col>
                    </b-row>
                  </b-container>
                  <b-container >  
                    <b-row v-for="(itemSize,indexSize) in itemColor.size" :key="indexSize">
                      <b-col >          
                        <b-form-group
                          id="input-size"
                          label="Tên Size:"
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
                          label="Số lượng của size:"
                          label-for="input-soluong"
                        >
                        <b-form-input
                          id="input-soluong"
                          type="number"
                          :value="itemSize.amount"
                          required
                          v-model="itemSize.amount"
                          min=1
                        ></b-form-input>
                      </b-form-group>
                    </b-col>
                    <b-col >
                        <b-button variant="danger" @click="deleteSize(indexSize,indexColor)" style="margin-top:2em">Xoá size</b-button>
                      </b-col>
                  </b-row>
                  <b-row>
                    <b-col> 
                      <b-button variant="primary" @click="newSize(indexColor)">Thêm Size</b-button>
                    </b-col>
                  </b-row>
                </b-container>        
              </b-row>
              <b-row class="mt-3">
                <b-col>
                  <b-button variant="primary" @click="newColor()">Thêm màu sắc</b-button>
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
  name: "Updateproduct",
  data() {
    return {
      image: [], //file
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
            code: "",
            size: [
              {
                name: "",
                amount: 1,
              },
            ],
            image: [], //ten file thuoc color
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
        this.product.introduce && this.product.category
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
<style lang="scss" scoped>
#introduce {
  margin-top: 2%;
}
#btnThem {
  margin-top: 2%;
}
</style>