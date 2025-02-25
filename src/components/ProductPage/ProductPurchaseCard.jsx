import { useState } from "react";

import currencyFormatter from "src/utils/currencyFormatter";

import QuantitySelector from "src/components/ProductPage/QuantitySelector";

import AddToCartButton from "../AddToCartButton";
import { Link } from "react-router-dom";

import Divider from "../ui/Divider";
// export default function ProductPurchaseCard({ price, discountedPrice, id }) {
//   const [quantity, setQuantity] = useState(1);

//   discountedPrice = 50;
//   // Format price
//   const formattedOriginalPrice = currencyFormatter(price);
//   const formattedDiscountedPrice = currencyFormatter(discountedPrice);

//   const actionBtnCssClass = `rounded-3xl tracking-wider hover:brightness-[.75] transition-all duration-300  px-4 py-3 text-xs text-white md:text-base`;

//   return (
//     <div className="order-none flex h-fit w-full flex-col justify-between gap-y-6 rounded-3xl bg-white drop-shadow-xl md:order-1 md:w-[45%] xl:order-none xl:w-[45%]">
//       <div className="w-full space-y-7 px-5 py-4">
//         <div className="space-y-3 font-cairo">
//           <p className="text-2xl font-black ">
//             كتاب التكاثر – د.أحمد الجوهري – احياء
//           </p>
//           <p className="font-xl font-bold text-black/60">الصف الثالث الثانوي</p>
//           <p className="text-xs text-black/70">ل د.أحمد الجوهري</p>
//         </div>
//         <Divider />
//         {/* Price */}
//         {formattedDiscountedPrice ? (
//           <DiscountBadge
//             {...{
//               formattedDiscountedPrice,
//               formattedOriginalPrice,
//               price,
//               discountedPrice,
//             }}
//           />
//         ) : (
//           <p className="text-right text-2xl font-bold ">
//             {formattedOriginalPrice}
//           </p>
//         )}

//         {/* Quantity Selector */}
//         <QuantitySelector quantity={quantity} setQuantity={setQuantity} />

//         {/* CTA Buttons */}
//         <div
//           dir="rtl"
//           className="flex flex-col items-start justify-between gap-y-4 font-mainFontRegular font-semibold"
//         >
//           <AddToCartButton
//             className={` ${actionBtnCssClass} flex w-full items-center justify-center gap-x-2 bg-second-color`}
//             quantity={quantity}
//             productId={id}
//           />

//           <Link
//             to={"/cart"}
//             className={`${actionBtnCssClass} w-full bg-main-text--color text-center`}
//           >
//             مراجعة العربة و الذهاب للدفع
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// const DiscountBadge = ({
//   formattedDiscountedPrice,
//   formattedOriginalPrice,
//   price,
//   discountedPrice,
// }) => {
//   return (
//     <p className="relative flex flex-col gap-y-2 text-right font-Poppins">
//       <span className="text-2xl font-bold ">
//         {formattedDiscountedPrice}
//       </span>
//       <span className="text-sm font-semibold text-second-color">
//         <span className="font-mainFontRegular"> سعره كان : </span>
//         <span className="px-1 line-through">{formattedOriginalPrice}</span>
//       </span>
//       <span className="absolute left-0 top-0 animate-bounce rounded-full bg-main-color px-3 py-2 font-mainFontRegular text-xs font-medium text-second-color text-white lg:text-sm">
//         هتوفر {price - discountedPrice}ج
//       </span>
//     </p>
//   );
// };
export default function ProductPurchaseCard({ price, discountedPrice, id }) {
  const [quantity, setQuantity] = useState(1);

  discountedPrice = 50;
  // Format price
  const formattedOriginalPrice = currencyFormatter(price);
  const formattedDiscountedPrice = currencyFormatter(discountedPrice);

}

