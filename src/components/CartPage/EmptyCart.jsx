import emptyCart from "src/assets/cart_empty.png";
import ScaleButton from "src/components/ui/ScaleButton";
import useColors from "src/hooks/useColors";
import { Link } from "react-router-dom";

export default function EmptyCart() {
  const { mainTextColor } = useColors();
  return (
    <div className="flex flex-col items-center space-y-6 py-8 text-xl">
      <img className="w-4/5" src={emptyCart} alt="Empty Cart" />
      <p className="text-base font-bold text-darkAndWhite-color sm:text-xl">
        لا توجد أي منتجات في عربة مشترياتك
      </p>
      <Link to="/">
        <ScaleButton
          className="border-main-text--color text-white-color"
          bgColor={mainTextColor}
        >
          تسوق الأن
        </ScaleButton>
      </Link>
    </div>
  );
}
