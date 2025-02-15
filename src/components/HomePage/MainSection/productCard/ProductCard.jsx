import AddToCartButton from "src/components/AddToCartButton";
import CardInfo from "./CardInfo";

import { Link } from "react-router-dom";
export default function ProductCard({
  title,
  image,
  originalPrice,
  discountedPrice,
  publisher,
  id,
  stockQuantity,
}) {
  
  return (
    <div className="mx-auto flex min-h-fit flex-col items-center gap-y-3 overflow-hidden rounded-lg border-[1px] border-black bg-card-color py-2 font-cairo text-main-text--color drop-shadow-md w-full max-w-[300px] transition-all duration-300 md:w-full">
      {/* Product image */}
      <Link to={"/product/" + id}>
        <div className="bg-main-text--colo w-full overflow-hidden px-4">
          <img
            src={image}
            loading="lazy"
            className="h-full w-full rounded-3xl object-cover"
            alt={title}
          />
        </div>
        <CardInfo
          originalPrice={originalPrice}
          discountedPrice={discountedPrice}
          title={title}
          publisher={publisher}
        />
      </Link>

      {/* CTA Button */}
      {stockQuantity > 0 && (
        <div className="relative h-fit w-full px-4 py-2">
          <AddToCartButton
            whileTap={{ scale: 0.75 }}
            whileHover={{ scale: 0.9 }}
            className="mx-auto flex w-full items-center justify-center gap-x-4 rounded-xl bg-main-color py-2  text-white text-base"
            quantity={1}
            productId={id}
            price={discountedPrice || originalPrice}
          ></AddToCartButton>
        </div>
      )}

      {
        stockQuantity === 0 && (
          <div className="px-4 py-2" >
            <p className="bg-red-700 rounded-md text-white font-mainFont py-2 px-3" >الكتاب هيتوفر قريب جدا تاني</p>
          </div>
        )
      }
    </div>
  );
}
