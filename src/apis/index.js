import axios from "axios";


const axiosApi = axios.create({
  baseURL: "http://localhost:3000/",
  headers: {
    "content-type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
  },
});
axiosApi.interceptors.request.use(
  function (config) {
    const accessToken = localStorage.getItem("refresh_token");
    config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosApi.interceptors.response.use(
  (response) => {
    // Nếu phản hồi thành công, trả về dữ liệu
    return response;
  },
  (error) => {
    // Nếu có lỗi phản hồi từ server
    if (error.response) {
      console.log(error)
      // Trả về một Promise bị reject với thông báo lỗi
      return error;
    }
    // Nếu không phải lỗi 403, tiếp tục trả về lỗi gốc
    // return Promise.reject(error);
  }
);

export default axiosApi;
