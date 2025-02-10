const addOrder = async ({ axiosPrivate, data }) => {
  const { data: response } = await axiosPrivate.post("/order/add", data);
  return response;
};

export { addOrder };
