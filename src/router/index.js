import mainWeb from '../components/main-web/main-web.vue'
import mainShop from '../components/shop-web/main-shop.vue'
import forWard from '../components/for-ward.vue'
import loveMain from '../components/love-food/love-main.vue'
import mainStore from '../components/store-food/main-store-food.vue'
import { createRouter,createWebHistory } from 'vue-router'
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
    }
]
const router = createRouter({
    history:createWebHistory(),
    routes
})
export default router