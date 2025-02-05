import axios from "axios";
import { refreshToken } from "src/services/api/register";

import Alert from "src/components/ui/Alert";

import { login, logout, getToken } from "src/services/authServices";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const axiosPrivate = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

axiosPrivate.interceptors.request.use(
  (config) => {
    if (!config.headers["Authorization"]) {
      config.headers["Authorization"] = `Bearer ${getToken()}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

axiosPrivate.interceptors.response.use(
  (response) => response,
  async (error) => {
    const prevRequest = error?.config;
    if (error?.response?.status === 401 && !prevRequest?.sent) {
      prevRequest.sent = true;
      try {
        const data = await refreshToken();
        login(data);
        prevRequest.headers["Authorization"] = `Bearer ${data?.accessToken}`;
        return axiosPrivate(prevRequest);
      } catch (err) {
        logout();

        window.location.replace("/login");

        return Promise.reject(err);
      }
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
