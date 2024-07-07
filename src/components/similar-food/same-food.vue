<template>
  <div class="same-food">
    <div class="title mb-10"><h2>Sản phẩm liên quan</h2></div>
    <div class="main">
      <swiper
        :slidesPerView="4"
        :spaceBetween="50"
        :slidesPerGroup="4"
        :modules="modules"
        
        class="mySwiper"
        
      >
        <swiper-slide v-for="item in datafood.result" :key="item">
          <productShopVue :food="item"></productShopVue>
        </swiper-slide>
<!-- @click="scrollToTop()" -->
        <!-- <swiper-slide>Slide 2</swiper-slide><swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide><swiper-slide>Slide 5</swiper-slide>
    <swiper-slide>Slide 6</swiper-slide><swiper-slide>Slide 7</swiper-slide>
    <swiper-slide>Slide 8</swiper-slide><swiper-slide>Slide 9</swiper-slide> -->
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import productShopVue from "../shop-web/product-shop.vue";
import { useStore } from "vuex";
import { ref } from 'vue';
// const { mapState } = createNamespacedHelpers("FoodShop");
export default {
  setup() {
    const datafood = ref([])
    const store = useStore();
    store.dispatch("FoodShop/getFoodShop", 1).then(()=>{
      datafood.value = store.state.FoodShop.food
    });
    return {
      datafood
    }
  },
  data() {
    return {
      food: [
      {
        _id: "6511b9ca340de95c7646f8d8",
        admin_id: "651004cc16b04b413bbbda1b",
        food_name: "Chả cá",
        food_description: "Được làm hoàn toàn từ thực vật",
        detail_food: "Rất ngon",
        price: "100.255 vnd",
        image:
          "http://res.cloudinary.com/dlzfanxoh/image/upload/v1696093292/food-store/tAN_vG-rEHHacV6PQRxWE.jpg",
        food_list: ["Món chay mặn", "All"],
        label: "Món chay mặn",
        quantity: 10,
        created_at: "2023-09-25T16:48:10.869+00:00",
        updated_at: "2023-09-25T16:48:10.869+00:00",
      },
        {
        _id: "6511b9ca340de95c7646f8d8",
        admin_id: "651004cc16b04b413bbbda1b",
        food_name: "Chả cá",
        food_description: "Được làm hoàn toàn từ thực vật",
        detail_food: "Rất ngon",
        price: "100.255 vnd",
        image:
          "http://res.cloudinary.com/dlzfanxoh/image/upload/v1696093292/food-store/tAN_vG-rEHHacV6PQRxWE.jpg",
        food_list: ["Món chay mặn", "All"],
        label: "Món chay mặn",
        quantity: 10,
        created_at: "2023-09-25T16:48:10.869+00:00",
        updated_at: "2023-09-25T16:48:10.869+00:00",
      },
        {
        _id: "6511b9ca340de95c7646f8d8",
        admin_id: "651004cc16b04b413bbbda1b",
        food_name: "Chả cá",
        food_description: "Được làm hoàn toàn từ thực vật",
        detail_food: "Rất ngon",
        price: "100.255 vnd",
        image:
          "http://res.cloudinary.com/dlzfanxoh/image/upload/v1696093292/food-store/tAN_vG-rEHHacV6PQRxWE.jpg",
        food_list: ["Món chay mặn", "All"],
        label: "Món chay mặn",
        quantity: 10,
        created_at: "2023-09-25T16:48:10.869+00:00",
        updated_at: "2023-09-25T16:48:10.869+00:00",
      },
        {
        _id: "6511b9ca340de95c7646f8d8",
        admin_id: "651004cc16b04b413bbbda1b",
        food_name: "Chả cá",
        food_description: "Được làm hoàn toàn từ thực vật",
        detail_food: "Rất ngon",
        price: "100.255 vnd",
        image:
          "http://res.cloudinary.com/dlzfanxoh/image/upload/v1696093292/food-store/tAN_vG-rEHHacV6PQRxWE.jpg",
        food_list: ["Món chay mặn", "All"],
        label: "Món chay mặn",
        quantity: 10,
        created_at: "2023-09-25T16:48:10.869+00:00",
        updated_at: "2023-09-25T16:48:10.869+00:00",
      },
        {
        _id: "6511b9ca340de95c7646f8d8",
        admin_id: "651004cc16b04b413bbbda1b",
        food_name: "Chả cá",
        food_description: "Được làm hoàn toàn từ thực vật",
        detail_food: "Rất ngon",
        price: "100.255 vnd",
        image:
          "http://res.cloudinary.com/dlzfanxoh/image/upload/v1696093292/food-store/tAN_vG-rEHHacV6PQRxWE.jpg",
        food_list: ["Món chay mặn", "All"],
        label: "Món chay mặn",
        quantity: 10,
        created_at: "2023-09-25T16:48:10.869+00:00",
        updated_at: "2023-09-25T16:48:10.869+00:00",
      },
        {
        _id: "6511b9ca340de95c7646f8d8",
        admin_id: "651004cc16b04b413bbbda1b",
        food_name: "Chả cá",
        food_description: "Được làm hoàn toàn từ thực vật",
        detail_food: "Rất ngon",
        price: "100.255 vnd",
        image:
          "http://res.cloudinary.com/dlzfanxoh/image/upload/v1696093292/food-store/tAN_vG-rEHHacV6PQRxWE.jpg",
        food_list: ["Món chay mặn", "All"],
        label: "Món chay mặn",
        quantity: 10,
        created_at: "2023-09-25T16:48:10.869+00:00",
        updated_at: "2023-09-25T16:48:10.869+00:00",
      },
        {
        _id: "6511b9ca340de95c7646f8d8",
        admin_id: "651004cc16b04b413bbbda1b",
        food_name: "Chả cá",
        food_description: "Được làm hoàn toàn từ thực vật",
        detail_food: "Rất ngon",
        price: "100.255 vnd",
        image:
          "http://res.cloudinary.com/dlzfanxoh/image/upload/v1696093292/food-store/tAN_vG-rEHHacV6PQRxWE.jpg",
        food_list: ["Món chay mặn", "All"],
        label: "Món chay mặn",
        quantity: 10,
        created_at: "2023-09-25T16:48:10.869+00:00",
        updated_at: "2023-09-25T16:48:10.869+00:00",
      },
        {
        _id: "6511b9ca340de95c7646f8d8",
        admin_id: "651004cc16b04b413bbbda1b",
        food_name: "Chả cá",
        food_description: "Được làm hoàn toàn từ thực vật",
        detail_food: "Rất ngon",
        price: "100.255 vnd",
        image:
          "http://res.cloudinary.com/dlzfanxoh/image/upload/v1696093292/food-store/tAN_vG-rEHHacV6PQRxWE.jpg",
        food_list: ["Món chay mặn", "All"],
        label: "Món chay mặn",
        quantity: 10,
        created_at: "2023-09-25T16:48:10.869+00:00",
        updated_at: "2023-09-25T16:48:10.869+00:00",
      },
    ],
    };
  },
  // computed: {
  //   ...mapState({
  //     food: (state) => state.food,
  //   }),
  // },
  // mounted(){
  //   this.getDatafood()
  // },
  components: {
    Swiper,
    SwiperSlide,
    productShopVue,
  },
  methods: {
    // openDetailFood(){
    //   window.location.reload()
    // }
    // getDatafood(){
    //   console.log(this.$store.state.FoodShop.food)
    // },
      scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
.same-food {
  width: 1200px;
  margin: 0 auto;
}
.title {
  display: flex;
  justify-content: center;
}
.title h2 {
  position: relative;
  display: inline-block;
  font-weight: bold;
}
.title h2::before {
  position: absolute;
  top: 17px;
  left: -100px;
  width: 80px;
  height: 2px;
  content: "";
  background-color: #000;
}
.title h2::after {
  position: absolute;
  top: 17px;
  right: -100px;
  width: 80px;
  height: 2px;
  content: "";
  background-color: #000;
}
.main {
  display: flex;
  justify-content: center;
}
</style>
