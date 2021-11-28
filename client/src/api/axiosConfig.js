import axios from "axios";
import { toast } from "react-toastify";

// function getToken() {
//   if (localStorage.getItem("accessToken")) {
//     const parseData = JSON.parse(localStorage.getItem("accessToken") || "");
//     return parseData.token;
//   }
//   return "";
// }

const instance = axios.create({
  baseURL: `http://localhost:4500/api/`,

  headers: {
    "Content-Type": "application/json",
    "cache-control": "no-cache",
  },
});

instance.interceptors.request.use(
  async (config) => {
    config.headers = {
      //   Authorization: `Bearer ${getToken()}`,
    };
    return config;
  },
  (error) => {
    return error;
  }
);

instance.interceptors.response.use(
  (response) => {
    if (response.data.message) {
      toast.success(response.data.message);
    }
    return response.data;
  },
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("accessToken");
    }
    if (error.response?.data?.error) {
      toast.error(error.response.data.error);
    } else if (error.message) {
      toast.error(error.message);
    }
    return error;
  }
);

export default instance;
