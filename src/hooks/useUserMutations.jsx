import { useQuery } from "@tanstack/react-query";

const useUserDataMutation = () => {

    i
  return useQuery({
    mutationKey: ["profile"],
    mutationFn: getProfileInfo,
    onSuccess: (data) => {
      console.log(data, "fetched");
      setUserData(data);
    },
  });
};
