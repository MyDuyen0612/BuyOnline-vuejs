<template>
<div>
  <b-link v-if="isAdd" href="#" v-b-modal.add-modal @click="$bvModal.show('add-modal')">
    <b-avatar class="float-right my-3" variant="success">
      <b-icon icon="plus" scale="2" variant="white"></b-icon>
    </b-avatar>
  </b-link>
  
  <b-table striped hover :items="items" :fields="fields">
    <template v-slot:cell(action)="data"> <!-- `data` -->
        <b-button variant="primary" size="sm"  class="mr-1">Xem</b-button>
        <b-button variant="warning" size="sm"  class="mr-1">Sửa</b-button>
        <b-button variant="danger" size="sm" @click="deleteSp(data.item.Masp)">Xóa</b-button>
    </template>
</b-table>

</div>
</template>

<script>
  export default {
    props:{    
      items:Array,
      fields:Array,
      isAdd: {
        default: true,
        typeof : Boolean
      }
    },
    name: 'Inputtable',
    data() {
      return {
        
      }
    },
    methods: {
      deleteSp: function (id) {
        // console.log(id);
        const index = this.items.indexOf((x) => x.id === id);
        this.items.splice(index, 1);
      },

    },
    
  }
</script>