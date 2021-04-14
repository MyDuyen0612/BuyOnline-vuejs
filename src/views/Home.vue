<template>
  <div class="admin">
    <div
      class="vertical-nav bg-white"
      id="sidebar"
      :class="isActive == true ? 'active' : ''"
    >
      <Menuuser :name="userName" :category="category" />
    </div>

    <div
      class="page-content p-5"
      id="content"
      :class="isActive == true ? 'active' : ''"
    >
      <nav class="row">
        <button
          id="sidebarCollapse"
          type="button"
          class="btn btn-light bg-white rounded-pill shadow-sm px-4 mb-4"
          @click="activeMenu"
        >
          <i class="fa fa-bars mr-8"></i>
        </button>
        <div class="col-9">
          <InputSearch />
        </div>
        <button
          id="sidebarCollapse"
          type="button"
          class="btn btn-light bg-white rounded-pill shadow-sm px-4 mb-4"
          @click="logOut"
          v-show="userName != null && userName != ''"
        >
          Đăng xuất
        </button>
      </nav>
      <!-- <img src="../assets/img/home_admin.svg" class="rounded mx-auto d-block" alt="">   -->
      <router-view />
    </div>
  </div>
</template>

<script>
import InputSearch from "../components/InputSearch.vue";
import Menuuser from "../components/Memuuser.vue";
import userApi from "../api/userAPi";
import categoryAPI from "../api/categoryAPI";
export default {
  name: "Home",
  data() {
    return {
      isActive: false,
      userName: "",
      category: [],
    };
  },
  components: {
    Menuuser,
    InputSearch,
  },
  methods: {
    activeMenu: function () {
      this.isActive = !this.isActive;
    },
    logOut: function () {
      localStorage.removeItem("jwt");
      localStorage.removeItem("date");
      this.$router.push({ name: "index" });
      this.userName = "";
    },
  },
  mounted() {
    categoryAPI.getAll().then((response) => {
      this.category = response;
    });

    if (localStorage.getItem("cart")) {
      const cart = JSON.parse(localStorage.getItem("cart"));
      this.$store.state = cart;
      
    }
    if (localStorage.getItem("jwt")) {
        userApi
          .profile()
          .then((response) => {
            this.userName = response.name;
          })
          .catch((error) => {
            this.userName = "";
            console.log(error);
          });
    }
  },
  updated() {
    if (localStorage.getItem("jwt")) {
        userApi
          .profile()
          .then((response) => {
            this.userName = response.name;
          })
          .catch(() => {
            this.userName = "";
          });
      
    }
  },
};
</script>

<style scoped>
body {
  background-color: black;
}
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

body {
  background: #599fd9;
  background: -webkit-linear-gradient(to right, #599fd9, #c2e59c);
  background: linear-gradient(to right, #599fd9, #c2e59c);
  min-height: 100vh;
  overflow-x: hidden;
}
</style>
