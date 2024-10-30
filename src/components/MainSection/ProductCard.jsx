import { FaCartPlus } from "react-icons/fa";
import { motion } from "framer-motion";

import useCart from "src/hooks/useCart";

import currencyFormatter from "src/utils/currencyFormatter";
export default function ProductCard({
  title,
  image,
  originalPrice,
  discountedPrice,
  item,
}) {
  const { addToCart } = useCart();
  return (
    <li className="flex w-full flex-col items-center justify-between gap-1 overflow-hidden rounded-lg font-mainFontRegular text-main-text--color shadow-xl shadow-[#9aaabb]">
      {/* <div className="w-full h-[320px]">
        <img src={image} className="object-fit max-h-full w-full" alt={title} />
      </div> */}
      {/* <div className="relative h-[320px] w-full bg-white">
        <img src={image} className=" absolute right-11 top-1/2 -translate-y-1/2 h-[250px] w-[200px] z-10" alt="" />
        <svg
          className="clip-path-triangle absolute -left-11 top-1/2 -translate-y-1/2 "
          height="200"
          width="200"
          xmlns="http://www.w3.org/2000/svg"
          opacity={.5}
        >
          <circle r="100" cx="100" cy="100" className="fill-main-color" />
        </svg>
        <svg
          className="clip-path-triangle absolute -right-11 top-1/2 -translate-y-1/2 "
          height="200"
          width="200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle r="100" cx="100" cy="100" className="fill-main-color" />
        </svg> 
      {/* </div> */}
      <div className="mx-3 my-5 flex flex-col items-center gap-y-2">
        <h3 className="text-center text-base font-bold leading-8">{title}</h3>
        {discountedPrice && (
          <div className="flex items-center gap-x-5 font-mainFontRegular text-base font-medium text-second-text--color">
            <span>{currencyFormatter(discountedPrice)}</span>
            <span className="text-red-700 line-through">
              {currencyFormatter(originalPrice)}
            </span>
          </div>
        )}
        {!discountedPrice && (
          <span className="text-center font-mainFontRegular font-medium">
            {currencyFormatter(originalPrice)}
          </span>
        )}
      </div>
      <div className="w-full bg-main-color">
        <motion.button
          onClick={() => addToCart(item)}
          whileTap={{ scale: 0.6 }}
          whileHover={{ scale: 0.8 }}
          className="mx-auto flex w-full justify-center gap-x-4 py-2 text-white"
        >
          <FaCartPlus size={20} />
          أضف إلي السلة
        </motion.button>
      </div>
    </li>
  );
}
