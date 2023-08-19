<template>
  <div class="footer-web">
    <div class="cot1">
        <img :src="logo_footer" alt="" class="anh-footer">
        <p class="ads text-center">Poly Food là nhà hàng Thuần chay và Cung cấp thực phẩm chay</p>
    </div>
    <div class="cot2">
        <p class="cot2-text">Cửa hàng</p>
        <p>Về chúng tôi</p>
        <p>LIên hệ</p>
        <p>Tin tức</p>
        <p>Hỗ trợ</p>
    </div>
    <div class="cot3">
        <p class="cot2-text">Chính sách mua hàng</p>
         <p>Điều khoản</p>
        <p>Chính sách và bảo mật</p>
        <p class="cot2-text">Theo dõi chúng tôi</p>
        <ul class="list-icon">
            <li class="icon">
                <v-icon>mdi-facebook</v-icon>
            </li>
            <li class="icon">
                <v-icon>mdi-youtube</v-icon>
            </li>
            <li class="icon">
                <v-icon>mdi-twitter</v-icon>
            </li>
            <li class="icon">
                <v-icon>mdi-instagram</v-icon>
            </li>
        </ul>
    </div>
     <div class="cot3">
        <p class="cot2-text">Chính sách mua hàng</p>
         <p>Điều khoản</p>
        <p>Chính sách và bảo mật</p>
        <p class="cot2-text">Theo dõi chúng tôi</p>
        <ul class="list-icon">
            <li class="icon">
                <v-icon>mdi-facebook</v-icon>
            </li>
            <li class="icon">
                <v-icon>mdi-youtube</v-icon>
            </li>
            <li class="icon">
                <v-icon>mdi-twitter</v-icon>
            </li>
            <li class="icon">
                <v-icon>mdi-instagram</v-icon>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
import logo_footer from '../../images/logo-footer.png'
export default {
    data(){
        return {
            logo_footer
        }
    }
}
</script>

<style scoped>
.footer-web{
    background: url(https://res.cloudinary.com/do9rcgv5s/image/upload/v1692144184/qgbkcsydg2vwqcosx4ns.png) no-repeat top;
    background-size: cover;
    position: relative;
    height: 337px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 200px;
}
.cot1{
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.cot2{
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.anh-footer{
    width: 200px;
}
.ads{
    color: white;
}
p{
    line-height: 30px;
    color: white;
}
.cot2-text{
    font-weight: 600;
}
.cot3{
    flex: 1;
     display: flex;
    flex-direction: column;
    align-items: center;
}
.icon{
    color: white;
}
ul{
    list-style: none;
    display: flex;
}
</style>