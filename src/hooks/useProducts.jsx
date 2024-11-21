import { useContext } from "react";

import { productsContext } from "src/contexts/products";

export default function useProducts() {
  return useContext(productsContext);
}
