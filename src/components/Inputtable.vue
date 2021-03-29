<template>
  <div>
    <router-link v-if="isAdd" :to="link">
      <b-avatar class="float-right my-3" variant="success">
        <b-icon icon="plus" scale="2" variant="white"></b-icon>
      </b-avatar>
    </router-link>
    
    <b-table striped hover :items="items" :fields="fields" v-if="items.length != 0">
      <template v-slot:cell(action)="data">
        <!-- `data` -->
        <b-button variant="primary" size="sm" class="mr-1">Xem</b-button>
        <b-button variant="warning" size="sm" class="mr-1">Sửa</b-button>
        <b-button variant="danger" size="sm" @click="deleteSp(data.item.Masp)"
          >Xóa</b-button
        >
      </template>
    </b-table>

    <Loading v-else /> 
  </div>
</template>

<script>
import Loading from '@/components/Loading';
export default {
  props: {
    items: Array,
    fields: Array,
    isAdd: {
      default: true,
      typeof: Boolean,
    },
    link: String,
  },
  name: "Inputtable",
  data() {
    return {};
  },
  methods: {
    deleteSp: function (id) {
      // console.log(id);
      const index = this.items.indexOf((x) => x.id === id);
      this.items.splice(index, 1);
    },
  },
  components: {Loading}
};
</script>