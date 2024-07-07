import { addLove, getLoveFood, deleteLoveFood } from "../../apis/CartLove";
import { getDetailFood } from "../../apis/food";
const state = () => {
  return {
    food: [],
    numberLove: 0,
  };
};
const mutations = {
  async getFoodLoveMutations(state, payload) {
    const data = payload.data.result.love_list;
    const arrayData = await Promise.all(
      data.map(async (item) => {
        const dataFood = await getDetailFood(item);
        return dataFood.data.result;
      })
    );
    state.food = arrayData;
    state.numberLove = payload.data.numberLove;
  },
  async getDataFoodLoveMutations(state, payload) {
    if (payload.data[0].list_love === undefined) {
      return false;
    }
    state.food = payload.data[0].list_love;
    for (let i of state.food) {
      const money = i.price;
      const config = {
        style: "currency",
        currency: "VND",
        maximumFractionDigits: 9,
      };
      const formated = new Intl.NumberFormat("vi-VN", config).format(money);
      i.price = formated;
    }
    state.numberLove = payload.data[0].numberLove;
  },
  async deleteFoodLoveMutations(state, payload) {
    for (let i = 0; i < state.food.length; i++) {
      if (state.food[i]._id === payload) {
        state.food.splice(i, 1);
        state.numberLove--;
      }
    }
  },
};
const actions = {
  async getFoodLoveActions(context, payload) {
    const data = await addLove(payload);
    if (data.status === 200) {
      context.commit("getFoodLoveMutations", data);
      return true;
    } else {
      return false;
    }
  },
  async getDataFoodLoveActions(context) {
    const data = await getLoveFood();
    if (data.status !== 200) {
      return false;
    } else {
      if (data.data.length !== 0) {
        context.commit("getDataFoodLoveMutations", data);
      } else {
        return false;
      }
    }
  },
  async deleteFoodLoveActions(context, payload) {
    const data = await deleteLoveFood(payload);
    context.commit("deleteFoodLoveMutations", payload);
    return data;
  },
};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
