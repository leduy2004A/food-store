import axiosApi from "../apis/index";
export const register = async (payload)=>{
    return await axiosApi.post('/api/vers1/register',payload)
}
export const login = async (payload) =>{
    return await axiosApi.post('/api/vers1/login',payload)
}
export const refreshToken = async (refresh_token) =>{
    return await axiosApi.post('/api/vers1/refresh-token',{refresh_token})
}
export const logout = async (refresh_token) =>{
    return await axiosApi.post('/api/vers1/logout',{refresh_token})
}
export const loginWithGoogle = async ()=>{
    return await axiosApi.get('/auth/google')
}