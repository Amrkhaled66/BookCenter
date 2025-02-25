
const storeCart = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

const getCart = () => {
  return JSON.parse(localStorage.getItem("cart")) || [];
};

const clearStoringCart = () => {
  localStorage.removeItem("cart");
};

export { storeCart, clearStoringCart,getCart };
