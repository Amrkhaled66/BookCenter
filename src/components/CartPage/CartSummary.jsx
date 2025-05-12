import currencyFormatter from "src/utils/currencyFormatter";

import { Link } from "react-router-dom";

import useCart from "src/hooks/useCart";
import TransparentBtn from "../ui/TransparentBtn";
import useColors from "src/hooks/useColors";
import { FaChevronLeft } from "react-icons/fa";

export default function CartSummary() {
  const { calcAllPrice } = useCart();
  const { colors } = useColors();
  const secondColor = colors.get("secondColor");
  return (
    <Link to="/checkout" className="fixed font-cairo mx-auto  bottom-4 sm:border z-[7000000]  sm:border-gray-color items-center justify-between  sm:justify-start  flex-row-reverse flex  sm:flex-col  gap-y-4  bg-second-color sm:text-black sm:py-6 lg:py-8 text-white   py-3 px-6 rounded-xl w-[90%]  drop-shadow-2xl sm:relative sm:bg-transparent">
      <div className="flex  items-center gap-x-2   text-right text-sm sm:font-semibold font-bold sm:text-xl">
        <p className="text-nowrap hidden sm:block">السعر الكلي للمنتجات : </p>
        <p>{currencyFormatter(calcAllPrice())}</p>
        <FaChevronLeft className="w-[14px] h-[14px] sm:hidden" />
      </div>
      <TransparentBtn
        bgColor={secondColor}
        className="!rounded-3xl sm:block hidden !px-7 font-semibold text-white"
      >
        دوس هنا عشان تراجع الفاتورة و تدفع
      </TransparentBtn>

      <p className="sm:hidden   h-full text-sm  font-bold" >انتقل الي الدفع</p>
    </Link>
  );
}
