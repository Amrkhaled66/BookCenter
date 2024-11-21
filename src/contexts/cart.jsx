import { createContext, useReducer } from "react";
import { toast } from "react-toastify";

const cartContext = createContext();

const reducer = (state, action) => {
  const updatedCart = [...state];

  if (action.type === "ADD") {
    const updatedItemIndex = state.findIndex(
      (item) => item.id === action.payload.id,
    );

    if (updatedItemIndex > -1) {
      const existingItem = state[updatedItemIndex];
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + action.payload.quantity,
      };

      updatedCart[updatedItemIndex] = updatedItem;
    } else {
      updatedCart.push({
        id: action.payload.id,
        quantity: action.payload.quantity,
      });
    }
    return updatedCart;
  } else if (action.type === "DECREASE") {
    const updatedItemIndex = state.findIndex(
      (item) => item.id === action.payload,
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
    const deletedItemIndex = state.findIndex(
      (item) => item.id === action.payload.id,
    );
    console.log(deletedItemIndex);
    if (deletedItemIndex > -1) {
      updatedCart.splice(deletedItemIndex, 1);
    }
    return updatedCart;
  } else if (action.type === "CLEAR_CART") {
    return [];
  }

  return state; // No matching action; return the original state to prevent unnecessary renders.
};

export default function CartContextProvider({ children }) {
  const notify = () =>
    toast.success("تم اضافة المنتج", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const [cart, dispatch] = useReducer(reducer, []);

  const addToCart = (id, quantity) => {
    notify();
    dispatch({ type: "ADD", payload: { id, quantity } });
  };

  const decreaseCartItem = (id) => {
    dispatch({ type: "DECREASE", payload: { id } });
  };

  const clearItem = (id) => {
    console.log(id);
    dispatch({ type: "CLEAR_ITEM", payload: { id } });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const cartLength =
    cart.length && cart.reduce((total, item) => total + item.quantity, 0);

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
