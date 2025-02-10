const storeCart = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

const clearStoringCart = () => {
  ("clearStoringCart");
  localStorage.removeItem("cart");
};

export { storeCart, clearStoringCart };
