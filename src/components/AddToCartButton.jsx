import ScaleIn from "src/components/ui/ScaleIn ";
import useCart from "src/hooks/useCart";

import { FaCartPlus } from "react-icons/fa";

import { motion } from "framer-motion";
export default function AddToCartButton({
  productId,
  quantity,
  className,
  price,
  ...props
}) {
  const { cart, addToCart } = useCart();

  const productIndex = cart.findIndex((item) => item.id === productId);
  return (
    <motion.button
      onClick={() => addToCart(productId, quantity, price)}
      className={className}
      {...props}
    >
      أضف إلي السلة
      {productIndex > -1 ? (
        <ScaleIn key={cart[productIndex].quantity}>
          {cart[productIndex].quantity}
        </ScaleIn>
      ) : (
        <FaCartPlus />
      )}
    </motion.button>
  );
}
