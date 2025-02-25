import CartItem from "src/components/CartPage/CartItem";

import useCart from "src/hooks/useCart";

import { motion } from "framer-motion";

const menuVariants = {
  animate: {
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.09,
    },
  },
};

const CartItemsHeader = () => {
  return (
    <div className="hidden w-full justify-between border-b-2 border-gray-200 py-3 md:flex">
      <div className="w-1/2">المنتج</div>
      <div className="flex w-1/2 justify-between">
        <p>السعر</p>
        <p>الكمية</p>
        <p>الإجمالي</p>
      </div>
    </div>
  );
};

export default function CartList() {
  const { cart } = useCart();

  return (
    <div dir="rtl" className="w-full space-y-6 py-3">
      {/* Cart Header */}
      <CartItemsHeader />

      {/* Cart Items */}
      <motion.ul
        initial="initial"
        animate="animate"
        exit="exit"
        variants={menuVariants}
        className="w-full space-y-6"
      >
        {cart.map((item) => (
          <CartItem
            quantity={item.quantity}
            productInfo={item.productInfo}
            key={item.productInfo.id}
          />
        ))}
      </motion.ul>
    </div>
  );
}
