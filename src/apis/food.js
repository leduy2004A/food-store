import axiosApi from "../apis/index";
export const dataFood = async (limit, page) => {
  return await axiosApi.get(`api/food/vers1/all-food?limit=${limit}&page=${page}`);
};
export const getDetailFood = async (id)=>{
  return await axiosApi.get(`api/food/vers1/food-detail/${id}`)

}