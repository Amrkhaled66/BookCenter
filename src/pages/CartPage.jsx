import useCart from "src/hooks/useCart";

import BagIcon from "src/components/ui/icons/bagIcon";

import { CartList, CartSummary, EmptyCart } from "src/components/CartPage";

import PageHeader from "src/components/ui/PageHeader";
export default function CartPage() {
  const { cart } = useCart();

  return (
    <div className="relative flex min-h-screen flex-col items-center font-cairo">
      <div className="container flex w-full flex-col items-center pt-24">
        <PageHeader>
          عربة التسوق <BagIcon />
        </PageHeader>

        {cart.length < 1 ? (
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

// Cobon

{
  /* <div className="flex w-1/2 flex-col items-end gap-y-4">
                <label>كوبون الخصم</label>
                <div className="flex w-full items-center justify-end">
                  <button className="bg-main-text--color rounded-s-xl px-3 py-2 text-white transition-all duration-300 hover:brightness-75">
                    تطبيق الكوبون
                  </button>
                  <input
                    className="w-[70%] border-2 border-gray-200 px-3 py-2 outline-none"
                    type="text"
                    dir="rtl"
                    placeholder="اكتب الكوبون"
                  />
                </div>
              </div> */
}
