<template>
  <div class="image-content">
    <div class="img-food">
        <img :src="image_1" alt="" class="image-ads">
    </div>
    <div class="slogan-web d-flex">
        <div class="content-slogan d-flex align-center justify-center flex-column">
            <img :src="support_5" alt="" class="support-img">
            <img :src="support_8" alt="">
            <p>MIỄN PHÍ VẬN CHUYỂN</p>
        </div>
        <div class="content-slogan mau1 cach-item d-flex align-center justify-center flex-column">
             <img :src="support_6" alt="" class="support-img">
            <img :src="support_9" alt="">
            <p>CHÍNH SÁCH HOÀN TRẢ TIỀN</p>
        </div>
        <div class="content-slogan mau2 d-flex align-center justify-center flex-column">
             <img :src="support_7" alt="" class="support-img">
            <img :src="support_10" alt="">
            <p>GIẢM GIÁ LÊN ĐẾN 70%</p>
        </div>
    </div>
  </div>
</template>

<script>
import image_1 from '../../images/pexels-photo-1458694.jpeg'
import support_8 from '../../images/support-8.png'
import support_9 from '../../images/support-9.png'
import support_10 from '../../images/support-10.png'
import support_5 from '../../images/support-5.png'
import support_6 from '../../images/support-6.png'
import support_7 from '../../images/support-7.png'
export default {
    data(){
        return {
            image_1,
            support_8,
            support_9,
            support_10,
            support_5,
            support_6,
            support_7
        }
    }
}
</script>

<style scoped>
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