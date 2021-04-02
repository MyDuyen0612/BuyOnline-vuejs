<template>
  <div class="col-lg-12 col-md-12 col-sm-12">
    <router-link v-if="isAdd" :to="link">
      <b-avatar class="float-right my-3" variant="success">
        <b-icon icon="plus" scale="2" variant="white"></b-icon>
      </b-avatar>
    </router-link>

    <b-table
      striped
      hover
      :items="items"
      :fields="fields"
      v-if="items.length != 0"
    >
      <template v-slot:cell(action)="data">
        <router-link
          :to="{ name: 'ProductDetail', params: { url: data.item.url } }"
          data-tip="Xem chi tiết"
        >
        <b-button variant="primary" size="sm" class="mr-1">Xem chi tiết</b-button>
        </router-link>
        <router-link
          :to="{ name: 'updateproduct', params: { url: data.item.url } }"
          data-tip="Sửa thông tin sản phẩm"
        >
        <b-button
          variant="warning"
          size="sm"
          class="mr-1"
          >Sửa</b-button
        >
        </router-link>
      </template>
    </b-table>

    <Loading v-else />
  </div>
</template>

<script>
import Loading from "@/components/Loading";
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
  components: { Loading },
};
</script>
