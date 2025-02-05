import ScaleIn from "src/components/ui/ScaleIn ";
import useCart from "src/hooks/useCart";

import { FaCartPlus } from "react-icons/fa";

import { motion } from "framer-motion";

import Alert from "src/components/ui/Alert";

import { isAuth } from "src/services/authServices";

import { useAddToCartValidation } from "src/hooks/useCart";

export default function AddToCartButton({
  productId,
  quantity,
  className,
  price,
  ...props
}) {
  const { cart, addToCart } = useCart();

  const productIndex = cart.findIndex((item) => item.id === productId);

  const mutation = useAddToCartValidation();

  const quantityInCart = productIndex > -1 ? cart[productIndex].quantity : 0;

  const handleClick = () => {
    if (!isAuth()) {
      Alert(
        "يجب عليك تسجيل الدخول اولًا",
        "يرجى تسجيل الدخول لإضافة المنتج إلى السلة",
        "warning",
        "تسجيل الدخول",
      ).then((res) => {
        if (res.isConfirmed) {
          window.location.href = "/login";
        }
      });
      return;
    }

    mutation.mutate(
      { id: productId, quantity: quantityInCart + 1 },
      {
        onSuccess: () => addToCart(productId, quantity, price),
      },
    );
  };
  return (
    <motion.button onClick={handleClick} className={className} {...props}>
      {mutation.isPending ? (
        "يتم الاضافة"
      ) : (
        <>
          أضف إلي السلة
          {productIndex > -1 ? (
            <ScaleIn key={quantityInCart}>{quantityInCart}</ScaleIn>
          ) : (
            <FaCartPlus />
          )}
        </>
      )}
    </motion.button>
  );
}
