import { dataFood } from "../../apis/food";
import {dataSearch} from "../../apis/SearchFood";
const state = () => {
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
  };
};
const mutations = {
  setFoodShop(state, payload) {
    state.food = payload;
    console.log(state.food);
    for (let i of state.food.result) {
      const money = i.price;
      const config = {
        style: "currency",
        currency: "VND",
        maximumFractionDigits: 9,
      };
      const formated = new Intl.NumberFormat("vi-VN", config).format(money);
      i.price = formated;
    }
  },
};
const actions = {
  async getFoodShop(context, payload) {
    const data = await dataFood(9, payload);
    context.commit("setFoodShop", data.data);
  },
  async getDataSearchFoodShop(context,payload)
  {

    const data = await dataSearch(payload.dataText,9,payload.pageNumber)
    context.commit("setFoodShop", data.data);
    console.log(data)
    console.log(context)
    console.log(payload.pageNumber)
  }
};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
