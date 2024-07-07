import axiosApi from "../apis/index";
export const createOrder = async (data)=>{
    return await axiosApi.post("/order/create",data)
}
export const getOrder = async ()=>{
    return await axiosApi.get("/order/getOrder")
}