<template>
<div class="register">
<header-in-header-vue :styleCss="styleCss"></header-in-header-vue>
<bread-cum-vue :items="items"></bread-cum-vue>
<div class="login-register-content d-flex justify-center my-10">
    <registerLogin></registerLogin>
</div>
<footerWebVue></footerWebVue>
</div>
</template>

<script>

import headerInHeaderVue from '../main-web/header-in-header.vue'
import breadCumVue from '../shop-web/bread-cum.vue'
import registerLogin from '../register-login/login-register.vue'
import footerWebVue from '../main-web/footer-web.vue'
export default {
    data(){
        return {
              styleCss:{
               padding:'0px 160px' 
            },
            items:[ {
                    title:'Trang chủ',
                    disabled: false,
                    href: '/mainWeb',
                },
                {
                    title:'Đăng Nhập - Đăng Ký',
                    disabled: false,
                }]
        }
    },
    components:{
        headerInHeaderVue,
        breadCumVue,
        registerLogin,
        footerWebVue
    }
};
</script>

<style></style>
