import { useContext } from "react";

import { cartContext } from "../contexts/cart";

import { useMutation } from "@tanstack/react-query";

import { addToCartValidation } from "src/services/api/cart";

import Alert from "src/components/ui/Alert";

export default function useCart() {
  return useContext(cartContext);
}

function useAddToCartValidation() {
  return useMutation({
    mutationFn: addToCartValidation,
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
      } else if (response.status === 400) {
        Alert("خطاء", "برجاء التواصل مع الدعم", "error", "حسنا");
      } else if (response.status === 404) {
        Alert("خطاء", "برجاء التواصل مع الدعم", "error", "حسنا");
      }
    },
  });
}

export { useAddToCartValidation };
