import axios from "axios";
import { refreshToken } from "src/services/api/auth";
import Alert from "src/components/ui/Alert";
import { login, logout, getToken } from "src/services/authServices";
import { clearStoringCart } from "src/services/cartServices";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const axiosPrivate = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

// // 🔹 Request Interceptor - Attach Access Token Automatically
// axiosPrivate.interceptors.request.use(
//   (config) => {
//     if (!config.headers["Authorization"]) {
//       config.headers["Authorization"] = `Bearer ${getToken()}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// // 🔹 Response Interceptor - Handle Token Refresh
// axiosPrivate.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const prevRequest = error?.config;
//     if (error?.response?.status === 401 && !prevRequest?._retry) {
//       prevRequest._retry = true;
//       try {
//         const data = await refreshToken(); // Refresh the token
//         login(data); // Store the new access token
//         prevRequest.headers["Authorization"] = `Bearer ${data?.accessToken}`;
//         return axiosPrivate(prevRequest); // Retry the failed request
//       } catch (err) {
//         logout(); // Clear user session
//         clearStoringCart(); // Clear cart after logout

//         // ✅ Better: Redirect with React Router instead of full reload
//         import("react-router-dom").then(({ useNavigate }) => {
//           const navigate = useNavigate();
//           navigate("/login", { replace: true });
//         });

//         return Promise.reject(err);
//       }
//     }
//     return Promise.reject(error);
//   }
// );

export default axiosInstance;
