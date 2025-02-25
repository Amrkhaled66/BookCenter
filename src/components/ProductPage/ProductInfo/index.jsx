import { useState } from "react";
import Header from "./Header";
import Description from "./Description";
import ActionSection from "./ActionSection";

export default function ProductInfo({ name,id }) {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="w-full font-cairo">
      <Header title={name} />
      <Description />
      <ActionSection id={id} quantity={quantity} setQuantity={setQuantity} />
    </div>
  );
}
