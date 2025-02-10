import { useEffect, useCallback } from "react";
import { refreshToken } from "src/services/api/auth";
import { useNavigate } from "react-router-dom";
import Alert from "src/components/ui/Alert";
import { getToken } from "src/services/authServices";

import axios from "axios";

import useAuth from "./useAuth";
import { useLogout } from "./useAuthMutations";

// Create a single axios instance outside the hook ✅
const axiosPrivate = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

// Function for showing session end modal
function EndedSessionModal() {
  return Alert(
    "انتهت جلسة تسجيل الدخول",
    "برجاء تسجيل الدخول مرة أخرى",
    "warning",
    "حسنا",
  );
}

export default function useAxiosPrivate() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const logoutMutate = useLogout();

  // Ensure session end handler is stable ✅
  const handleSessionEnd = () => {
    ("handleSessionEnd");
    logoutMutate.mutate(null, {
      onSuccess: () => {
        navigate("/login", { replace: true });
        EndedSessionModal();
      },
      onError: () => {
        ("Logout failed");
      },
    });
  };

  useEffect(() => {
    // Request Interceptor ✅
    const requestIntercept = axiosPrivate.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${getToken()}`;
        }
        return config;
      },
      (error) => Promise.reject(error),
    );

    // Response Interceptor ✅
    const responseIntercept = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config;

        // Ensure prevRequest exists before modifying it ✅
        if (error?.response?.status === 401) {
          prevRequest.sent = true; // Mark the request as retried
          try {
            const data = await refreshToken();
            login(data);
            prevRequest.headers["Authorization"] =
              `Bearer ${data?.accessToken}`;
            return axiosPrivate(prevRequest);
          } catch (err) {
            ("refresh token failed");
            err;
            handleSessionEnd();
            return Promise.reject(err);
          }
        }
        return Promise.reject(error);
      },
    );

    return () => {
      axiosPrivate.interceptors.request.eject(requestIntercept);
      axiosPrivate.interceptors.response.eject(responseIntercept);
    };
  }, [handleSessionEnd]); // ✅ Only re-run when session handling logic changes

  return axiosPrivate;
}
