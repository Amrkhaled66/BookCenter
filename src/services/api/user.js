const getProfileInfo = async (axiosPrivate) => {
  const { data } = await axiosPrivate.get("/user/profile");
  return data;
};

const getUserOrders = async (axiosPrivate) => {
  const data = await axiosPrivate.get("/user/orders");
  data;
  return data;
};

const updateProfile = async ({ axiosPrivate, data }) => {
  const { data: response } = await axiosPrivate.patch("/user/updateProfile", data);
  return response;
};

export { getProfileInfo, getUserOrders, updateProfile };
