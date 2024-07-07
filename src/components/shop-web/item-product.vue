<template>
  <div class="item-product">
    <div class="item d-flex">
      <img
        :src="food.image"
        alt=""
        class="image-food"
      />
      <div class="infor-food">
        <h2>{{food.food_name}}</h2>
        <div class="product-detail-price">
          <span>{{food.price}}</span>
          <span class="old text-cwhite">95,000 VND</span>
        </div>
        <div class="product-detail-list my-10">
          <p class="text-cwhite">
            {{food.food_description}}
          </p>
        </div>
        <v-divider :thickness="3"></v-divider>
        <div class="footer-modal d-flex">
          <div class="number-food">
            <button class="dec qtybutton" @click="minus()">-</button>
            <input
              class="cart-plus-minus-box input-number"
              type="text"
              readonly=""
              :value="valueText"
            />
            <button class="inc qtybutton" @click="pluss()">+</button>
          </div>
          <div class="btn-collect">
            <button class="btn-add"><h3>THÊM</h3></button>
            <div class="lop" @click="addCartFood(food._id)"></div>
          </div>
          <v-icon class="mr-4 change-color" @click="addLoveFood(food._id)">mdi-heart-outline</v-icon>
          <v-icon class="change-color">mdi-swap-horizontal</v-icon>
        </div>
        <div class="categoryLabel">
          <div class="category my-10">Danh mục: <a-tag color="orange" class="size" v-for="item in food.food_list" :key="item">{{item}}</a-tag></div>
          <div class="label">Nhãn: <a-tag color="orange" class="size">{{food.label}}</a-tag></div>
        </div>
      </div>
    </div>
    <div class="describle-food d-flex">
      <h1 class="my-10 text-cwhite">Mô tả chi tiết</h1>

      <p class="text-cwhite text-detail">
     {{food.detail_food}}
      </p>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import {createNamespacedHelpers} from 'vuex'
const {mapState} = createNamespacedHelpers('FoodItem')
export default {
  data() {
    return {
      valueText: 1,
    };
  },
  created(){
    console.log(this.food)
    const _id = this.$route.params.id
    this.$store.dispatch('FoodItem/getDetailFoodItemActions',_id)
  },
   updated() {
    const newId = this.$route.params.id;
    this.$store.dispatch('FoodItem/getDetailFoodItemActions',newId)
  },
  computed:{
    ...mapState({
      food:state => state.food
    })
  },
  methods: {
    pluss() {
      this.valueText += 1;
    },
    minus() {
      if (this.valueText === 1) {
        this.valueText = 1;
      } else {
        this.valueText -= 1;
      }
    },
    async addCartFood(food_id){
      console.log(food_id)
      const payload = {
        food_id:food_id,
        quantity:this.valueText
      }
     const data = await this.$store.dispatch('CartFood/getDataCartActions',payload)
     console.log(data)
     if(data === true){
       const Toast = Swal.mixin({
          toast: true,
          position: "top",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        });

        Toast.fire({
          icon: "success",
          iconColor:"red",
          background:"#FADADD",
          title: "Đã thêm vào giỏ hàng",
        });
     }
     else{
      const Toast = Swal.mixin({
          toast: true,
          position: "top",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        });

        Toast.fire({
          icon: "error",
          iconColor:"orange",
          background:"#FADADD",
          title: "Bạn phải đăng nhập",
        });
     }
    },
      async addLoveFood(food_id) {
      const data = await this.$store.dispatch(
        "LoveFood/getFoodLoveActions",
        food_id
      );
      if (data === true) {
        const Toast = Swal.mixin({
          toast: true,
          position: "top",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        });

        Toast.fire({
          icon: "success",
          iconColor:"red",
          background:"#FADADD",
          title: "Đã thêm vào danh sách yêu thích",
        });
      } else {
         const Toast = Swal.mixin({
          toast: true,
          position: "top",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        });

        Toast.fire({
          icon: "error",
          iconColor:"orange",
          background:"#FADADD",
          title: "Vui lòng đăng nhập",
        });
      }
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@200;400&family=Poppins&display=swap");
.item {
  margin: 0 auto;
  width: 1200px;
  justify-content: space-between;
}
.image-food {
  width: 568px;
  height: 571px;
}
.size{
  font-size: 17px;
}
h2 {
  font-family: "Be Vietnam Pro", sans-serif;
}
.infor-food {
  width: 500px;
}
span {
  font-size: 24px;
  color: #fe5252;
  font-family: "Be Vietnam Pro", sans-serif;
}
.old {
  font-size: 18px;
  margin-left: 20px;
  text-decoration: line-through;
  color: #333;
  font-family: "Be Vietnam Pro", sans-serif;
}
p {
  font-size: 15px;
  line-height: 28px;
  margin: 0;
  color: #333;
  font-family: "Be Vietnam Pro", sans-serif;
}
h1 {
  font-size: 25px;
  line-height: 28px;
  margin: 0;
  color: #333;
  font-family: "Be Vietnam Pro", sans-serif;
}
.number-food {
  display: flex;
  align-items: center;
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
.describle-food {
  flex-direction: column;
  align-items: center;
  width: 1200px;
  margin: 0 auto;
}
.text-detail{
  font-size: 14px;
}
</style>
