import currencyFormatter from "src/utils/currencyFormatter";

import Stikes from "src/assets/Stikes.svg?react";

function CardInfo({ originalPrice, discountPrice, title, seller }) {
  return (
    <div className="relative flex h-fit w-full flex-col items-center justify-between">
      <h3 className="relative my-auto w-full border-b-[1px] border-black px-4 py-6 text-center font-mainFont text-xl font-bold">
        {title}
      </h3>
      <div className="flex w-full flex-col gap-y-3 border-b-[1px] border-black py-5">
        <p className="w-full px-3 text-center font-cairo text-sm font-semibold tracking-wide text-black">
          {seller}
        </p>
        <div className="flex">
          <div className="relative mx-auto w-fit rounded-lg border-[1px] border-black bg-fourth-color px-2 py-2 text-base font-bold text-black">
            <Stikes className="absolute -bottom-[30px] left-[5px] -z-10 w-[90%]" />

            <p className="text-center">{currencyFormatter(discountPrice)}</p>
            <p
              className={` ${discountPrice > 0 ? "text-second-color line-through" : " "} text-center`}
            >
              {currencyFormatter(originalPrice)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardInfo;
