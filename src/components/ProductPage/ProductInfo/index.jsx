import { useState } from "react";
import Header from "./Header";
import Description from "./Description";
import ActionSection from "./ActionSection";

export default function ProductInfo({
  name,
  id,
  isUnAvailable,
  description,
  price,
  items,
  discountPrice,
  unAvailabilityNote,
  image,
  seller,
  inStock,
}) {
  const [quantity, setQuantity] = useState(1);

  const productInfo = {
    title: name,
    image,
    originalPrice: price,
    discountPrice,
    seller,
    id,
  };
  return (
    <div className="w-full font-cairo">
      <Header title={name} />
      <Description
        unAvailabilityNote={unAvailabilityNote}
        isUnAvailable={isUnAvailable}
        discountPrice={discountPrice}
        description={description}
        items={items}
        price={price}
      />
      <ActionSection
        inStock={inStock}
        productInfo={productInfo}
        quantity={quantity}
        setQuantity={setQuantity}
      />
    </div>
  );
}
