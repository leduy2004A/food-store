<template>
  <div class="main-history">
    <headerInHeaderVue :styleCss="styleCss"></headerInHeaderVue>
    <breadCumVue :items="items"></breadCumVue>
    <div class="history-content">
        <orderHistoryVue></orderHistoryVue>
    </div>
    <footerWebVue></footerWebVue>
  </div>
</template>

<script>
import footerWebVue from '../main-web/footer-web.vue'
import headerInHeaderVue from '../main-web/header-in-header.vue'
import breadCumVue from '../shop-web/bread-cum.vue'
import orderHistoryVue from './order-history.vue'
export default {
    components:{
        headerInHeaderVue,
        breadCumVue,
        footerWebVue,
        orderHistoryVue
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
                    title:'Đơn hàng của bạn',
                    disabled: false,
                    href: '/checkout',
                }
            ],
        }
          
    },
}
</script>

<style scoped>
.main-history .history-content{
    padding: 50px 0;
    width:80%;
    margin: 0 auto;
}
</style>