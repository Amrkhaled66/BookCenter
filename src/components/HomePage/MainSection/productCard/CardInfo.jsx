import PriceDisplay from "./PriceDisplay";
import { memo } from "react";
function CardInfo({ originalPrice, discountedPrice, title, publisher }) {
  return (
    <div className="relative flex h-fit min-h-[200px] w-full flex-col items-center justify-between md:pt-5">
      <h3 className="my-auto w-full px-3 text-center font-mainFont text-sm font-bold leading-8 md:text-lg">
        {title}
      </h3>
      <div className="bg-cover pt-3">
        <div className="mx-auto h-[6px] w-5/6 rounded-[120%] bg-gray-200"></div>
        <p className="w-full px-3 pt-6 text-center text-xs font-medium tracking-wide md:text-sm">
          {publisher}
        </p>
        <PriceDisplay
          originalPrice={originalPrice}
          discountedPrice={discountedPrice}
        />
      </div>
    </div>
  );
}

export default memo(CardInfo);
