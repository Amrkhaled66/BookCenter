import emptyCart from "src/assets/cart_empty.png";
import ScaleButton from "src/components/ui/ScaleButton";
import useColors from "src/hooks/useColors";
import { Link } from "react-router-dom";

export default function EmptyCart() {
  const { colors } = useColors();
  const bgColor = colors.get("mainTextColor");
  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-6 py-8 text-xl">
      <img className="w-4/5" src={emptyCart} alt="Empty Cart" />
      <p className="text-base font-bold text-darkAndWhite-color sm:text-xl">
        لسا مفيش أي كتاب في السلة
      </p>
      <Link to="/">
        <ScaleButton
          className="border-main-text--color font-mainFont text-white-color"
          bgColor={bgColor}
        >
          تسوق الأن
        </ScaleButton>
      </Link>
    </div>
  );
}
