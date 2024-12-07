// hooks
import { useState } from "react";
import useCart from "src/hooks/useCart";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// services
import currencyFormatter from "src/utils/currencyFormatter";
import { useGetProductById } from "src/services/productsServices";

// icons
import { MdDeleteOutline } from "react-icons/md";

import Loader from "../ui/icons/Loader";
const itemVariants = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5, delay: 0.5 },
};

export default function CartItem({ id, quantity }) {
  const { data, isLoading, isError } = useGetProductById(id);
  const { addToCart, decreaseCartItem, clearItem, modifyQuantity } = useCart();

  if (isLoading)
    return (
      <div className="flex items-center justify-center gap-x-3 text-center font-cairo font-bold">
        يتم التحميل الان <Loader />
      </div>
    );

  if (isError)
    return (
      <div className="flex items-center justify-center font-cairo font-bold tracking-wider">
        حدث خطأ في تحميل المنتج
        <Link to="/contact" className="text-second-color underline">
          برجاء التواصل مع الدعم
        </Link>
      </div>
    );

  const { name, imageUrl, publisher, price, discountedPrice } = data;

  const mainPrice = price || discountedPrice;

  return (
    <motion.li variants={itemVariants} key={id} className="relative">
      <div className="flex w-full flex-col justify-between gap-y-10 border-b-2 border-gray-300 py-7 lg:flex-row">
        <div className="flex w-full gap-x-4 lg:w-1/2">
          <img
            src={`${import.meta.env.VITE_API_URL}/${imageUrl}`}
            className="h-full w-[14%] shadow-sm shadow-black"
            alt=""
          />
          <div className="w-full space-y-3">
            <p className="w-full text-sm font-semibold sm:w-2/3 sm:text-base">
              {name}
            </p>
            <p className="text-[10px] font-medium text-black/60 sm:text-sm">
              {publisher}
            </p>
          </div>
        </div>
        <div className="flex w-full items-center justify-between lg:w-1/2">
          <div className="text-sm sm:text-base">
            <p>{currencyFormatter(mainPrice)}</p>
            {discountedPrice && (
              <p className="text-red-600 line-through">
                {currencyFormatter(price)}
              </p>
            )}
          </div>
          <div>
            <QuantitySelector
              id={id}
              quantity={quantity}
              onDecrease={decreaseCartItem}
              onAdd={addToCart}
              onModify={modifyQuantity}
            />
          </div>
          <p className="text-sm sm:text-base">
            {currencyFormatter(quantity * mainPrice)}
          </p>
        </div>
      </div>
      <button
        onClick={() => clearItem(id)}
        className="hover: absolute left-0 top-0 text-red-600 hover:animate-shake"
      >
        <MdDeleteOutline size={20} />
      </button>
    </motion.li>
  );
}

function QuantitySelector({ id, quantity, onModify }) {
  const [currQuantity, setCurrQuantity] = useState(quantity);

  return (
    <div className="flex w-full items-center justify-center">
      <input
        dir="rtl"
        onChange={(e) => setCurrQuantity(Number(e.target.value))}
        className="flex w-10 items-center rounded-s-lg border-[1px] border-gray-400 px-2 py-2 text-center font-cairo text-xs font-bold transition-all duration-300 focus-within:border-main-text--color focus:outline-none sm:w-20 sm:text-base"
        type="number"
        defaultValue={quantity}
        min={1}
      />
      <button
        className={`${`rounded-e-lg`} bg-main-text--color px-2 py-2 text-xs text-white transition-all duration-300 hover:brightness-75 sm:text-base`}
        onClick={() => {
          if (quantity === currQuantity) return;
          onModify(id, currQuantity);
        }}
      >
        تحديث الكمية
      </button>
    </div>
  );
}

// function QuantitySelector({ id, quantity, onAdd, onDecrease }) {
//   const [currQuantity, setCurrQuantity] = useState(quantity);

//   const QuantityBtn = ({ children, border, ...props }) => {
//     return (
//       <button
//         className={`${`rounded-${border}-3xl`} bg-main-text--color px-2 py-2 text-white transition-all duration-300 hover:brightness-75`}
//         {...props}
//       >
//         {children}
//       </button>
//     );
//   };

//   return (
//     <div className="flex w-full items-center justify-center">
//       <QuantityBtn
//         border="s"
//         onClick={() => {
//           // const qun = currQuantity === quantity ? 1 : currQuantity;
//           onDecrease(id, 1);
//         }}
//       >
//         -
//       </QuantityBtn>
//       {/* <label>الكمية : </label> */}
//       <input
//         value={quantity}
//         dir="rtl"
//         onChange={(e) => setCurrQuantity(Number(e.target.value))}
//         className="no-arrows flex w-20 items-center border-[1px] border-gray-200 px-2 py-2 text-center font-mainFontRegular font-bold transition-all duration-300 focus-within:border-main-text--color focus:outline-none"
//         type="number"
//         defaultValue={quantity}
//       />
//       <QuantityBtn
//         border="e"
//         onClick={() => {
//           // const qun = currQuantity === quantity ? 1 : currQuantity;
//           onAdd(id, 1);
//         }}
//       >
//         +
//       </QuantityBtn>
//     </div>
//   );
// }
