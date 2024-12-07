import { useState, useRef, useEffect, memo } from "react";
import { Link } from "react-router-dom";
import AddToCartButton from "../AddToCartButton";
import QuantitySelector from "./QuantitySelector ";

import currencyFormatter from "src/utils/currencyFormatter";

export default function ProductInfo({
  name,
  description,
  price,
  discountedPrice,
  id,
  publisher,
  grade,
  subCategory,
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isClipped, setIsClipped] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const textRef = useRef();

  // Static sample data
  const toggleExpand = () => setIsExpanded((prevState) => !prevState);

  useEffect(() => {
    if (textRef?.current) {
      const lineHeight = parseFloat(
        getComputedStyle(textRef.current).lineHeight,
      );
      const maxHeight = lineHeight * 3;
      if (textRef.current.scrollHeight > maxHeight) {
        setIsClipped(true);
      }
    }
  }, [description]);

  discountedPrice = 50;
  return (
    <div className="w-full font-cairo lg:w-3/4">
      <Header title={name} />
      <DetailsSection {...{ publisher, grade, subCategory }} />
      <Description
        description={description}
        isExpanded={isExpanded}
        isClipped={isClipped}
        toggleExpand={toggleExpand}
        textRef={textRef}
      />
      <ActionSection
        {...{ quantity, setQuantity, price, discountedPrice, id }}
      />
    </div>
  );
}

const Header = ({ title }) => (
  <div>
    <p
      className="border-b-4 border-main-text--color pb-5 text-3xl font-bold text-main-text--color sm:text-4xl"
      style={{ lineHeight: "1.5" }}
    >
      {title}
    </p>
  </div>
);

const DetailsSection = ({ publisher, grade, subCategory }) => (
  <div className="flex flex-col gap-y-2 border-b-2 border-main-text--color py-6 pb-5 text-sm font-bold md:text-base">
    {subCategory && <p>📚 {subCategory}</p>}
    {publisher && <p>✍ {publisher}</p>}
    {grade && <p>🎓 {grade}</p>}
  </div>
);

const Description = ({
  description,
  isExpanded,
  isClipped,
  toggleExpand,
  textRef,
}) => (
  <div className="flex flex-col py-6 text-sm md:text-base">
    <p className="py-1 font-bold">نبذة عن الكتاب :</p>
    <div className="text-right">
      <p
        ref={textRef}
        className={`font-cairo font-semibold leading-loose tracking-wider text-second-text--color ${
          isExpanded ? "" : "line-clamp-3"
        }`}
      >
        {description}
      </p>
      {isClipped && (
        <button className="mt-2 font-bold text-red-500" onClick={toggleExpand}>
          {isExpanded ? "عرض أقل" : "عرض المزيد"}
        </button>
      )}
    </div>
  </div>
);

const ActionSection = ({
  quantity,
  setQuantity,
  price,
  discountedPrice,
  id,
}) => {
  const formattedOriginalPrice = currencyFormatter(price);
  const formattedDiscountedPrice = currencyFormatter(discountedPrice);
  return (
    <div className="flex flex-col gap-y-5">
      <div className="flex w-fit flex-col items-start gap-y-3 rounded-2xl bg-main-text--color px-5 py-3 font-bold text-white">
        {discountedPrice && (
          <>
            <p>{formattedDiscountedPrice}</p>
            <p className="text-sm text-rose-200">
              <span>سعره كان : </span>
              <span className="line-through">{formattedOriginalPrice} </span>
            </p>
          </>
        )}
        {!discountedPrice && formattedOriginalPrice}
      </div>
      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
      <AddToCartButton
        quantity={quantity}
        productId={id}
        price={discountedPrice || price}
        className="flex w-full items-center justify-center gap-x-2 rounded-xl bg-second-color px-10 py-3 font-bold text-white hover:brightness-75"
      >
        أضف الي السلة
      </AddToCartButton>
      <Link
        to="/cart"
        className="w-full rounded-xl bg-main-text--color px-10 py-3 text-center font-bold text-white hover:brightness-75"
      >
        مراجعة العربة و الذهاب للدفع
      </Link>
    </div>
  );
};
