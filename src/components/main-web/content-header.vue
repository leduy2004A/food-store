<template>
  <div class="content-header">
    <div class="content-header d-flex align-center" :style="styleCss">
            <img :src="logo" alt="" class="logo">
            <ul class="title-header d-flex">
                <li class="list-text"><a href="/mainWeb" class="text-header">Trang chủ</a></li>
                <li class="list-text"><a href="" class="text-header">Giới thiệu</a></li>
                <li class="list-text"><a href="/mainShop" class="text-header">Sản phẩm</a></li>
                <li class="list-text"><a href="" class="text-header">Tin tức</a></li>
                <li class="list-text"><a href="" class="text-header">Liên hệ</a></li>
            </ul>
            <div class="option-header d-flex ">
                <v-icon class="icon-header">mdi-magnify</v-icon>
                <v-icon class="icon-header">mdi-account-circle-outline</v-icon>
                <v-badge class="icon-header" :content="1">
                   <v-icon>mdi-swap-horizontal</v-icon> 
                </v-badge>
                <v-badge class="icon-header" :content="1">
                   
                  <router-link to="/love-food"><v-icon>mdi-heart-outline</v-icon></router-link>
                </v-badge>
                <v-badge class="icon-header" :content="1">
                    <router-link to="/cart"> <v-icon>mdi-bag-personal-outline</v-icon></router-link>
                </v-badge>
                
            </div>
        </div>
  </div>
</template>

<script>
import logo from '../../images/GSlogo.png'
export default {
 data(){
        return {
            logo
        }
    },
    props:{
        styleCss:{
            type:Object
        }
    }
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@100&family=Poppins&display=swap');

.logo{
    width: 200px;
}
ul{
    list-style: none;
    align-items: center;
}
li{
    margin-right: 30px;
}
.text-header{
text-decoration: none;
color: black;
font-family: 'Be Vietnam Pro', sans-serif;
font-weight: 400;
}
.content-header{
    width: 100%;
    justify-content: space-between;
    font-weight: bold;
    font-size: 15px;
}
.icon-header{
    margin-right: 20px;
}
.header{
    position: unset;
}
.text-header:hover{
    color: orange;
}
</style>