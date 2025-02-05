import { axiosPrivate } from "src/utils/axiosInstance";
import { getToken } from "../authServices";
const addToCartValidation = async ({id, quantity}) => {
  const { data } = await axiosPrivate.post("/cart/addToCart", {
    id,
    quantity,
  });
  return data;
};

export { addToCartValidation };
