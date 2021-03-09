<template>
  <div>
    <b-container class="login">
      <b-row align-h="center" class="mt-5">
        <b-col cols="5">
          <h3>Login</h3>
          <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="input-group-1" label="Email address:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Password:" label-for="input-2">
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
      </b-form-group>&nbsp;
      <div class="d-flex justify-content-between">
        <div>
          <b-button type="submit" variant="primary">Submit</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
        </div>
        <div>
          <a href="#" v-b-modal.modal-1>Forgot Password</a>
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
  export default {
    name: 'Login',
   data() {
      return {
        form: {
          email: '',
          password: '',
          checked: []
        },
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.password = ''
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>

<style scoped>
.login{
  margin-top: 10%;

}
</style>