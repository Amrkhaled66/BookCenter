import AddToCartButton from "src/components/AddToCartButton";
import CardInfo from "./CardInfo";

import { Link } from "react-router-dom";
export default function ProductCard({
  title,
  image,
  originalPrice,
  discountPrice,
  seller,
  id,
  stockQuantity,
}) {
  const productInfo = {
    title,
    image,
    originalPrice,
    discountPrice,
    seller,
    id,
  };

  return (
    <div className="mx-auto  flex min-h-fit w-full max-w-[300px] flex-col items-center gap-y-3 overflow-hidden rounded-lg border-[1px] border-black bg-card-color py-7 sm:py-2 font-cairo text-main-text--color drop-shadow-md transition-all duration-300 md:w-full">
      {/* Product image */}
      <Link to={"/product/" + id}>
        <div className="bg-main-text--colo  w-full overflow-hidden px-5 drop-shadow-xl">
          <img
            src={image}
            loading="lazy"
            className="h-full w-full rounded-3xl object-cover"
            alt={title}
          />
        </div>
        <CardInfo
          originalPrice={originalPrice}
          discountPrice={discountPrice}
          title={title}
          seller={seller}
        />
      </Link>

      {/* CTA Button */}
      {stockQuantity > 0 && (
        <div className="relative h-fit w-full px-5 py-2">
          <AddToCartButton
            whileTap={{ scale: 0.75 }}
            whileHover={{ scale: 0.9 }}
            className="mx-auto flex w-full items-center justify-center gap-x-4 rounded-xl bg-main-color py-2 text-base text-white"
            quantity={1}
            productInfo={productInfo}
          ></AddToCartButton>
        </div>
      )}

      {stockQuantity <= 0 && (
        <div className="px-5 py-2">
          <p className="rounded-md bg-red-700 px-3 py-2 font-mainFont text-white">
            الكتاب هيتوفر قريب جدا تاني
          </p>
        </div>
      )}
    </div>
  );
}
