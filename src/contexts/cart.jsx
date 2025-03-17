import { createContext, useReducer, useEffect } from "react";

import {
  storeCart,
  clearStoringCart,
  getCart,
} from "src/services/cartServices";

const cartContext = createContext();

import Toast from "src/components/ui/Toast";
const reducer = (state, action) => {
  const updatedCart = [...state];

  if (action.type === "ADD") {
    const updatedItemIndex = state.findIndex(
      (item) => item.productInfo.id === action.payload.productInfo.id,
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
        productInfo: action.payload.productInfo,
        quantity: 1,
      });
    }
    return updatedCart;
  } else if (action.type === "DECREASE") {
    const updatedItemIndex = state.findIndex(
      (item) => item.productInfo.id === action.payload.id,
    );
    if (updatedItemIndex > -1 && state[updatedItemIndex].quantity > 1) {
      const existingItem = state[updatedItemIndex];
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity - action.payload.quantity,
      };

      updatedCart[updatedItemIndex] = updatedItem;
    }
    return updatedCart;
  } else if (action.type === "CLEAR_ITEM") {
    const deletedItemIndex = state.findIndex(
      (item) => item.productInfo.id === action.payload.id,
    );
    if (deletedItemIndex > -1) {
      updatedCart.splice(deletedItemIndex, 1);
    }
    return updatedCart;
  } else if (action.type === "CLEAR_CART") {
    return [];
  } else if (action.type === "MODIFYQUN") {
    const updatedItemIndex = state.findIndex(
      (item) => item.productInfo.id === action.payload.id,
    );

    if (updatedItemIndex === -1) return state;
    const existingItem = state[updatedItemIndex];

    const updatedItem = {
      ...existingItem,
      quantity: action.payload.quantity,
    };

    updatedCart[updatedItemIndex] = updatedItem;

    return updatedCart;
  }

  return state; // No matching action; return the original state to prevent unnecessary renders.
};

export default function CartContextProvider({ children }) {
  const [cart, dispatch] = useReducer(reducer, [], getCart);

  useEffect(() => {
    storeCart(cart);
  }, [cart]);

  const addToCart = ({ productInfo, quantity }) => {
    console.log(productInfo, quantity);
    Toast("تم إضافة المنتج لسلة مشترياتك.", "success", "#eafff0");
    dispatch({
      type: "ADD",
      payload: { productInfo, quantity },
    });
  };

  const decreaseCartItem = (id, quantity) => {
    dispatch({ type: "DECREASE", payload: { id, quantity } });
  };

  const modifyQuantity = (id, quantity) => {
    Toast("تم تعديل الكمية.", "success", "#eafff0");
    dispatch({ type: "MODIFYQUN", payload: { id, quantity } });
  };

  const clearItem = (id) => {
    console.log(id);
    dispatch({ type: "CLEAR_ITEM", payload: { id } });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
    clearStoringCart();
  };

  const calcAllPrice = () => {
    return cart.reduce((total, item) => {
      const mainPrice =
        item.productInfo.discountPrice || item.productInfo.originalPrice;
      return total + mainPrice * item.quantity;
    }, 0);
  };

  const cartLength = cart.reduce((total, item) => total + item.quantity, 0);

  const value = {
    cart,
    addToCart,
    decreaseCartItem,
    clearItem,
    clearCart,
    cartLength,
    modifyQuantity,
    calcAllPrice,
  };

  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
}

export { cartContext };
