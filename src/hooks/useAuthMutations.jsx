import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

import {
  login as loginRequest,
  signup as signupRequest,
  refreshToken as refreshRequest,
} from "src/services/api/register";

import { login } from "src/services/authServices";
import Alert from "src/components/ui/Alert";

const useLogin = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: ({ phone, password }) => loginRequest(phone, password),
    onSuccess: (data) => {
      console.log(data);
      login(data);
      navigate("/");
    },
  });
};

const useSignup = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (data) => signupRequest(data),
    onSuccess: () => {
      Alert(
        "تم انشاء الحساب و تسجيل الدخول بنجاح",
        "اهلا بيك يا باندا 🐼",
        "success",
        "حسنا",
      ).then((res) => {
        if (res.isConfirmed) {
          navigate("/login");
        }
      });
    },
  });
};

const useRefreshToken = () => {
  return useMutation({
    mutationFn: () => refreshRequest(),
  });
};

// const useLogout = () => {
//   const { logout } = useAuth();
//   return useMutation({
//     mutationFn: () => logout(),
//   });
// }

export { useLogin, useSignup, useRefreshToken };
