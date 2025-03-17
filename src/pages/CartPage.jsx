import useCart from "src/hooks/useCart";

import { CartList, CartSummary, EmptyCart } from "src/components/CartPage";

import CartImg from "src/assets/cart.svg?react";
import PageHeader from "src/components/ui/PageHeader";

import useGoToPageTop from "src/hooks/useGoToPageTop";
export default function CartPage() {
  const { cartLength } = useCart();
  useGoToPageTop();

  return (
    <div className="relative flex min-h-screen flex-col items-center pt-[100px] font-cairo">
      <div className="container flex w-full flex-col items-center gap-y-10 py-[100px] sm:pt-0">
        <PageHeader title={"عربة التسوق"}>
          <div className="relative flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 hover:drop-shadow-xl">
            <div
              className={`absolute -top-1 font-cairo text-lg ${
                cartLength > 9 ? "left-[13px]" : "left-1/2"
              } font-bold`}
            >
              {cartLength}
            </div>
            <CartImg className="h-full w-full" />
          </div>
        </PageHeader>

        {cartLength < 1 ? (
          <EmptyCart />
        ) : (
          <div className="mt-8 flex w-full flex-col items-center gap-y-6 pb-12 xl:w-[80%]">
            <CartList />
            <CartSummary />
          </div>
        )}
      </div>
    </div>
  );
}
