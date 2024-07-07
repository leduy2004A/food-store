<template>
  <div class="food-infor">
    <h3>ĐƠN HÀNG</h3>
    <div class="main-infor">
      <div class="main-content">
        <ul class="d-flex">
          <li>Sản Phẩm</li>
          <li>Tổng số lượng</li>
        </ul>
        <v-divider class="divider" color="black"></v-divider>
        <ul class="d-flex" v-for="item in food" :key="item">
          <li>{{ item.food_name }} X {{ item.item_number }}</li>
          <li>{{ getPrice(item) }}</li>
        </ul>
        <v-divider class="divider" color="black"></v-divider>
        <ul class="d-flex">
          <li>Chi phí vận chuyển</li>
          <li>30.000 VND</li>
        </ul>
        <v-divider class="divider" color="black"></v-divider>
        <ul class="d-flex">
          <li>Tổng cộng</li>
          <li>{{ getTotalPrice(food) }}</li>
        </ul>
      </div>
    </div>
    <div class="method-pay">
      <button class="ship-pay btn-css" @click="clickToBuy()">THANH TOÁN KHI NHẬN HÀNG</button>
      <button class="online-pay btn-css">THANH TOÁN ONLINE</button>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers, useStore } from "vuex";
const { mapState } = createNamespacedHelpers("CartFood");
export default {
  setup() {
    const store = useStore();
    store.dispatch("CartFood/showCartActions");
  },
  computed: {
    ...mapState({
      food: (state) => state.food,
    }),
  },
  methods: {
    getPrice(food) {
      var formattedAmount = food.price;
      var cleanedAmount = formattedAmount.replace(/\./g, "");
      var integerValue = parseInt(cleanedAmount, 10);

      const money = integerValue * food.item_number;
      const config = {
        style: "currency",
        currency: "VND",
        maximumFractionDigits: 9,
      };
      const formated = new Intl.NumberFormat("vi-VN", config).format(money);
      return formated;
    },
    getTotalPrice(food) {
      let totalPriceDuy = 0;
      for (let i of food) {
        var formattedAmount = i.price;
        var cleanedAmount = formattedAmount.replace(/\./g, "");
        var integerValue = parseInt(cleanedAmount, 10);
        const money = integerValue * i.item_number;
        totalPriceDuy += money;
      }
      let money = totalPriceDuy+30000;
      const config = {
        style: "currency",
        currency: "VND",
        maximumFractionDigits: 9,
      };
      const formated = new Intl.NumberFormat("vi-VN", config).format(money);
      return formated;
    },
    clickToBuy(){
      this.$emit("clickbuy")
    }
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@200;400&family=Poppins&display=swap");
.main-infor {
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 568px;
  margin-top: 20px;
  background-color: #f6f6f6;
}
.method-pay {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.btn-css {
  width: 100%;
  background-color: orange;
  color: white;
  font-size: 14px;
  font-family: "Be Vietnam Pro", sans-serif;
  font-weight: 500;
  border-radius: 50px;
  padding: 18px 20px;
  margin-top: 25px;
}
.btn-css:hover {
  background-color: black;
}
ul {
  color: black;
  list-style: none;
  justify-content: space-between;
}
.main-content {
  width: 90%;
  padding: 38px 45px 44px;
}
.divider {
  margin: 29px 0;
}
</style>
