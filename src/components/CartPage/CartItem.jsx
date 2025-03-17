// hooks
import { useState } from "react";
import useCart, { useAddToCartValidation } from "src/hooks/useCart";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// services
import currencyFormatter from "src/utils/currencyFormatter";

// icons
import { MdDeleteOutline } from "react-icons/md";

const itemVariants = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5, delay: 0.5 },
};

export default function CartItem({ productInfo, quantity }) {
  const { clearItem, modifyQuantity } = useCart();
  const { id, image, originalPrice, discountPrice, publisher, title } =
    productInfo;

  const mainPrice = discountPrice || originalPrice;


  return (
    <motion.li variants={itemVariants} key={id} className="relative">
      <div className="flex flex-row gap-6 border-b-2 border-gray-300 py-7">
        {/* Product Image */}
        <div className="w-[40%] sm:w-[8%]">
          <Link to={`/product/${id}`} className="flex gap-4">
            <img
              src={`${image}`}
              className="h-full w-full shadow-sm shadow-black"
              alt="productImage"
            />
          </Link>
        </div>

        {/* Product Info */}
        <div className="flex w-full flex-col items-start gap-y-4 md:flex-row">
          <div className="w-full space-y-3 sm:w-[75%]">
            <p className="w-full text-lg font-semibold sm:w-[70%] sm:text-base">
              {title}
            </p>
            <p className="text-xs font-medium text-black/60 sm:text-sm">
              {publisher}
            </p>
          </div>

          {/* Price, Quantity, and Total */}
          <div className="flex w-full flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
            {/* Price */}
            <div className="text-lg text-center sm:text-base">
              <p>{currencyFormatter(mainPrice)}</p>
              {discountPrice > 0 && (
                <p className="text-red-600 line-through">
                  {currencyFormatter(originalPrice)}
                </p>
              )}
            </div>

            {/* Quantity Selector */}
            <QuantitySelector
              id={id}
              quantity={quantity}
              onModify={modifyQuantity}
            />

            {/* Total Price */}
            <p className="hidden text-sm sm:block sm:text-base">
              {currencyFormatter(quantity * mainPrice)}
            </p>
          </div>
        </div>
      </div>

      {/* Delete Button */}
      <button
        onClick={() => clearItem(id)}
        className="absolute left-0 top-0 text-red-600 hover:animate-shake"
      >
        <MdDeleteOutline size={20} />
      </button>
    </motion.li>
  );
}

function QuantitySelector({ id, quantity, onModify }) {
  const [currQuantity, setCurrQuantity] = useState(quantity);
  const { mutate, isPending } = useAddToCartValidation();

  const handleClick = () => {
    if (quantity === currQuantity) return;

    mutate(
      { id, quantity: currQuantity },
      {
        onSuccess: () => onModify(id, currQuantity),
        onError: () => setCurrQuantity(quantity),
      },
    );
  };

  return (
    <div className="flex w-full items-center justify-start sm:justify-center">
      <input
        dir="rtl"
        type="number"
        value={currQuantity}
        min={1}
        disabled={isPending}
        onChange={(e) => setCurrQuantity(Number(e.target.value))}
        className="w-10 rounded-s-lg border border-gray-400 px-2 py-2 text-center font-cairo text-xs font-bold transition-all duration-300 focus:border-main-text--color focus:outline-none sm:w-20 sm:text-base"
      />
      <button
        onClick={handleClick}
        disabled={isPending}
        className="rounded-e-lg bg-main-text--color px-2 py-2 text-xs text-white transition-all duration-300 hover:brightness-75 sm:text-base"
      >
        تحديث الكمية
      </button>
    </div>
  );
}
