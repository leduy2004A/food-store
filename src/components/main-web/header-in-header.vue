<template>
  <div class="header-in-header w-100">
    <div class="title-header d-flex w-100" :style="styleCss">
         <p class="title">Tiếng việt
            <v-icon>mdi-menu-down</v-icon>
         </p>
         <p class="slogan">
            <v-icon>mdi-airplane</v-icon>
            Giao hàng nhanh và toàn quốc</p>
    </div>
    <v-divider></v-divider>
    <content-header class="mt-2" :styleCss="styleCss"></content-header>
  </div>
</template>

<script>
import contentHeader from './content-header.vue'
export default {
components:{
    contentHeader
},
props:{
        styleCss:{
            type:Object
        }
    }
}
</script>

<style scoped>
.title-header{
    justify-content: space-between;
    height: 51px;
    align-items: center;
}
</style>