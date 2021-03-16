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
              </b-form-checkbox-group> </b-form-group
            >&nbsp;
            <div class="d-flex justify-content-between">
              <div>
                <b-button
                  type="submit"
                  variant="primary"
                  v-show="!messageAlter.showLoad"
                  >Đăng nhập</b-button
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
              <div>
                <b-button variant="warning">Quên mật khẩu</b-button>
              </div>
              <div>
                <b-button to="register" variant="info">Đăng ký</b-button>
              </div>
            </div>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
    <b-modal id="modal-1" title="Forgot Password">
      <b-img thumbnail fluid src="../assets/img/sad.png" alt="So sad"></b-img>
      <div>
        <a href="#">Lấy lại password</a>
      </div>
    </b-modal>
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
body{
    margin: 0;
    padding: 0;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    width: 100%;
}
.box{

    position: relative;
    left: 50%;    
    transform: translate(-50%, -50%);
    width: 60%;
    height: 350px;
    top: 50%;
    margin-top: 20%;
    background: rgba(0, 0, 0, .1);
    box-sizing: border-box;
    box-shadow: rgba(0, 0, 0, .2);
    border-radius: 20px;
}
.login {
 width: 80%;
}
.login  h3{
 margin-top: 15px
}
</style>