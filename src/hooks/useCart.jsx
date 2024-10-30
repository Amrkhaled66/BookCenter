import { useContext } from "react";

import { cartContext } from "../contexts/cart";

export default function useColors() {
  return useContext(cartContext);
}
