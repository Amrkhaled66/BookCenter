const getUserProfile = async(axiosAdmin, phone) => {
  const { data } = await axiosAdmin.get(`/user/getUserProfile?phone=${phone}`);
  return data;
};

export { getUserProfile };
