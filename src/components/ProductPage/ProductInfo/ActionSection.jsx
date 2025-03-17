import { Link } from "react-router-dom";
import AddToCartButton from "../../AddToCartButton";
import QuantitySelector from "../QuantitySelector";

const ActionSection = ({ quantity, setQuantity, productInfo }) => {
  return (
    <div className="flex w-full flex-col gap-y-8 py-6">
      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
      <div className="flex w-full flex-col items-center gap-y-3 lg:items-start">
        <AddToCartButton
          quantity={quantity}
          productInfo={{
            ...productInfo,
            image: `${import.meta.env.VITE_API_URL}/${productInfo.image}`,
          }}
          className="flex w-full items-center justify-center gap-x-2 rounded-lg border-2 border-second-color bg-second-color px-5 py-2 font-semibold text-white transition duration-300 hover:bg-transparent hover:text-second-color sm:w-[60%]"
        >
          أضف الي السلة
        </AddToCartButton>
        <Link
          to="/cart"
          className="w-full rounded-lg border-2 border-main-color bg-main-text--color px-5 py-2 text-center font-semibold text-white transition duration-300 hover:bg-transparent hover:text-main-text--color sm:w-[60%]"
        >
          مراجعة العربة و الذهاب للدفع
        </Link>
      </div>
    </div>
  );
};

export default ActionSection;
