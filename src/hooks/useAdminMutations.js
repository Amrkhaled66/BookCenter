import { useMutation } from "@tanstack/react-query";
import useAxiosAdmin from "./useAxiosAdmin";

import { getUserProfile as getUserProfileRequest } from "src/services/api/admin";

const useGetUserProfile = () => {
  const axiosAdmin = useAxiosAdmin();
  return useMutation({
    mutationFn: (phone) => getUserProfileRequest(axiosAdmin, phone),
    onSuccess: (data) => console.log(data),
  });
};

export { useGetUserProfile };
