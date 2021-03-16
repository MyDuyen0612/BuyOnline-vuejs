<template>
  <div>
    <inputtable :items="items" :isAdd="false" />
  </div>
</template>

<script>
import Inputtable from "../components/Inputtable.vue";
import userApi from "../api/userAPi";
export default {
  components: { Inputtable },
  data() {
    return {
      fields: [],
      items: [],
    };
  },
  created() {
    const getUser = async () => {
      await userApi
        .getAll()
        .then((response) => {
          const data = [];
          response.forEach((element) => {
            data.push({
              "ID khách hàng": element.id,
              "Tên khách hàng": element.name,
              "Email của khách hàng": element.email,
              "Tài khoản khách hàng": element.userName,
            });
          });

          this.items = data;
        })
        .catch((error) => {
          alert(error.response.message);
        });
    };
    getUser();
  },
};
</script>

<style></style>
