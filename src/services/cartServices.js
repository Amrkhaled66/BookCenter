const storeCart = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const clearStoringCart = () => {
    localStorage.setItem("cart", JSON.stringify([]));
};
  
export {
    storeCart,
    clearStoringCart
}