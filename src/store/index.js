import {createStore} from 'vuex'
import Food from './modules/Food'
import FoodShop from './modules/FoodShop'
import FoodItem from './modules/FoodItem'
import LoveFood from './modules/LoveFood'
import CartFood from './modules/CartFood'
import InforReceiver from './modules/InforReceiver'
const store = createStore({
    modules:{
        Food:Food,
        FoodShop:FoodShop,
        FoodItem:FoodItem,
        LoveFood:LoveFood,
        CartFood:CartFood,
        InforReceiver:InforReceiver
    }
})
export default store