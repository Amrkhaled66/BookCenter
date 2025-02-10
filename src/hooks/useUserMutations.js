import { useQuery, useMutation } from "@tanstack/react-query";
import {
  getUserOrders as getUserOrdersRequest,
  updateProfile as updateProfileRequest,
} from "src/services/api/user";
import useAxiosPrivate from "./useAxiosPrivate";

const useGetOrders = () => {
  const axiosPrivate = useAxiosPrivate();
  return useQuery({
    queryKey: ["orders"],
    queryFn: () => getUserOrdersRequest(axiosPrivate),
  });
};

const useUpdateProfile = () => {
  return useMutation({
    mutationFn: (data) => updateProfileRequest(data),
  });
};

export { useGetOrders, useUpdateProfile };
