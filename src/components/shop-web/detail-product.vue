<template>
  <div class="detail-food">
    <headerInHeaderVue :styleCss="styleCss"></headerInHeaderVue>
    <bread-cum-vue :items="items"></bread-cum-vue>
    <div class="main-item py-16">
       <itemProductVue></itemProductVue> 
       <sameFoodVue class="mt-10" :key="childData"></sameFoodVue>
    </div>
    <footer-web-vue></footer-web-vue>
  </div>
</template>

<script>
import footerWebVue from '../main-web/footer-web.vue'
import headerInHeaderVue from '../main-web/header-in-header.vue'
import sameFoodVue from '../similar-food/same-food.vue'
import breadCumVue from './bread-cum.vue'
import itemProductVue from './item-product.vue'
export default {
    components:{
        footerWebVue,
        headerInHeaderVue,
        breadCumVue,
        itemProductVue,
        sameFoodVue
    },
    data(){
        return{
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
                    title:'Chi tiết sản phẩm',
                    disabled: false,
                    href: '/detail-production',
                }
            ],
            childData:[]
        }
    },
    methods:{
       fetchINitData(){
        let duy = ['1','2']
        //fetch from server then
         this.childdata = duy;
         //has some values
       }
    },
    mounted(){
     this.fetchINitData();
     }
    
}
</script>

<style>

</style>