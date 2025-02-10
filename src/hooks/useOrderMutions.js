import { useMutation } from "@tanstack/react-query";

import { addOrder as addOrderRequest } from "src/services/api/order";
import useAxiosPrivate from "./useAxiosPrivate";

const useAddOrder = () => {
  const axiosPrivate = useAxiosPrivate();
  return useMutation({
    mutationFn: (data) => addOrderRequest({ axiosPrivate, data }),
  });
};

export { useAddOrder };
