import { axiosPrivate } from "src/utils/axiosInstance";

const getProfileInfo = async () => {
  const {data}= await axiosPrivate.get("/user/profile");
  return data;
};

export { getProfileInfo };
