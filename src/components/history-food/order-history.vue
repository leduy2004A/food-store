<template>
  <div class="order-history">
    <h3 class="mb-10">Lịch sử đơn hàng</h3>
    <v-data-table
      :items-per-page="itemsPerPage"
      :headers="headers"
      :items="food"
      color="success"
      item-value="name"
      class="elevation-1"
    >
      <template v-slot:[`item.actions`] = {item,index}>
        <v-btn flat="true" color="blue" @click="openDialog(item,index)">
          chi tiết
        </v-btn>
    </template>
     <template v-slot:[`item.status`]>
        <a-tag color="orange">đang xử lý</a-tag>
    </template>
    <template v-slot:top>
    <billHistoryVue v-if="decide" :dataFood="dataFood"></billHistoryVue>
    </template>
    </v-data-table>
    
  </div>

</template>

<script>
// import { computed } from "vue";
// // import { computed } from 'vue'
// import { useStore } from "vuex";
import { getOrder } from "../../apis/OrderFood";
import billHistoryVue from './bill-history.vue';
// const {mapState} = createNamespacedHelpers("InforReceiver")
export default {
  components:{
    billHistoryVue
  },
  data() {
    
    return {
      headers: [
        {
          title: "Mã đơn hàng",
          align: "center",
          sortable: false,
          key: "CodeBill",
        },
        { title: "Trạng thái đơn hàng", align: "center", key:"status" },
        { title: "Ngày tạo đơn", align: "center", key: "time" },
        { title: "Hành động", align: "center", key: "actions" },
      ],
      food: [],
      decide:false,
      dataFood:{}
    };
  },
  mounted() {
    this.getFood();
    this.emitter.on("toggle-modal",test =>{
      this.decide = test
    })
  },
  methods: {
    async getFood() {
      const dataFood = await getOrder();
      const foodArray = dataFood.data.map((item) => {
        const isoString = item.doc.created_at;
        const date = new Date(isoString);

        // Lấy ra thông tin cụ thể về thời gian
        const year = date.getFullYear();
        const month = date.getMonth() + 1; // Tháng bắt đầu từ 0, nên cộng thêm 1
        const day = date.getDate();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        const timeBuy = {
         time: `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`
        }
        let object = {...item.doc,...timeBuy};
        object.dataOrder = item.result
        return object
      });
      this.food = foodArray;
      console.log(this.food);
    },
    editItem(duy){
      console.log(duy)
    },
    openDialog(item,index){
      console.log(item.raw, index)
      this.dataFood = item.raw
      this.decide = true
    
    }
  },

};
</script>

<style scoped></style>
