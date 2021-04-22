<template>
  <div class="box">
    <b-container class="login">
      <b-row align-h="center" class="mt-5">
        <b-col cols="12">
          <h3>Login</h3>
          <b-alert :show="messageAlter.danger.show" variant="danger">{{
            messageAlter.danger.message
          }}</b-alert>
          <b-form @reset="onReset" v-if="show" @submit="onSubmit">
            <b-form-group
              id="input-group-1"
              label="Username:"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                v-model="form.userName"
                type="text"
                placeholder="Enter Username"
              >
              </b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-2"
              label="Password:"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                type="password"
                v-model="form.password"
                placeholder="Enter password"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
              <b-form-checkbox-group
                v-model="form.checked"
                id="checkboxes-4"
                :aria-describedby="ariaDescribedby"
              >
                <b-form-checkbox value="remeber">Remeber me</b-form-checkbox>
              </b-form-checkbox-group>
            </b-form-group>

            <a href="#">Lấy lại password ?</a>

            <div class="d-flex justify-content-between">
              <div class="btn">
                <b-button
                  type="submit"
                  variant="primary"
                  v-show="!messageAlter.showLoad"
                  >Login</b-button
                >
                <b-button
                  variant="primary"
                  disabled
                  v-show="messageAlter.showLoad"
                >
                  <b-spinner small type="grow"></b-spinner>
                  Loading...
                </b-button>
              </div>

              <div class="btn">
                <b-button to="register" variant="info">Signup</b-button>
              </div>
              
            </div>
            <div class="star">
              <a href="#"><b-icon icon="facebook" scale="2"> </b-icon><label>facebook</label></a>
              <a href="#"><b-icon icon="at" scale="2.5"></b-icon><label>Gmail</label></a>
              <a href="#"><b-icon icon="linkedin" scale="2"></b-icon><label>Linkedin</label></a>
            </div>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import userApi from "../api/userAPi";

export default {
  name: "Login",
  data() {
    return {
      form: {
        userName: "",
        password: "",
      },
      show: true,
      message: "",
      messageAlter: {
        danger: {
          show: false,
          message: "",
        },
        showLoad: false,
      },
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      this.messageAlter.showLoad = true;
      userApi
        .login(this.form)
        .then((response) => {
          localStorage.jwt = response.jwt;
          localStorage.date = response.date;
          this.$router.push({ name: "index" });
        })
        .catch((error) => {
          this.messageAlter.showLoad = false;
          this.messageAlter.danger.message = error;
          this.messageAlter.danger.show = true;
          console.log(error);
        });
    },

    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.password = "";
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    
    },
  },
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  width: 100%;
}
.box {
  position: relative;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  height: auto;
  top: 50%;
  margin-top: 20%;
  background: rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.2);
  border-radius: 20px;
}
.login {
  width: 80%;
}
.login h3 {
  margin-top: 15px;
}

.btn {
  width: 150px;
  margin-left: 10px;
  margin-right: 50px;
  margin-top: 5px;
}
.star{
  margin-top:20px;
  margin-bottom:20px; 
  text-align:center;
  size:50px;
}

.star a{
  margin-left:20px;
  margin-right:20px;
  color:#656565;
}
.star a label{
  margin-left:10px;
  font-size:15px;
}
</style>