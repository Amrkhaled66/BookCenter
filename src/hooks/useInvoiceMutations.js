import { useMutation } from "@tanstack/react-query";
import { createInvoice } from "src/services/api/order";
import useAxiosPrivate from "./useAxiosPrivate";

import { clearStoringCart } from "src/services/cartServices";
import Alert from "src/components/ui/Alert";

import { getUser, setUser } from "src/services/authServices";

import { useNavigate } from "react-router-dom";
const useCreateInvoice = () => {
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (invoiceData) => createInvoice({ axiosPrivate, invoiceData }),
    onSuccess: (data) => {
      clearStoringCart();
      navigate("/");
      let user = getUser();

      user = {
        ...user,
        ...data.userData,
      };
      setUser(user);

      window.location.href = data?.invoice;
    },
    onError: () => {
      Alert("حدث خطاء", "برجاء التواصل مع الدعم", "error", "حسنا");
    },
  });
};

export { useCreateInvoice };
