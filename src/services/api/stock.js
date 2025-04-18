import axiosInstance from "src/utils/axiosInstance";

const checkAndEditCart = async () => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  const { data } = await axiosInstance.post("/stock/check-and-edit-cart", cart);
  return data;
};

export { checkAndEditCart };
