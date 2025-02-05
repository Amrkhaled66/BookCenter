import currencyFormatter from "src/utils/currencyFormatter";

import { Link } from "react-router-dom";

import useCart from "src/hooks/useCart";
export default function CartSummary() {
  const { calcAllPrice } = useCart();
  return (
    <div className="flex w-full flex-col gap-y-4">
    <div className="flex gap-3 text-right text-lg sm:text-xl font-semibold">
      <p className="text-nowrap" >السعر الكلي للمنتجات : </p>
      <p>{currencyFormatter(calcAllPrice())}</p>
    </div>
    <Link to="/checkout">
      <button className="bg-second-color px-10 py-3 text-white hover:brightness-75">
        الذهاب للدفع
      </button>
    </Link>
  </div>
  );
}
