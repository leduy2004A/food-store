import {
  dataCart,
  viewCart,
  updateCart,
  deleteCart,
} from "../../apis/CartFood";
// import { getDetailFood } from "../../apis/food";
const state = () => {
  return {
    food: [],
    numberCart: 0,
  };
};
const mutations = {
  async showCartMutaitions(state, payload) {
    if (payload.status !== 200) {
      return false;
    } else {
      let obj = {};
      let arrFood = [];
      if(payload.data[0] === undefined)
      {
        return false;
      }
      const data = payload.data[0].cart_product.map((item) => {
        return item[0];
      });
      const quantityData = payload.data[0].cart_list.map((item) => {
        return item;
      });
      const arrayQuantity = quantityData[0];

      for (let i in arrayQuantity) {
        if (arrayQuantity[i].food_id === data[i]._id) {
          obj = { ...arrayQuantity[i], ...data[i] };
          arrFood.push(obj);
        }
      }
      state.food = arrFood;
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
      state.numberCart = 0;
      for (let i of state.food) {
        state.numberCart += i.item_number;
      }
      return true;
    }
  },
  async addCartMutaitions(state, payload) {
    state.numberCart = 0;
    for (let i of payload.data) {
      state.numberCart += i.item_number;
    }
  },
  async deleteCartMutaitions(state, payload) {
    console.log(state.food);
    console.log(payload);
    for (let i = 0; i <= state.food.length - 1; i++) {
      if (state.food[i].food_id === payload) {
        console.log(state.food[i]);
        state.numberCart -= state.food[i].item_number;
        state.food.splice(i, 1);
      }
    }
  },
};
const actions = {
  async getDataCartActions(context, payload) {
    const { food_id, quantity } = payload;
    const result = await dataCart(food_id, quantity);
    if (result.status !== 200) {
      return false;
    } else {
      const data = result.data.cart_list;
      const payload = {
        data,
        food_id,
      };
      context.commit("addCartMutaitions", payload);
      return true;
    }
  },
  async showCartActions(context) {
    const data = await viewCart();
    if (data.status !== 200) {
      return false;
    } else {
      context.commit("showCartMutaitions", data);
      return true;
    }
  },
  async updateCartActions(context, payload) {
    const { food_id, quantity, method } = payload;
    const result = await updateCart(food_id, quantity);
    const dataFood = {
      method,
      data: result.data.cart_list,
      food_id,
    };
    context.commit("addCartMutaitions", dataFood);
  },
  async deleteCartActions(context, payload) {
    await deleteCart(payload);
    context.commit("deleteCartMutaitions", payload);
  },
};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
