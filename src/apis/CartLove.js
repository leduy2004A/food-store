import axiosApi from "../apis/index";
export const addLove = async (food_id) => {
  const data = {
    food_id,
  };
  return await axiosApi.post("/cart_love/add-love", data);
};
export const getLoveFood = async ()=>{
  return await axiosApi.get('/cart_love/showFoodLove')
}
export const deleteLoveFood = async (food_id)=>{
  return await axiosApi.delete(`/cart_love/delete-love/${food_id}`)
}