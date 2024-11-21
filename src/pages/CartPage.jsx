import CartCard from "src/components/CartPage/CartCard";

import useCart from "src/hooks/useCart";

const BackgroundWave = function () {
  return (
    <div className="absolute bottom-0 left-0 -z-50 h-full w-full bg-waveBG"></div>
  );
};

import AddToCartButton from "src/components/AddToCartButton";

export default function CartPage() {
  const { cart } = useCart();

  const actionBtnCssClass = `rounded-3xl tracking-wider hover:brightness-[.75] transition-all duration-300  px-4 py-3 text-xs text-white  md:text-base`;

  console.log(cart);

  return (
    <div className="relative flex min-h-screen w-screen flex-col">
      <div className="container flex w-full flex-col items-center pt-[150px]">
        <div>
          <p className="font-mainFont text-4xl text-main-text--color">
            عربة التسوق
          </p>
        </div>
        <div className="flex w-full flex-col flex-wrap gap-x-9 gap-y-9 py-9 sm:flex-row-reverse sm:justify-around xl:flex-nowrap xl:justify-center">
          <div className="flex w-full flex-col gap-y-14 lg:w-1/2">
            {cart.map((item) => (
              <CartCard key={item.id} id={item.id} quantity={item.quantity} />
            ))}
          </div>
          <div className="flex w-full flex-col items-center lg:w-1/2">
            {/* <div className="h-fit w-2/3">
            <div className="flex flex-col items-center text-right">
              <p className="w-1/2 bg-gray-200 p-2 font-mainFontRegular text-base">
                2500
              </p>
              <p className="w-1/2 bg-gray-300 p-2 font-mainFontRegular text-base">
                <span className="text-xs">(بدون الشحن)</span> المبلغ الكلي
              </p>
            </div>
          </div>
          <div
            dir="rtl"
            className="flex flex-col justify-between space-y-4 font-mainFontRegular font-semibold"
          >
            <AddToCartButton
              className={` ${actionBtnCssClass} flex flex-row-reverse items-center justify-center gap-x-2 bg-second-color`}
            />

            <button className={`${actionBtnCssClass} bg-main-text--color`}>
              الذهاب للدفع
            </button>
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
