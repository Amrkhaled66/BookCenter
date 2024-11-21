import { useState } from "react";

import currencyFormatter from "src/utils/currencyFormatter";

import QuantitySelector from "src/components/ProductPage/QuantitySelector ";

import AddToCartButton from "../AddToCartButton";

export default function ProductPurchaseCard({ pricing, id }) {
  const [quantity, setQuantity] = useState(1);

  // Format price
  const formattedOriginalPrice = currencyFormatter(pricing.originalPrice);
  const formattedDiscountedPrice = currencyFormatter(pricing.discountedPrice);

  const actionBtnCssClass = `rounded-3xl tracking-wider hover:brightness-[.75] transition-all duration-300  px-4 py-3 text-xs text-white md:text-base`;

  return (
    <div className="order-none flex h-fit w-full flex-col justify-between gap-y-6 rounded-3xl bg-white drop-shadow-xl md:order-1 md:w-[40%] xl:order-none xl:w-[30%]">
      <div className="w-full space-y-7 px-5 py-4">
        {/* Price */}
        {formattedDiscountedPrice ? (
          <DiscountBadge
            {...{ formattedDiscountedPrice, formattedOriginalPrice }}
          />
        ) : (
          <p className="text-right text-2xl font-bold text-main-text--color">
            {formattedOriginalPrice}
          </p>
        )}

        {/* Quantity Selector */}
        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />

        {/* CTA Buttons */}
        <div
          dir="rtl"
          className="flex flex-col justify-between space-y-4 font-mainFontRegular font-semibold"
        >
          <AddToCartButton
            className={` ${actionBtnCssClass} flex flex-row-reverse items-center justify-center gap-x-2 bg-second-color`}
            quantity={quantity}
            productId={id}
          />

          <button className={`${actionBtnCssClass} bg-main-text--color`}>
            الذهاب للدفع
          </button>
        </div>
      </div>
    </div>
  );
}

const DiscountBadge = ({
  formattedDiscountedPrice,
  formattedOriginalPrice,
}) => (
  <p className="relative flex flex-col space-x-3 text-right font-Poppins">
    <span className="text-2xl font-bold text-main-text--color">
      {formattedDiscountedPrice}
    </span>
    <span className="text-sm font-semibold text-second-color">
      <span className="px-1 line-through">{formattedOriginalPrice}</span>
      <span className="font-mainFontRegular"> : سعره كان</span>
    </span>
    <span className="absolute left-0 top-0 animate-bounce rounded-full bg-main-color px-3 py-2 font-mainFontRegular text-xs font-medium text-second-color text-white lg:text-sm">
      هتوفر {formattedOriginalPrice - formattedDiscountedPrice} ج
    </span>
  </p>
);
