import { isAuth } from "./authServices";

const storeCart = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

const getCart = () => {
  if (!isAuth()) localStorage.removeItem("cart");

  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
};


const clearStoringCart = () => {
  localStorage.removeItem("cart");
};

export { storeCart, clearStoringCart, getCart };
