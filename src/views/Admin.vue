<template>
 <div class="admin">
   
  <div class="vertical-nav bg-white" id="sidebar" :class="isActive==true?'active':''">
    <Menu/>
  </div>

   <div class="page-content p-5" id="content" :class="isActive==true?'active':''">
      <nav class="nav">
        <button id="sidebarCollapse" type="button" 
          class="btn btn-light bg-white rounded-pill shadow-sm px-4 mb-4"
          @click="activeMenu">
          <i class="fa fa-bars mr-2"></i>
        </button>
        <Inputsearch/>
      </nav>    
        <!-- <img src="../assets/img/home_admin.svg" class="rounded mx-auto d-block" alt="">   -->
      <router-view/>
    </div>
</div>
</template>

<script>
import Menu from '../admin/Menu.vue'
import Inputsearch from '../components/InputSearch.vue'
export default {
  name: 'Admin',
  data(){
    return{
      isActive: false,
    }
  },
  components:{
    Menu,
    Inputsearch,
  },
  methods:{
    activeMenu: function(){
      this.isActive = !this.isActive;
    }
  }
}
</script>

<style  scoped>
.vertical-nav {
  min-width: 17rem;
  width: 17rem;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.4s;
}

.page-content {
  width: calc(100% - 17rem);
  margin-left: 17rem;
  transition: all 0.4s;
}

/* for toggle behavior */

#sidebar.active {
  margin-left: -17rem;
}

#content.active {
  width: 100%;
  margin: 0;
}

@media (max-width: 768px) {
  #sidebar {
    margin-left: -17rem;
  }
  #sidebar.active {
    margin-left: 0;
  }
  #content {
    width: 100%;
    margin: 0;
  }
  #content.active {
    margin-left: 17rem;
    width: calc(100% - 17rem);
  }
}

/*
*
* ==========================================
* FOR DEMO PURPOSE
* ==========================================
*
*/

body {
  background: #599fd9;
  background: -webkit-linear-gradient(to right, #599fd9, #c2e59c);
  background: linear-gradient(to right, #599fd9, #c2e59c);
  min-height: 100vh;
  overflow-x: hidden;
}

</style>>