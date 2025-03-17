import { isAuth } from "./authServices";

const storeCart = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

const getCart = () => {
  if (!isAuth()) localStorage.removeItem("cart");
  return JSON.parse(localStorage.getItem("cart")) || [];
};

const clearStoringCart = () => {
  localStorage.removeItem("cart");
};

export { storeCart, clearStoringCart, getCart };
