import { axiosPrivate } from "src/utils/axiosInstance";

const getCities = async ({ axiosPrivate }) => {
  const { data } = await axiosPrivate.get("/city/getCities");
  return data;
};

const getCityStates = async ({ axiosPrivate, cityId }) => {
  const { data } = await axiosPrivate.get(
    `/city/getCityStates?cityId=${cityId}`,
  );
  return data;
};

export { getCities, getCityStates };
