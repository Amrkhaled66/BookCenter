import currencyFormatter from "src/utils/currencyFormatter";

export default function PriceDisplay({ originalPrice, discountedPrice }) {
  const formattedOriginalPrice = currencyFormatter(originalPrice);

  const formattedDiscountedPrice = discountedPrice
    ? currencyFormatter(discountedPrice)
    : null;

  return (
    <div className="my-3 w-full pt-2 text-right font-mainFont text-xs md:text-base">
      {discountedPrice ? (
        <div className="flex flex-col-reverse items-center justify-end gap-x-5 sm:flex-row">
          <span className="text-second-color line-through">
            {formattedOriginalPrice}
          </span>
          <span>{formattedDiscountedPrice}</span>
        </div>
      ) : (
        <span>{formattedOriginalPrice}</span>
      )}
    </div>
  );
}
