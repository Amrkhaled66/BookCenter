import { useContext } from "react";

import { cartContext } from "../contexts/cart";

import { useMutation } from "@tanstack/react-query";

import { addToCartValidation as AddToCartRequest } from "src/services/api/cart";

import useAxiosPrivate from "./useAxiosPrivate";

import Alert from "src/components/ui/Alert";

export default function useCart() {
  return useContext(cartContext);
}

function useAddToCartValidation() {
  const axiosPrivate = useAxiosPrivate();

  return useMutation({
    mutationFn: ({ id, quantity }) =>
      AddToCartRequest({ axiosPrivate, id, quantity }),
    onSuccess: (data) => {
      const { id, quantity, price } = data.product;
    },
    onError: (error) => {
      const { response } = error;

      if (response.data.message === "Product out of stock") {
        Alert(
          "حدث خطاء",
          `المتوفر في المخزن -${response.data.inStock}- قطعة فقط`,
          "error",
          "حسنا",
        );
      } else if (response.status === 400 || response.status === 404) {
        Alert("خطاء", "برجاء التواصل مع الدعم", "error", "حسنا");
      }
    },
  });
}

export { useAddToCartValidation };
