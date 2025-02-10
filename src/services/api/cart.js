const addToCartValidation = async ({ axiosPrivate, id, quantity }) => {
  const { data } = await axiosPrivate.post("/cart/addToCart", {
    id,
    quantity,
  });
  return data;
};

export { addToCartValidation };
