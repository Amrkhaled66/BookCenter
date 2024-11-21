import { motion } from "framer-motion";

import AddToCartButton from "src/components/AddToCartButton";

import { Suspense, lazy } from "react";

import { Link } from "react-router-dom";
const CardInfo = lazy(() => import("./CardInfo"));
export default function ProductCard({
  title,
  image,
  originalPrice,
  discountedPrice,
  item,
  publisher,
  id,
}) {
  return (
    <div className="relative mx-auto flex min-h-fit w-full flex-col items-center gap-1 overflow-hidden rounded-lg font-mainFontRegular text-main-text--color shadow-xl shadow-[#9aaabb] md:w-full">
      {/* Product image */}
      <Link to={"/product/" + id}>
        <div className="w-full bg-second-color">
          <img
            src={image}
            loading="lazy"
            className="h-full w-full object-cover"
            alt={title}
          />
        </div>

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
        ></AddToCartButton>
      </div>
    </div>
  );
}

