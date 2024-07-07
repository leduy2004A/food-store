<template>
  <div class="feedback">
     <div class="feedback-content">
    <swiper
    :loop="true"
    :spaceBetween="30"
    :centeredSlides="true"
    :autoplay="{
      delay: 3000,
      disableOnInteraction: false,
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide v-for="item in 2" :key="item">
     
          <div class="content-main">
            <div class="feedback">
              <v-avatar :image="guy1" size="90" class="text-center"></v-avatar>
            <p class="my-8 text-cblack">
Hiếm có nhà hàng chay nào lại quan tâm tới khách hàng như Poly Food, nhân viên tư vấn số lượng đồ ăn hợp lý, trước khi đóng order hỏi khách có bị dị ứng với thành phần nào không. Thực sự rất ấn tượng về chất lượng phục vụ cũng như đồ ăn của các bạn. Chắc chắn sẽ quay lại vào lần gần nhất.</p>
            <v-icon class="icon">mdi-clipboard-text</v-icon>
            <div class="name-feedback"><h2>Lê Duy</h2></div>
            <div class="role"><h2>Khách hàng</h2></div>
            </div>
            
          </div>
      
    </swiper-slide>
   
  </swiper>
  </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import { Autoplay } from 'swiper/modules';
  import guy1 from '../../images/guy1.jpg'
export default {
  data(){
    return {
        guy1
    }
  },
    components:{
        Swiper, SwiperSlide
    },
    setup() {
      return {
        modules: [Autoplay],
      };
    },
}
</script>

<style scoped>
.feedback-content{
  height: 526px;
  background-color: #F7F7F7;
  padding: 100px 0;
}
.content-main{
  width: 70%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  text-align: center;
  justify-content: center;
}
p{
  line-height: 30px;
  
}
.icon{
  font-size: 50px;
  color: #575757;
}
h2{
  color: #575757;
}
</style>