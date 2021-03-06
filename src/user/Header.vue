<template>
<div class="header">
  <b-navbar toggleable="lg" type="light" variant="light">
    <b-button v-b-toggle.sidebar-no-header variant="light"><b-icon icon="list"></b-icon></b-button>
    <b-navbar-brand href="#">Shinn1999 </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <InputSearch/>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
         <template #button-content>
            <b-avatar></b-avatar>
         </template>
          <b-dropdown-item> <router-link to="/login">Đăng nhập</router-link></b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
import InputSearch from '../components/InputSearch.vue'
   export default {
      name: 'Header',
      components:{
         InputSearch
      }
   }
</script>

<style scoped>

</style>