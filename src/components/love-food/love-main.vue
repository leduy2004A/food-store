<template>
  <div class="love-main">
        <headerInHeader :styleCss="styleCss"></headerInHeader>
        <breadCumVue :items="items"></breadCumVue>
        <loveFoodDetailVue class="py-10"></loveFoodDetailVue>
        <footerWebVue></footerWebVue>
  </div>
</template>

<script>
import footerWebVue from '../main-web/footer-web.vue'
import headerInHeader from '../main-web/header-in-header.vue'
import breadCumVue from '../shop-web/bread-cum.vue'
import loveFoodDetailVue from './love-food-detail.vue'
export default {
    data(){
        return {
             styleCss:{
               padding:'0px 160px' 
            },
              items:[
                {
                    title:'Trang chủ',
                    disabled: false,
                    href: '/mainWeb',
                },
                {
                    title:'Yêu thích',
                    disabled: false,
                    href: '/love-food',
                }
            ],
        }
    },
components:{
    headerInHeader,
    breadCumVue,
    loveFoodDetailVue,
    footerWebVue
}
}
</script>

<style>

</style>