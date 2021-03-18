<template>
    <div class="addproduct">
      <b-form @submit="checkForm">
        <p v-if="errors.length">
          <b>Please correct the following error(s):</b>
          <ul>
            <li v-for="error in errors" :key="error">{{ error }}</li>
          </ul>
        </p>
        <b-row>
          <b-col>
            <b-form-group
              id="name"
              label="Tên danh mục:"
              label-for="name"
            >
              <b-form-input
                id="name"
                v-model="name"
                name="name"
                type="text"
                placeholder="Nhập tên danh mục"
                trim
              ></b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary">Submit</b-button>
          </b-col>
        </b-row>
      </b-form>
    </div>
</template>

<script>
export default {
  name: "Addproduct",
  data() {
    return {
      errors: [],
      name: '',
    };
  },
  methods: {
    checkForm: function (e) {
      if (this.name) {
        return true;
      }

      this.errors = [];

      if (!this.name) {
        this.errors.push("Nhập tên danh mục");
      }
      
      e.preventDefault();
    },
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
</style>