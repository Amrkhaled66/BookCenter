import Stikes from "src/assets/Stikes.svg?react";
import Stand from "src/assets/Stand.svg?react";
import currencyFormatter from "src/utils/currencyFormatter";

const Description = ({
  description,
  price,
  isUnAvailable,
  discountPrice,
  items,
  unAvailabilityNote,
}) => {
  return (
    <div className="relative border-b-4 border-second-color py-6">
      <p className="mx-auto w-fit border-[9px] border-wood-color px-2 py-1 text-center font-cairo text-base font-black sm:mx-0 sm:text-lg">
        وصف الكتاب
      </p>
      <p className="mx-auto mt-5 min-h-36 w-full rounded-3xl border-[9px] border-wood-color bg-main-color px-3 py-3 font-cairo text-sm font-bold !leading-7 tracking-wide text-white sm:w-[90%] sm:px-6 sm:py-6 sm:text-base">
        {description}
        {isUnAvailable && (
          <p className="mt-8 rounded-lg border-2 border-dashed  border-red-300 text-center text-sm px-5 py-3 ">
            {unAvailabilityNote}
          </p>
        )}
      </p>
      <div className="flex flex-col-reverse items-center sm:flex-row">
        <div className="mr-0 mt-auto translate-y-6 sm:w-fit xl:mr-12">
          <div className="translate-y-1 text-nowrap rounded-2xl border-[6px] border-main-color bg-white px-6 py-2 text-center text-2xl font-bold sm:px-4 sm:py-4">
            <p>{discountPrice > 0 && currencyFormatter(discountPrice)}</p>
            <p
              className={`${discountPrice > 0 ? "text-second-color line-through" : " "}`}
            >
              {currencyFormatter(price)}
            </p>
          </div>
          <div className="flex justify-center">
            <Stand />
          </div>
        </div>
        {items.length > 0 && (
          <div className="mr-auto flex w-[80%] translate-x-9 flex-col items-end">
            <Stikes className="w-full -translate-y-1 sm:w-[60%]" />
            <div className="w-full -translate-y-2 space-y-2 rounded-3xl border-8 border-wood-color bg-[#FFFCE5] px-5 py-3 font-semibold tracking-wider sm:w-[70%] sm:py-6">
              {items?.map(
                (item) => item.length > 0 && <p key={item}>📚 {item}</p>,
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Description;
