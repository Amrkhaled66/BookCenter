import { useMutation, useQuery } from "@tanstack/react-query";
import { getCities, getCityStates } from "src/services/api/address";
import useAxiosPrivate from "./useAxiosPrivate";

export const useGetAddress = () => {
  const axiosPrivate = useAxiosPrivate();

  return useQuery({
    queryKey: ["cities"],
    queryFn: () => getCities({ axiosPrivate }),
    refetchInterval: false,
  });
};

export const useGetCityState = () => {
  const axiosPrivate = useAxiosPrivate();

  return useMutation({
    mutationFn: (cityId) => getCityStates({ axiosPrivate, cityId }),
  });
};
