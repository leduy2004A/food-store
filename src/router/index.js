import mainWeb from '../components/main-web/main-web.vue'
import mainShop from '../components/shop-web/main-shop.vue'
import forWard from '../components/for-ward.vue'
import loveMain from '../components/love-food/love-main.vue'
import mainStore from '../components/store-food/main-store-food.vue'
import loginRegister from '../components/register-login/register-form.vue'
import checkoutMain from '../components/checkout-food/checkout-main.vue'
import { createRouter,createWebHistory } from 'vue-router'
import detailFood from '../components/shop-web/detail-product.vue'
import completeNotice from '../components/checkout-food/complete-notice'
import mainHistory from '../components/history-food/main-history'
const routes = [
    {
        path:'/mainWeb',
        component:mainWeb
    },
    {
        path:'/mainShop',
        component:mainShop
    },
    {
        path:'/',
        component:forWard
    },
    {
        path:'/love-food',
        component:loveMain
    },
    {
        path:'/cart',
        component:mainStore
    },
    {
        path:'/login-register',
        component:loginRegister
    },
    {
        path:'/detail-production/:id',
        component:detailFood
    },
    {
        path:'/checkout',
        component:checkoutMain
    },
    {
        path:'/complete',
        component:completeNotice
    },
    {
        path:'/order-history',
        component:mainHistory
    }
]
const router = createRouter({
    history:createWebHistory(),
    routes
})
export default router