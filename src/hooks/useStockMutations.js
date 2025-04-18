import { useQuery } from "@tanstack/react-query";

import { checkAndEditCart } from "src/services/api/stock";

const useCheckCart = (cart) => {
  return useQuery({
    queryKey: ["cart", JSON.stringify(cart)],
    queryFn: checkAndEditCart,
    cacheTime: 0,
  });
};

export { useCheckCart };
