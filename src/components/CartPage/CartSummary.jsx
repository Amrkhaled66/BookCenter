import currencyFormatter from "src/utils/currencyFormatter";

import { Link } from "react-router-dom";

import useCart from "src/hooks/useCart";
import TransparentBtn from "../ui/TransparentBtn";
import useColors from "src/hooks/useColors";
export default function CartSummary() {
  const { calcAllPrice } = useCart();
  const { colors } = useColors();
  const secondColor = colors.get("secondColor");
  return (
    <div className="fixed bottom-0 border border-gray-color items-center sm:justify-start left-0 z-20 flex w-full flex-col gap-y-4 space-y-3 bg-white py-8 drop-shadow-2xl sm:relative sm:bg-transparent">
      <div className="flex  gap-3 text-right text-lg font-semibold sm:text-xl">
        <p className="text-nowrap">السعر الكلي للمنتجات : </p>
        <p>{currencyFormatter(calcAllPrice())}</p>
      </div>
      <Link className="flex " to="/checkout">
        <TransparentBtn
          bgColor={secondColor}
          className="!rounded-3xl !px-7 font-semibold text-white"
        >
          دوس هنا عشان تراجع الفاتورة و تدفع
        </TransparentBtn>
      </Link>
    </div>
  );
}
