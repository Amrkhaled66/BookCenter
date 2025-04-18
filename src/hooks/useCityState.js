import { useGetAddress, useGetCityState } from "src/hooks/useAddressMutations";
import { useEffect, useState } from "react";

export const useCityState = (cityName) => {
  const [cityStates, setCityStates] = useState([]);
  const { data: cities, isLoading } = useGetAddress();
  const { mutate } = useGetCityState();

  useEffect(() => {
    if (!cityName) return;

    const city = cities?.find((c) => c.name === cityName);
    if (city) {
      mutate(city._id, {
        onSuccess: (data) => setCityStates(data),
      });
    }
  }, [cities, cityName, mutate]);

  return { cities, cityStates, isLoading };
};
