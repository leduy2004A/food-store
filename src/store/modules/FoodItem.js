import {getDetailFood} from '../../apis/food'
const state = ()=>{
    return {
       food: [
        {
          _id: "6511b9ca340de95c7646f8d8",
          admin_id: "651004cc16b04b413bbbda1b",
          food_name: "Chả cá",
          food_description: "Được làm hoàn toàn từ thực vật",
          detail_food: "Rất ngon",
          price: "100.255 vnd",
          image:
            "http://res.cloudinary.com/dlzfanxoh/image/upload/v1696093292/food-store/tAN_vG-rEHHacV6PQRxWE.jpg",
          food_list: ["Món chay mặn", "All"],
          label: "Món chay mặn",
          quantity: 10,
          created_at: "2023-09-25T16:48:10.869+00:00",
          updated_at: "2023-09-25T16:48:10.869+00:00",
        },
      ], 
    }
    
}
const mutations = {
    getDetailFoodItem(state,payload){
        state.food = payload.data.result
        const money = state.food.price;
        const config = {
          style: "currency",
          currency: "VND",
          maximumFractionDigits: 9,
        };
        const formated = new Intl.NumberFormat("vi-VN", config).format(money);
        state.food.price = formated;
    }
}
const actions={
    async getDetailFoodItemActions(context,payload){
        const data = await getDetailFood(payload)
        context.commit('getDetailFoodItem',data)
        
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}