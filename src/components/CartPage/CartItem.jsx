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
  const { clearItem, modifyQuantity, addToCart, decreaseCartItem } = useCart();
  const { id, image, originalPrice, discountPrice, publisher, title } =
    productInfo;

  const mainPrice = discountPrice || originalPrice;


  return (
    <motion.li variants={itemVariants} key={id} className="relative">
      <div className="flex flex-row gap-3 lg:gap-6 bg-white drop-shadow-lg  rounded-xl md:drop-shadow-none md:rounded-none  border-b-2 border-gray-300 p-3 md:px-0 md:py-7 ">
        {/* Product Image */}
        <div className="w-[40%] sm:w-[8%]">
          <Link to={`/product/${id}`} className="flex gap-4">
            <img
              src={`${image}`}
              className="h-full w-full rounded-xl shadow-sm shadow-black"
              alt="productImage"
            />
          </Link>
        </div>

        {/* Product Info */}
        <div className="flex w-full flex-col items-start justify-between md:flex-row">
          <div className="w-full space-y-3 sm:w-[75%]">
            <p className="w-full text-sm font-semibold sm:w-[70%] sm:text-base">
              {title}
            </p>
            <p className="text-xs font-medium text-black/60 sm:text-sm">
              {publisher}
            </p>
          </div>

          {/* Price, Quantity, and Total */}
          <div className="flex w-full  items-start justify-between gap-4 flex-row-reverse md:flex-row sm:items-center">
            {/* Price */}
            <div className="text-lg font-semibold text-center sm:text-base">
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
        className="absolute left-2 md:left-0 top-2 md:top-0 text-red-600 hover:animate-shake"
      >
        <MdDeleteOutline size={20} />
      </button>
    </motion.li>
  );
}


import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import Loader from "../ui/icons/Loader";
function QuantitySelector({ id, quantity, onModify }) {
  const [currQuantity, setCurrQuantity] = useState(quantity);
  const [inputValue, setInputValue] = useState(quantity.toString());
  const { mutate, isPending } = useAddToCartValidation();


  const handleAdd = () => {
    const newQuantity = currQuantity + 1;
    mutate(
      { id, quantity: newQuantity },
      {
        onSuccess: () => {
          onModify(id, newQuantity);
          setCurrQuantity(newQuantity);
          setInputValue(newQuantity.toString());
        },
        onError: () => {
          setInputValue(quantity.toString());
          setCurrQuantity(quantity);
        },
      },
    );
  }

  const handleDecrease = () => {
    if (currQuantity === 1) return;
    const newQuantity = currQuantity - 1;

    mutate(
      { id, quantity: newQuantity },
      {
        onSuccess: () => {
          onModify(id, newQuantity);
          setCurrQuantity(newQuantity);
          setInputValue(newQuantity.toString());
        },
        onError: () => {
          setInputValue(quantity.toString());
          setCurrQuantity(quantity);
        },
      },
    )
  };

  return (
    <div className="flex rounded-xl border-2 border-main-color w-fit items-center justify-start sm:justify-center">
      <button onClick={handleAdd} disabled={isPending} className=" disabled:cursor-not-allowed  px-2 lg:px-3 ">

        {isPending ? <Loader width={15} heigh={15} /> : <FaPlus />}
      </button>
      <input
        type="number"
        value={inputValue}
        disabled
        min={1}
        className="   bg-main-color text-white  no-arrows    p-2 max-w-10 text-center font-cairo text-xs font-bold transition-all duration-300 focus:border-main-text--color focus:outline-none  sm:text-base"
      />
      <button disabled={currQuantity == 1 || isPending} onClick={handleDecrease} className=" disabled:cursor-not-allowed px-2 lg:px-3 ">

        {isPending ? <Loader width={15} heigh={15} /> : <FiMinus />}</button>

    </div>
  );
}