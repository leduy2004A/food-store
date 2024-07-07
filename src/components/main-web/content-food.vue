<template>
  <div class="content-food" v-if="foodHot">
    <p class="title-product text-center">SẢN PHẨM BÁN CHẠY</p>
    <swiper
      :loop="true"
      :slidesPerView="3"
      :spaceBetween="10"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: false,
      }"
      :breakpoints="{
        '500': {
          slidesPerView: 4,
          spaceBetween: 50,
        },
        '550': {
          slidesPerView: 4,
          spaceBetween: 50,
        },
        '640': {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        '768': {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        '950': {
          slidesPerView: 4,
          spaceBetween: 50,
        },
        '1000': {
          slidesPerView: 4,
          spaceBetween: 50,
        },
        '1024': {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="item in foodHot.result" :key="item">
        <v-avatar size="330">
          <v-img cover :src="item.image"></v-img>
        </v-avatar>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers("Food");

// import required modules

export default {
  data(){
    return {
      foodHot:JSON.parse(localStorage.getItem("foodhot"))
    }
  },
  created() {
    if(!this.foodHot)
    {
         this.$store.dispatch("Food/getAllFoodActions").then(()=>{
      console.log(this.food)
      const dataFood = JSON.stringify(this.food)
      localStorage.setItem("foodhot",dataFood)
    window.location.reload()
    });
      
    }
    this.$store.dispatch("Food/getAllFoodActions").then(()=>{
      console.log(this.food)
      const dataFood = JSON.stringify(this.food)
      localStorage.setItem("foodhot",dataFood)
    
    });
   
    // this.loader()

  },
  computed: {
    ...mapState({
      food: (state) => state.food,
    }),
  },
  methods: {
    loader() {
      let loader = this.$loading.show({
        // Optional parameters
        container: this.fullPage ? null : this.$refs.formContainer,
        lockScroll: true,
        canCancel: true,
        loader: "dots",
        color: "blue",
        onCancel: this.onCancel,
      });
      // simulate AJAX
      setTimeout(() => {
        loader.hide();
      }, 2000);
    },
    onCancel() {
      console.log("User cancelled the loader.");
    },
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay],
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro&family=Poppins&display=swap");

.title-product {
  font-family: "Be Vietnam Pro", sans-serif;
  font-size: 35px;
  font-weight: bold;
  margin: 20px;
}
</style>
