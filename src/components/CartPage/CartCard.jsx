import useProducts from "src/hooks/useProducts";
import PriceDisplay from "src/components/HomePage/MainSection/productCard/PriceDisplay";
import { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";

import useCart from "src/hooks/useCart";
export default function CartCard({ id, quantity }) {
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const { selectProduct } = useProducts();
  const product = selectProduct(id);
  const { image, info, pricing } = product;
  const { addToCart, decreaseCartItem, clearItem, clearCart } = useCart();

  return (
    <div className="relative cursor-pointer">
      <div className="absolute -z-10 h-full w-full rounded-3xl bg-second-text--color"></div>
      <div className="relative flex -translate-x-2 translate-y-2 flex-row-reverse items-start gap-x-5 rounded-3xl border-2 border-gray-200 bg-white p-5 drop-shadow-md transition-transform duration-300 hover:-translate-x-4 hover:translate-y-4 hover:drop-shadow-lg">
        {/* img */}
        <div className="flex w-1/5 flex-col items-end space-y-2">
          <img src={image} className="rounded-xl" alt={info.title} />
          <p className="font-mainFontRegular text-sm font-medium text-second-text--color">
            يوجد في السلة : {quantity}
          </p>
        </div>
        <div className="flex w-3/5 flex-col items-end gap-y-0 text-right">
          <p className="font-mainFont text-main-text--color">{info.title}</p>
          <PriceDisplay
            originalPrice={pricing.originalPrice}
            discountedPrice={pricing.discountedPrice}
          />
          <div>
            <QuantitySelector
              quantity={selectedQuantity}
              setQuantity={setSelectedQuantity}
            />
            <button onClick={() => addToCart(id, selectedQuantity)}>
              تحديث الكمية
            </button>
          </div>
          <button
            onClick={() => clearItem(id)}
            className="absolute left-3 top-3 text-gray-500 transition-colors duration-300 hover:animate-shake hover:text-red-600"
          >
            <MdDeleteOutline size={25} />
          </button>
        </div>
      </div>
    </div>
  );
}

const QuantitySelector = ({ quantity, setQuantity }) => {
  const increment = () => setQuantity((prev) => (prev < 20 ? prev + 1 : prev));
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : prev));

  const QuantityButton = ({ label, ...props }) => (
    <button
      className="flex w-7 items-center justify-center rounded-lg border border-main-text--color py-1 font-black transition-transform duration-300 hover:translate-x-1 hover:translate-y-1"
      {...props}
    >
      {label}
    </button>
  );

  return (
    <div className="flex items-center space-x-2">
      <QuantityButton onClick={decrement} label="-" />
      <input
        dir="rtl"
        className="no-arrows w-10 border border-main-text--color p-1 text-center outline-none transition-colors duration-300 focus:outline-none"
        type="number"
        max="20"
        min="1"
        onChange={(e) =>
          setQuantity(Math.min(20, Math.max(1, Number(e.target.value))))
        }
        value={quantity}
      />
      <QuantityButton onClick={increment} label="+" />
    </div>
  );
};
