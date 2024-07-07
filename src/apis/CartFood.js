import axiosApi from "../apis/index";
export const dataCart = async (food_id,quantity)=>{
    const body = {
        food_id,
        quantity
    }
    return await axiosApi.post('/cart_love/add-cart',body)
}
export const viewCart = async () =>{
    return await axiosApi.get('/cart_love/showFoodCart')
}
export const updateCart = async (food_id,quantity)=>{
    const body = {
        food_id,
        quantity
    }
    return await axiosApi.post('/cart_love/updateFoodInCart',body)
}
export const deleteCart = async (food_id)=>{
    return await axiosApi.delete(`/cart_love/delete-cart/${food_id}`)
}