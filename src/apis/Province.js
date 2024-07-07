import axios from "axios";
export const getProvince = async ()=>{
    return await axios.get("https://vapi.vnappmob.com/api/province/")
}
export const getDistrict = async (code)=>{
    return await axios.get(`https://vapi.vnappmob.com/api/province/district/${code}`)
}
export const getWard = async (code)=>{
    return await axios.get(`https://vapi.vnappmob.com/api/province/ward/${code}`)
}