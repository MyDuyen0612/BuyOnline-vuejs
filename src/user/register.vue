<template>
  <div class="box">
    <b-container class="login">
      <b-row align-h="center" class="mt-5">
        <b-col cols="12">
          <h3>Register</h3>
          <div
            v-show="success.length > 0"
            class="alert alert-success"
            role="alert"
          >
            <ul>
              <li v-for="(success, index) in success" :key="index">
                {{ success }}
              </li>
            </ul>
          </div>

          <div
            v-show="errors.length > 0"
            class="alert alert-danger"
            role="alert"
          >
            <ul>
              <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
            </ul>
          </div>

          <b-form @submit="onSubmit" @reset="onReset">
            <b-form-group
              id="email"
              label="Email address:"
              label-for="input-email"
            >
              <b-form-input
                id="input-email"
                v-model="form.email"
                :state="
                  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
                    form.email
                  )
                    ? true
                    : false
                "                
                :formatter="format"
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
                :state="form.name.length > 5"
                placeholder="Enter Name (6 key)"
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
                :state="form.userName.length > 5"
                :formatter="format"
                type="text"
                placeholder="Enter username (6 key)"
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
            <b-form-group
              id="password 2"
              label="Nhap lai password :"
              label-for="input-password2"
            >
              <b-form-input
                id="input-password2"
                type="password"
                v-model="form.password2"
                placeholder="Enter password2"
                required
              ></b-form-input>
            </b-form-group>

                      
            <div class="d-flex justify-content-between">
              <div class="btn">
                <b-button type="submit" variant="primary"
                  >Submit
                  <div
                    class="spinner-border text-success"
                    role="status"
                    v-show="isActive"
                  >
                    <span class="sr-only">Loading...</span>
                  </div>
                </b-button>
              </div>
              <div  class="btn">
                <b-button type="reset" variant="danger">Reset</b-button>
              </div>
              <div class="btn">
                <b-button to="login" variant="info">Login</b-button>
              </div>
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
  name: "Register",
  data() {
    return {
      form: {
        name: "",
        userName: "",
        password: "",
        email: "",
      },
      validation: {
        email: true,
        password: false,
        name: false,
        userName: false,
      },
      isActive: false,
      errors: [],
      success: [],
    };
  },
  methods: {
    async onSubmit(event) {
      event.preventDefault();
      this.isActive = !this.isActive;
        if (this.form.userName.length < 6) {
          alert("Username ít gì cũng 6 ký tự chứ nhở");
          this.isActive = !this.isActive;
          return ;
        }
        if (this.form.name.length < 6) {
          alert("Name ít gì cũng 6 ký tự chứ nhở");
          this.isActive = !this.isActive;
          return ;
        }
        if (this.form.password.length < 6) {
          alert("Password ít gì cũng 6 ký tự chứ nhở");
          this.isActive = !this.isActive;
          return ;
        }
        if (this.form.password2 != this.form.password) {
          alert("Password Khong trung khop");
          this.isActive = !this.isActive;
          return ;
        }
        
        var re = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/; 
        if(re.test(this.form.password)!=true){
          alert("Password phai co chu hoa, thuong va so");
          this.isActive = !this.isActive;
          return ;
        }
        
        await userApi.register(this.form).then((response) => {
        this.isActive = !this.isActive;
        if (response != null) {
          alert("Bạn đăng ký thành công");
          this.$router.push('../Login')
        }
        
      }).catch((error)=>{
        alert(error.response.data.message);
        this.isActive = !this.isActive;
      });
      
      await userApi.register(this.form).then((response) => {
        this.isActive = !this.isActive;
        if (response != null) {
          alert("Bạn đăng ký thành công");
        }
      }).catch((error)=>{
        console.log(error.message);
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
    format(value) {
      return value.toLowerCase();
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
  width: 62%;
  height: 460px;
  top: 50%;
  margin-top: 20%;
}
.login {
  width: 80%;
}
.login h3 {
  margin-top: 15px;
}
.btn {
  width:130px;
  margin-left:5px;
  margin-right:35px;
}
</style>
