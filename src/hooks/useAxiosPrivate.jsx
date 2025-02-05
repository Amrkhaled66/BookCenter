// import { axiosPrivate } from "src/utils/axiosInstance";
// import { useEffect } from "react";
// import { refreshToken } from "src/services/api/register";

// import { useNavigate } from "react-router-dom";

// import Alert from "src/components/ui/Alert";

// import { login, logout, getToken } from "src/services/authServices";
// // eslint-disable-next-line react-refresh/only-export-components
// function EndedSessionModal() {
//   return Alert(
//     "انتهت جلست تسجيل الدخول",
//     "برجاء تسجيل الدخول مرة اخري",
//     "warning",
//     "حسنا",
//   );
// }

// export default function useAxiosPrivate() {
//   const navigate = useNavigate();
//   useEffect(() => {
//     console.log("useAxiosPrivate");
//     const requestIntercept = axiosPrivate.interceptors.request.use(
//       (config) => {
//         // Check if the Authorization header exists; if not, add it
//         if (!config.headers["Authorization"]) {
//           config.headers["Authorization"] = `Bearer ${getToken()}`;
//         }
//         return config;
//       },
//       (error) => Promise.reject(error),
//     );

//     const responseIntercept = axiosPrivate.interceptors.response.use(
//       (response) => response, // Returning the response if no error
//       async (error) => {
//         const prevRequest = error?.config;

//         // Only attempt to refresh the token if the status is 401 (Unauthorized) and the request wasn't previously sent
//         if (error?.response?.status === 401 && !prevRequest?.sent) {
//           prevRequest.sent = true;

//           try {
//             // Attempt to refresh the token
//             const data = await refreshToken();
//             login(data);
//             const newAccessToken = data?.accessToken;
//             prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;

//             // Retry the failed request with the new token
//             return axiosPrivate(prevRequest);
//           } catch (err) {
//             logout();
//             EndedSessionModal();
//             window.location.href = "/login";
//             // If refreshing the token fails, reject the error
//             return Promise.reject(err); // Pass the error to the next handler
//           }
//         }

//         // In case of any other error, propagate it
//         return Promise.reject(error);
//       },
//     );

//     // Cleanup function: Eject interceptors when the component is unmounted or when dependencies change
//     return () => {
//       axiosPrivate.interceptors.request.eject(requestIntercept);
//       axiosPrivate.interceptors.response.eject(responseIntercept);
//     };
//   }, []);

//   return axiosPrivate; // Remove refreshToken from the dependency array if it's stable
// }
