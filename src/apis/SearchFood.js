import axiosApi from '@/apis/index'
export const dataSearch = async (params,limit,page) => {
   return await axiosApi.get(`/search/food-name/${params}?limit=${limit}&page=${page}`)
}