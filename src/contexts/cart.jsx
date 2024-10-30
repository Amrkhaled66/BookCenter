import { createContext, useReducer } from "react";
const cartContext = createContext();

const reducer = (state, action) => {
  const updatedCart = [...state];

  if (action.type === "ADD") {
    const updatedItemIndex = state.findIndex(
      (item) => item.productId === action.payload.productId,
    );

    if (updatedItemIndex > -1) {
      const existingItem = state[updatedItemIndex];
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };

      updatedCart[updatedItemIndex] = updatedItem;
    } else {
      updatedCart.push({
        ...action.payload,
        quantity: 1,
      });
    }
    return updatedCart;
  } else if (action.type === "DECREASE") {
    const updatedItemIndex = state.findIndex(
      (item) => item.productId === action.payload,
    );
    if (updatedItemIndex > -1 && state[updatedItemIndex].quantity > 1) {
      const existingItem = state[updatedItemIndex];
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity - 1,
      };

      updatedCart[updatedItemIndex] = updatedItem;
    }
    return updatedCart;
  } else if (action.type === "CLEAR_ITEM") {
    const updatedItemIndex = state.findIndex(
      (item) => item.productId === action.payload,
    );
    if (updatedItemIndex > -1) {
      updatedCart.splice(updatedItemIndex, 1);
    }
    return updatedCart;
  } else if (action.type === "CLEAR_CART") {
    return [];
  }

  return state; // No matching action; return the original state to prevent unnecessary renders.
};

export default function CartContextProvider({ children }) {
  const [cart, dispatch] = useReducer(reducer, []);

  const addToCart = (item) => {
    console.log(item);
    dispatch({ type: "ADD", payload: item });
  };

  const decreaseCartItem = (id) => {
    dispatch({ type: "DECREASE", payload: id });
  };

  const clearItem = (id) => {
    dispatch({ type: "CLEAR_ITEM", payload: id });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const cartLength =
    cart.length && cart.reduce((total, item) => total + item.quantity,0);

  const value = {
    cart,
    addToCart,
    decreaseCartItem,
    clearItem,
    clearCart,
    cartLength,
  };

  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
}

export { cartContext };
