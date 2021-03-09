<template>
  <div>
    <b-container class="login">
      <b-row align-h="center" class="mt-5">
        <b-col cols="5">
          <h3>Register</h3>
          <b-form @submit="onSubmit" @reset="onReset">
            <b-form-group
              id="email"
              label="Email address:"
              label-for="input-email"
            >
              <b-form-input
                id="input-email"
                v-model="form.email"
                type="email"
                placeholder="Enter email"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group id="Name" label="Name:" label-for="input-name">
              <b-form-input
                id="input-name"
                v-model="form.name"
                type="text"
                placeholder="Enter Name"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group
              id="username"
              label="User name:"
              label-for="input-username"
            >
              <b-form-input
                id="input-username"
                v-model="form.userName"
                type="text"
                placeholder="Enter username"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="password"
              label="Password:"
              label-for="input-password"
            >
              <b-form-input
                id="input-password"
                type="password"
                v-model="form.password"
                placeholder="Enter password"
                required
              ></b-form-input>
            </b-form-group>
            <div class="d-flex justify-content-between">
              <div>
                <b-button type="submit" variant="primary">Submit</b-button>
              </div>
              <div>
                <b-button type="reset" variant="danger">Reset</b-button>
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
        name: "",
        userName: "",
        password: "",
        email: "",
      },
      validation: {
        email: false,
        password: false,
        name: false,
        userName: false,
      },
    };
  },
  methods: {
    async onSubmit(event) {
      event.preventDefault();

      await userApi
        .register(this.form)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.password = "";
      this.form.name = "";
      this.form.username = "";
    },
  },
};
</script>

<style scoped>
.login {
  margin-top: 10%;
}
</style>