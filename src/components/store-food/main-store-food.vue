<template>
  <div class="main-store">
    <headerInHeaderVue :styleCss="styleCss"></headerInHeaderVue>
    <breadCumVue :items="items"></breadCumVue>
    <cartFoodVue class="py-10"></cartFoodVue>
    <footerWebVue></footerWebVue>
  </div>
</template>

<script>
import headerInHeaderVue from '../main-web/header-in-header.vue'
import breadCumVue from '../shop-web/bread-cum.vue'
import cartFoodVue from './cart-food.vue'
import footerWebVue from '../main-web/footer-web.vue'
export default {
    components:{
        headerInHeaderVue,
        breadCumVue,
        cartFoodVue,
        footerWebVue
    },
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
                    title:'Giỏ hàng',
                    disabled: false,
                    // href: '/love-food',
                }
            ],
        }
    }
}
</script>

<style>

</style>