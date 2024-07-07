<template>
  <div class="image-content">
   
 <swiper
    :effect="'fade'"
    :autoplay="{
      delay: 3000,
      disableOnInteraction: false,
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide
      > 
       <div class="img-food">
        <img :src="image_1" alt="" class="image-ads">
        <div class="title-ads scale-up-center">
            <h1 class="title">Thực phẩm thuần chay</h1>
            <router-link to="/mainShop"><button class="btn-buy">Mua hàng ngay</button></router-link>
        </div>
        </div>
      </swiper-slide
    ><swiper-slide
      ><div class="img-food">
        <img :src="image_2" alt="" class="image-ads">
        <div class="title-ads scale-up-center">
            <h1 class="title">100% Thành phần được làm từ tinh bột</h1>
            <router-link to="/mainShop"><button class="btn-buy">Mua hàng ngay</button></router-link>
            
        </div>
        </div></swiper-slide>
  </swiper>

    </div>
    <div class="slogan-web d-flex">
        <div class="content-slogan d-flex align-center justify-center flex-column">
            <img :src="support_5" alt="" class="support-img">
            <img :src="support_8" alt="">
            <p class="text-black">MIỄN PHÍ VẬN CHUYỂN</p>
        </div>
        <div class="content-slogan mau1 cach-item d-flex align-center justify-center flex-column">
             <img :src="support_6" alt="" class="support-img">
            <img :src="support_9" alt="">
            <p class="text-black">CHÍNH SÁCH HOÀN TRẢ TIỀN</p>
        </div>
        <div class="content-slogan mau2 d-flex align-center justify-center flex-column">
             <img :src="support_7" alt="" class="support-img">
            <img :src="support_10" alt="">
            <p class="text-black mt-2">GIẢM GIÁ LÊN ĐẾN 70%</p>
        </div>
    </div>

 
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';

  import 'swiper/css';

  import 'swiper/css/effect-fade';

   import { EffectFade,Autoplay } from 'swiper/modules';

import image_1 from '../../images/pexels-photo-1458694.jpeg'
import image_2 from '../../images/pexels-photo-5677794.jpeg'
import support_8 from '../../images/support-8.png'
import support_9 from '../../images/support-9.png'
import support_10 from '../../images/support-10.png'
import support_5 from '../../images/support-5.png'
import support_6 from '../../images/support-6.png'
import support_7 from '../../images/support-7.png'
export default {
     components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [EffectFade,Autoplay],
      };
    },
    data(){
        return {
            image_1,
            support_8,
            support_9,
            support_10,
            support_5,
            support_6,
            support_7,
            image_2
        }
    }
}
</script>

<style scoped>
.scale-up-center {
	-webkit-animation: scale-up-center 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) 1s both;
	animation: scale-up-center 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) 1s both;
}
@-webkit-keyframes scale-up-center {
  0% {
    -webkit-transform: scale(0.5);
            transform: scale(0.5);
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}
@keyframes scale-up-center {
  0% {
    -webkit-transform: scale(0.5);
            transform: scale(0.5);
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}
.btn-buy{
    color: white;
}
.btn-buy:hover{
    background-color: orange;
}
.img-food{
    width: 100%;
    position: relative;
}
.title-ads{
    width: 700px;
    position: absolute;
    top: 30%;
    right: 20px;
    color: white;
    /* transform: translateY(-50%); */
}
.btn-buy{
    background-color: green;
    width: 200px;
    height: 50px;
}
.title{
    font-size: 80px;
}
.image-ads{
    width: 100%;
    height: 660px;
    object-fit: cover;
}
.content-slogan{
    width: calc(100% / 3);
    height: 112px;
    background-color: #CCFBE9;
    position: relative;
}
.cach-item{
   margin:0 10px;
}
.mau1{
    background-color: #F2FBCC !important;
}
.mau2{
    background-color: #DDFBCC !important;
}
.support-img{
position: absolute;
bottom: 0;
right: 0;
}
</style>