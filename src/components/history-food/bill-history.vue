<template>
  <div class="bill">
    <modal-history-vue>
      <v-row>
        <v-col cols="4">Tên Khách Hàng: {{dataFood.RecipientsName}}</v-col>
        <v-col cols="4">Số Điện Thoại: {{dataFood.Phone}}</v-col>
        <v-col cols="4">Địa chỉ: {{dataFood.Address}}</v-col>
      </v-row>
      <v-row>
        <v-col cols="4">Tổng Tiền: {{formatMoney(dataFood.totalPrice)}}</v-col>
        <v-col cols="4">Gmail: {{dataFood.Email}}</v-col>
        <v-col cols="4">Mã Hóa Đơn: {{dataFood.CodeBill}}</v-col>
      </v-row>
      <v-row>
        <v-col cols="4"> Hóa Đơn: <a-tag color="red">In hóa đơn</a-tag> </v-col>
      </v-row>
      <v-table>
        <thead>
          <tr>
            <th class="text-center">Tên Món</th>
            <th class="text-center">Ảnh Món Ăn</th>
            <!-- <th class="text-center">Số lượng</th>
            <th class="text-center">Đơn giá</th>
            <th class="text-center">Tổng Tiền</th> -->
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in dataFood.dataOrder" :key="item">
            <td class="text-center">{{ item.food_name }}</td>
            <td class="text-center"><img :src="item.image" alt=""></td>
          </tr>
        </tbody>
      </v-table>
    </modal-history-vue>
  </div>
</template>

<script>
import modalHistoryVue from "./modal-history.vue";
export default {
    props:{
        dataFood:{
            type:Object
        },
    },
  components: {
    modalHistoryVue,
  },
  methods:{
    formatMoney(money)
    {
       return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(money)
    }
  }
};
</script>

<style scoped>
img{
    padding: 10px 10px;
    width: 100px;
    height: 100px;
}
</style>
