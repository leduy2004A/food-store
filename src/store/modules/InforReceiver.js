import {getOrder} from "../../apis/OrderFood"
const state = () => {
  return {
    Food:[]
  };
};
const mutations = {
  async getOrderHistoryMutations(state,payload){
    state.food = payload
    console.log(state.food)
  }
} 
const actions = {
 async getOrderHistoryActions(context){
  const data = await getOrder()
  console.log(data)
  context.commit("getOrderHistoryMutations",data.data)
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
};
