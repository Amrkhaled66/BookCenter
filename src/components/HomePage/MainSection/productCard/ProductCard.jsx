import AddToCartButton from "src/components/AddToCartButton";

import { Suspense, lazy } from "react";

import { Link } from "react-router-dom";
const CardInfo = lazy(() => import("./CardInfo"));
export default function ProductCard({
  title,
  image,
  originalPrice,
  discountedPrice,
  publisher,
  id,
}) {
  return (
    <div className="group relative mx-auto flex min-h-fit w-full flex-col items-center gap-1 overflow-hidden rounded-lg font-mainFontRegular text-main-text--color shadow-xl shadow-[#9aaabb] transition-all duration-300 hover:-translate-y-7 hover:rounded-none md:w-full">
      {/* Product image */}
      <Link to={"/product/" + id}>
        <div className="w-full overflow-hidden bg-main-text--color">
          <img
            src={image}
            loading="lazy"
            className="h-full w-full object-cover"
            alt={title}
          />
        </div>
        {/*  hover:rotate-6 hover:scale-110 hover:brightness-110 */}
        <Suspense className="Loading...">
          <CardInfo
            originalPrice={originalPrice}
            discountedPrice={discountedPrice}
            title={title}
            publisher={publisher}
          />
        </Suspense>
      </Link>

      {/* CTA Button */}
      <div className="relative h-fit w-full bg-main-text--color">
        <AddToCartButton
          whileTap={{ scale: 0.75 }}
          whileHover={{ scale: 0.9 }}
          className="mx-auto flex w-full items-center justify-center gap-x-4 py-3 text-xs text-white md:text-base"
          quantity={1}
          productId={id}
          price={discountedPrice || originalPrice}
        ></AddToCartButton>
      </div>
    </div>
  );
}
