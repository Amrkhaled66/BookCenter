import { Link } from "react-router-dom";
import AddToCartButton from "../../AddToCartButton";
import QuantitySelector from "../QuantitySelector";
import currencyFormatter from "src/utils/currencyFormatter";

const ActionSection = ({
  quantity,
  setQuantity,
  price,
  discountedPrice,
  id,
}) => {
  const formattedPrice = currencyFormatter(discountedPrice || price);
  return (
    <div className="flex flex-col gap-y-5 py-6">
      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
      <div className="flex w-full flex-col items-center gap-y-3 lg:items-start">
        <AddToCartButton
          quantity={quantity}
          productId={id}
          price={formattedPrice}
          className="flex w-[70%] items-center justify-center gap-x-2 rounded-lg border-2 border-second-color bg-second-color px-5 py-2 font-semibold text-white transition duration-300 hover:bg-transparent hover:text-second-color"
        >
          أضف الي السلة
        </AddToCartButton>
        <Link
          to="/cart"
          className="w-[70%] rounded-lg border-2 border-main-color bg-main-text--color px-5 py-2 text-center font-semibold text-white transition duration-300 hover:bg-transparent hover:text-main-text--color"
        >
          مراجعة العربة و الذهاب للدفع
        </Link>
      </div>
    </div>
  );
};

export default ActionSection;
