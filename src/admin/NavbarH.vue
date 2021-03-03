<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/about">Shop 9799</a>
      <!-- <button class="navbar-toggler" type="button" 
      data-toggle="collapse" data-target="#navbarSupportedContent" 
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button> -->
      <InputSearch/>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto flex-column vertical-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">Dashboard</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pages</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
        
          <li class="nav-item">
            <a class="nav-link" href="#">Another Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Setting</a>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" 
            role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img src="https://placekitten.com/300/300" alt="Avatar" class="avatar">
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Log Out</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import InputSearch from '../components/InputSearch.vue'
  export default {
    name: 'Navbar',
    components:{
      InputSearch
    }
  }
</script>

<style>
.dashboard{
 font-family: cursive;
 font-size: 22px;
}
.avatar {
  vertical-align: middle;
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
@media (min-width:992px) {    
  .vertical-nav {
      position: fixed;
      top: 56px;
      left: 0;
      width: 210px;
      height: 100%;
      background-color:#ffff;
      overflow-y: auto;
      padding-top: 30px
    }
}
</style>