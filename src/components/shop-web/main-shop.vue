<template>
  <div class="main-shop">
    <headerInHeader :styleCss="styleCss"></headerInHeader>
    <breadCum :items="items"></breadCum>
    <main class="main-content">
        <navShop class="nav"></navShop>
        <content-shop class="content"></content-shop>
        <modal-food></modal-food>
    </main>
        <footer>
            <footerWeb></footerWeb>
        </footer>
  </div>
</template>

<script>
import footerWeb from '../main-web/footer-web.vue'
import headerInHeader from '../main-web/header-in-header.vue'
import breadCum from './bread-cum.vue'
import contentShop from './content-shop.vue'
import modalFood from './modal-food.vue'
import navShop from './nav-shop.vue'
export default {
    components:{
        headerInHeader,
        breadCum,
        navShop,
        footerWeb,
        contentShop,
        modalFood
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
                    title:'Sản phẩm',
                    disabled: false,
                    href: '/mainShop',
                }
            ]
        }
    }
}
</script>

<style scoped>
.main-content{
    width: 70%;
    display: flex;
    margin: 0 auto;
    padding: 100px 0;
}
.nav{
    flex: 0;
}
.content{
    flex: 1;
}
</style>