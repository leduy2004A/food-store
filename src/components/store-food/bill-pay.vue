<template>
  <div class="bill-pay">
    <h3 class="title-bill text-cblack">Tổng số giỏ hàng</h3>
    <div class="price d-flex justify-space-between align-center">
      <h3 style="color: red">Tổng cộng</h3>
      <h3 style="color: red">{{ getPrice(food) }}</h3>
    </div>
    <div class="accept-buy">
      <router-link to="/checkout">Tiến hành kiểm tra</router-link>
      <!-- <a href="#">Tiến hành kiểm tra</a> -->
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
  created() {
    this.getPrice();
  },
  computed: {
    ...mapState({
      food: (state) => state.food,
    }),
  },
  methods: {
    getPrice(food) {
      if (food !== undefined) {
        let totalPrice = 0;
        const arrFood = food.map((item) => {
          var formattedAmount = item.price;
          var cleanedAmount = formattedAmount.replace(/\./g, "");
          var integerValue = parseInt(cleanedAmount, 10);
          return integerValue * item.item_number;
        });
        for (let i of arrFood) {
          totalPrice += i;
        }
        const money = totalPrice;
        const config = {
          style: "currency",
          currency: "VND",
          maximumFractionDigits: 9,
        };
        const formated = new Intl.NumberFormat("vi-VN", config).format(money);
        return formated;
      }
    },
  },
};
</script>

<style scoped>
.bill-pay {
  background-color: #f2f2f2;
  min-height: 200px;
  width: 30%;
  padding: 20px 20px;
}
.price {
  padding: 20px 0;
}
a {
  color: white;
  text-decoration: none;
  font-size: 20px;
}
.accept-buy {
  background-color: black;
  padding: 18px 63px 17px;
  display: flex;
  justify-content: center;
}
.accept-buy:hover {
  transition: all 0.3s ease 0s;
  background-color: orange;
  color: white;
}
</style>
