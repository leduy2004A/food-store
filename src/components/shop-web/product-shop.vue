<template>
  <div class="product-main">
    <div class="image distance">
      <img
        :src="food.image"
        alt=""
        class="image-product"
        @click="showDetail(food)"
      />
      <div class="list-option d-flex">
        <div class="heart" @click="addLoveFood(food._id)">
          <v-icon>mdi-heart-outline</v-icon>
        </div>
        <div class="add-cart" @click="addCartFood(food._id)">
          <v-icon>mdi-cart-outline</v-icon>
        </div>
        <div class="eye" @click="openModal()">
          <v-icon>mdi-eye-outline</v-icon>
        </div>
      </div>
    </div>
    <div class="text-product">
      <h3 class="text-center mb-2">{{ food.food_name }}</h3>
      <p class="text-center mb-2">{{ food.price }}- <del>100,000 VND</del></p>
      <v-icon
        v-for="item in 5"
        :key="item"
        class="text-center"
        style="color: orange"
        >mdi-star</v-icon
      >
    </div>
  </div>
</template>

<script>
// import {createNamespacedHelpers} from 'vuex'
// const {mapState} = createNamespacedHelpers('LoveFood')
import Swal from "sweetalert2";
export default {
  props: {
    food: {
      type: Object,
    },
  },
  methods: {
    openModal() {
      this.$emit("clickOpen", this.food);
    },
    showDetail(food) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      this.$router.push(`/detail-production/${food._id}`);
      
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
    async addCartFood(food_id){
      console.log(food_id)
      const payload = {
        food_id:food_id,
        quantity:1
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
    }
  },
};
</script>

<style scoped>
.product-main {
  width: 100%;
}
.image-product {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.image {
  position: relative;
  width: 100%;
  height: 200px;
}
.text-product {
  text-align: center;
}
.cach {
  margin: 0 40px;
}
.heart {
  height: 10%;
}
.list-option {
  position: absolute;
  bottom: 0;
  height: 20%;
  width: 100%;
}
.heart {
  display: flex;
  width: 20%;
  height: 100%;
  background-color: orange;
  justify-content: center;
  align-items: center;
  color: white;
  transition: all 0.5s ease;
  display: none;
}
.add-cart {
  display: flex;
  width: 60%;
  height: 100%;
  background-color: orange;
  justify-content: center;
  align-items: center;
  color: white;
  border-right: 1px solid white;
  border-left: 1px solid white;
  transition: all 0.5s ease;
  display: none;
}
.eye {
  display: flex;
  width: 20%;
  height: 100%;
  background-color: orange;
  justify-content: center;
  align-items: center;
  color: white;
  transition: 1s;
  transform: rotateX(-60deg);
  display: none;
}
.product-main:hover .add-cart {
  display: flex;
}
.product-main:hover .eye {
  display: flex;
  transform: none;
}
.product-main:hover .heart {
  display: flex;
}
.eye:hover {
  background-color: black;
  width: 200px;
}
.heart:hover {
  background-color: black;
  width: 200px;
}
.add-cart:hover {
  background-color: black;
  width: 200px;
}
.distance{
  margin-bottom: 10px;
}
</style>
