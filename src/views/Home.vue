<template>
  <div class="admin">
    <div
      class="vertical-nav bg-white"
      id="sidebar"
      :class="isActive == true ? 'active' : ''"
    >
      <Menuuser :name="userName" />
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
export default {
  name: "Home",
  data() {
    return {
      isActive: false,
      userName: "",
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
      this.$router.push({ name: "index" });
      this.userName = "";
    },
  },
  mounted() {
    const jwt = localStorage.getItem("jwt");
    if (jwt != null) {
      const form = new FormData();
      form.append("jwt", jwt);
      userApi
        .profile(form)
        .then((response) => {
          this.userName = response.name;
        })
        .catch(() => {
          this.userName = "";
        });
    }
  },
  updated() {
    const jwt = localStorage.getItem("jwt");
    if (jwt != null) {
      const form = new FormData();
      form.append("jwt", jwt);
      userApi
        .profile(form)
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
.products {
  display: flex;
  max-width: 1280px;
  padding: 25px;
  margin: 0 auto;
}
</style>
