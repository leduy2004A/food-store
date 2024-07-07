<template>
  <div class="checkout">
    <headerInHeaderVue :styleCss="styleCss"></headerInHeaderVue>
    <breadCumVue :items="items"></breadCumVue>
    <div class="content-checkout d-flex">
        <receiverInformationVue class="receiver" ref="receiverInformationVue"></receiverInformationVue>
        <foodInforVue class="foodInfor" @clickbuy="duyne()"></foodInforVue>
    </div>
    <footerWebVue></footerWebVue>
  </div>
</template>

<script>
import footerWebVue from '../main-web/footer-web.vue'
import headerInHeaderVue from '../main-web/header-in-header.vue'
import breadCumVue from '../shop-web/bread-cum.vue'
import receiverInformationVue from './receiver-information.vue'
import foodInforVue from './food-infor.vue'
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
                    title:'Thanh toán',
                    disabled: false,
                    href: '/checkout',
                }
            ],
        }
          
    },
components:{
    headerInHeaderVue,
    breadCumVue,
    receiverInformationVue,
    footerWebVue,
    foodInforVue
},
methods:{
   duyne(){
   this.$refs.receiverInformationVue.getInfor()
   }
}
}
</script>

<style scoped>
.checkout .content-checkout{
    justify-content: space-between;
    width: 80%;
    margin: 0 auto;
    padding: 100px 0;
}
.content-checkout .receiver{
    width: 50%;
}
.content-checkout .foodInfor{
    width: 40%;
}
</style>
