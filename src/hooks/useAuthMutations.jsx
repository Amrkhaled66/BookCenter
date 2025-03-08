import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import useAxiosAdmin from "./useAxiosAdmin";

import {
  login as loginRequest,
  signup as signupRequest,
  logout as logoutRequest,
  adminLogin as adminLoginRequest,
  loginAsUser,
} from "src/services/api/auth";

import Alert from "src/components/ui/Alert";

import useAuth from "./useAuth";
import useAdminContext from "./useAdminContext";

import { logoutAdmin } from "src/services/authServices";

import { ADMIN_PATH } from "src/services/defaultSettings";

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

const useLogout = () => {
  const { logout } = useAuth();

  return useMutation({
    mutationFn: () => logoutRequest(),
    onSuccess: () => {
      logout();
    },
    onError: () => {
      logout();
    },
  });
};

const useAdminLogin = () => {
  const navigate = useNavigate();
  const { adminLogin } = useAdminContext();

  return useMutation({
    mutationFn: ({ email, password }) => adminLoginRequest(email, password),
    onSuccess: (data) => {
      adminLogin(data);
      navigate(`/${ADMIN_PATH}/panel`);
    },
  });
};

const useAdminLogout = () => {
  const { logoutAdmin } = useAdminContext();
  return useMutation({
    mutationFn: () => logoutRequest("admin"),
    onSuccess: () => {
      logoutAdmin();
    },
    onError: () => {
      logoutAdmin();
    },
  });
};

const useLoginAsUser = () => {
  const axiosAdmin = useAxiosAdmin();
  return useMutation({
    mutationFn: (phone) => loginAsUser(axiosAdmin,phone),
  });
};

export {
  useLogin,
  useSignup,
  useLogout,
  useAdminLogout,
  useLoginAsUser,
  useAdminLogin,
};
