import { useMutation } from "@tanstack/react-query";
import { createInvoice } from "src/services/api/order";
import useAxiosPrivate from "./useAxiosPrivate";

const useCreateInvoice = () => {
  const axiosPrivate = useAxiosPrivate();

  return useMutation({
    mutationFn: (invoiceData) => createInvoice({ axiosPrivate, invoiceData }),
    onSuccess: (data) => console.log(data),
  });
};

export { useCreateInvoice };
