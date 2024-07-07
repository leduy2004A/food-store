<template>
  <div class="cart-table">
    <div class="table-content">
      <h2 class="title">{{ title }}</h2>
      <v-table>
        <thead>
          <tr>
            <th class="text-center" v-for="item in headerTable" :key="item">
              {{ item }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(i, index) in food" :key="index" class="my-10">
            <td class="text-center">
              <img :src="i.image" alt="" class="image-food" />
            </td>
            <td class="text-center">
              {{ i.food_name }}
            </td>
            <td class="text-center">
              {{ i.price }}
            </td>
            <td class="text-center">
              <div class="footer-modal d-flex duy">
                <div class="number-food d-flex">
                  <button
                    class="dec qtybutton"
                    @click="minus(index, i.food_id)"
                  >
                    -
                  </button>
                  <input
                    class="cart-plus-minus-box input-number"
                    type="text"
                    readonly=""
                    :value="i.item_number"
                  />
                  <button
                    class="inc qtybutton"
                    @click="pluss(index, i.food_id)"
                  >
                    +
                  </button>
                </div>
              </div>
            </td>
            <td class="text-center">
              {{ getPriceNumber(i.price, i.item_number) }}
            </td>
            <td class="text-center">
              <v-icon class="delete-love" @click="deleteFoodInCart(i.food_id)">mdi-alpha-x</v-icon>
            </td>
          </tr>
        </tbody>
      </v-table>
      <div class="btn">
        <div class="btn-continue-buy design-frame">
          <a href="#">Tiếp tục mua sắm</a>
        </div>
        <div class="btn-delete-all design-frame">
          <a href="#">Xóa giỏ hàng</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import Swal from 'sweetalert2'
const { mapState } = createNamespacedHelpers("CartFood");
export default {
  data() {
    return {
      totalPrice: 0,
      title: "Giỏ hàng của bạn",
      headerTable: [
        "Hình ảnh",
        "Tên",
        "Giá",
        "Số lượng",
        "Tổng Phụ",
        "Hành Động",
      ],
      contentTable: [
        {
          hinhanh:
            "https://cdn.tgdd.vn/Files/2021/04/27/1346666/cach-lam-cha-thit-la-lot-thom-nuc-mui-cho-ca-gia-dinh-202206021445168315.jpg",
          ten: "Chả lá lốt",
          gia: "100,000 VND",
          muahang: "1",
          hanhdong: "mdi-close",
          soluong: 1,
        },
        {
          hinhanh:
            "https://cdn.tgdd.vn/Files/2021/04/27/1346666/cach-lam-cha-thit-la-lot-thom-nuc-mui-cho-ca-gia-dinh-202206021445168315.jpg",
          ten: "Chả lá lốt",
          gia: "100,000 VND",
          muahang: "1",
          hanhdong: "mdi-close",
          soluong: 1,
        },
      ],
      valueText: 1,
    };
  },
  created() {
    this.$store.dispatch("CartFood/showCartActions").then(() => {
      this.getTotalPrice(this.food)
    //   console.log(this.food);
    //   const arrFood = this.food.map((item) => {
    //     var formattedAmount = item.price;
    //     var cleanedAmount = formattedAmount.replace(/\./g, "");
    //     var integerValue = parseInt(cleanedAmount, 10);
    //     return integerValue * item.item_number
    //   });
    // for(let i of arrFood)
    //   {
    //     this.totalPrice += i;
    //   }
    });
  },
  computed: {
    ...mapState({
      food: (state) => state.food,
    }),
  },
  methods: {
    async pluss(vitri, food_id) {
      const quantity = (this.food[vitri].item_number += 1);
      const payload = { food_id, quantity, method: true };
      this.$store.dispatch("CartFood/updateCartActions", payload);
    },
    async minus(vitri, food_id) {
      if (this.food[vitri].item_number === 1) {
        this.food[vitri].item_number = 1;
      } else {
        const quantity = (this.food[vitri].item_number -= 1);
        const payload = { food_id, quantity, method: false };
        this.$store.dispatch("CartFood/updateCartActions", payload);
      }
    },
    getPriceNumber(price, itemnumber) {
      var formattedAmount = price;
      var cleanedAmount = formattedAmount.replace(/\./g, "");
      var integerValue = parseInt(cleanedAmount, 10);
      const money = itemnumber * integerValue;
      const config = {
        style: "currency",
        currency: "VND",
        maximumFractionDigits: 9,
      };
      const formated = new Intl.NumberFormat("vi-VN", config).format(money);
      return formated;
    },
    getTotalPrice(food) {
      const arrFood = food.map((item) => {
        var formattedAmount = item.price;
        var cleanedAmount = formattedAmount.replace(/\./g, "");
        var integerValue = parseInt(cleanedAmount, 10);
        return integerValue * item.item_number
      });
    for(let i of arrFood)
      {
        this.totalPrice += i;
      }
      const duy = this.totalPrice
      this.$emit("getprice", duy);
    },
    deleteFoodInCart(food)
  {
    Swal.fire({
  title: 'Bạn có chắc chắn muốn xóa sản phẩm ?',
  text: "Suy nghĩ thật kĩ nào !",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Xóa !'
}).then((result) => {
  if (result.isConfirmed) {
    this.$store.dispatch("CartFood/deleteCartActions",food)
    Swal.fire(
      'Đã xóa!',
      'Chúc bạn mua sắm vui vẻ',
      'success'
    )
  }
})
    
  }
  },
  
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@200;400&family=Poppins&display=swap");
a {
  text-decoration: none;
  color: black;
  font-family: "Be Vietnam Pro", sans-serif;
  font-size: 14px;
}
.btn {
  display: flex;
  justify-content: space-between;
  margin: 30px 0;
}
.btn .design-frame {
  background-color: #f2f2f2;
  padding: 18px 63px 17px;
  border-radius: 30px;
}
.btn .design-frame:hover {
  transition: all 0.3s ease 0s;
  background-color: orange;
  color: white;
}
.duy {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.table-content {
  width: 80%;
  margin: 0 auto;
}
.image-food {
  width: 150px;
  margin: 10px 0;
}
.input-number {
  display: flex;
  border: 1px solid grey;
  width: 78px;
  height: 38px;
  justify-content: center;
  text-align: center;
  margin: 0 10px;
}
.inc,
.dec {
  font-size: 30px;
}
.btn-add {
  background-color: black;
  color: white;
  width: 90px;
  height: 50px;
  margin: 0 12px;
}
.footer-modal {
  align-items: center;
  margin-top: 10px;
}
.btn-collect {
  position: relative;
  display: flex;
  justify-content: center;
}
.lop {
  position: absolute;
  bottom: 0;
  height: 100%;
  width: 0px;
  /* background-color: orange; */
  transition: width 0.5s;
  color: black;
}

.btn-collect:hover .lop {
  background-color: orange;
  width: 90px;
  color: black;
}
.change-color:hover {
  color: orange;
  transition: all 0.5s cubic-bezier(0.65, 0.05, 0.36, 1);
}
.delete-love:hover{
  background-color: orange;
  color: white;
   transition: all 0.5s cubic-bezier(0.65, 0.05, 0.36, 1);
}
</style>
