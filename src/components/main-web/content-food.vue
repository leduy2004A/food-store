<template>
  <div class="content-food">
    <p class="title-product text-center">SẢN PHẨM BÁN CHẠY</p>
   <swiper
    :slidesPerView="3"
    :spaceBetween="10"
    :autoplay="{
      delay: 3000,
      disableOnInteraction: false,
    }"
    :breakpoints="{
      '640': {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      '768': {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      '1024': {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide v-for="item in 10" :key="item">
         <v-avatar size="350">
        <v-img cover src="https://marymy.vn/wp-content/uploads/2020/08/accnhi.jpg"></v-img>
    </v-avatar>
    </swiper-slide>
  </swiper>
  </div>
</template>

<script>
 import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';
import { Autoplay } from 'swiper/modules';



  // import required modules

export default {
  components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
          modules: [Autoplay]
      };
    },
  }
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro&family=Poppins&display=swap');

.title-product{
    font-family: 'Be Vietnam Pro', sans-serif;
    font-size: 35px;
    font-weight: bold;
    margin-top: 20px;
}
</style>