import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

import {
  login as loginRequest,
  signup as signupRequest,
  refreshToken as refreshRequest,
  logout as logoutRequest,
} from "src/services/api/auth";

import Alert from "src/components/ui/Alert";

import useAuth from "./useAuth";

const useLogin = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  return useMutation({
    mutationFn: ({ phone, password }) => loginRequest(phone, password),
    onSuccess: (data) => {
      login(data);
      navigate("/");
    },
  });
};

const useSignup = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  return useMutation({
    mutationFn: (data) => signupRequest(data),
    onSuccess: (data) => {
      login(data.response);
      Alert(
        "تم انشاء الحساب و تسجيل الدخول بنجاح",
        "اهلا بيك يا باندا 🐼",
        "success",
        "حسنا",
      ).then((res) => {
        if (res.isConfirmed) {
          navigate("/");
        }
      });
    },
  });
};

const useRefreshToken = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: () => refreshRequest(),

    onError: () => {
      navigate("/login");
    },
  });
};

const useLogout = () => {
  const { logout } = useAuth();

  return useMutation({
    mutationFn: logoutRequest,
    onSuccess: () => {
      ("useMutationlogout");
      logout();
    },
    onError: () => {
      logout();
    },
  });
};

export { useLogin, useSignup, useRefreshToken, useLogout };
