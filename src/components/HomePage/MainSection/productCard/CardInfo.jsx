import PriceDisplay from "./PriceDisplay";

import currencyFormatter from "src/utils/currencyFormatter";

import Stikes from "src/assets/Stikes.svg?react";

function CardInfo({ originalPrice, discountedPrice, title, publisher }) {
  return (
    <div className="relative flex h-fit w-full flex-col items-center justify-between">
      <h3 className="relative my-auto w-full border-b-[1px] border-black px-4 py-6 text-center font-mainFont text-xl font-bold">
        {title}
      </h3>
      <div className="flex w-full flex-col gap-y-3 border-b-[1px] border-black py-5">
        <p className="w-full px-3 text-center font-cairo text-sm font-semibold tracking-wide text-black">
          {publisher}
        </p>
        <div className="flex">
          {discountedPrice && (
            <div className="bg-fourth-color relative mx-auto w-fit rounded-lg border-[1px] border-black px-2 py-2 text-base font-black text-black">
              <Stikes className="absolute -bottom-[30px] left-[5px] -z-10 w-[90%]" />
              <p>{currencyFormatter(discountedPrice)}</p>
            </div>
          )}
          <div className="bg-fourth-color relative mx-auto w-fit rounded-lg border-[1px] border-black px-2 py-2 text-base font-black text-black">
            <Stikes className="absolute -bottom-[30px] left-[5px] -z-10 w-[90%]" />
            <p>{currencyFormatter(originalPrice)}</p>
          </div>
        </div>
        {/* <PriceDisplay
          originalPrice={originalPrice}
          discountedPrice={discountedPrice}
        /> */}
      </div>
    </div>
  );
}

export default CardInfo;
