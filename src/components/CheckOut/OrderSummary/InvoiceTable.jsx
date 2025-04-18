import useCart from "src/hooks/useCart";
import currencyFormatter from "src/utils/currencyFormatter";
import { getShippingPrice } from "src/services/api/order";
import { useEffect, useState } from "react";

import { NEXT_ITEM_FEES } from "src/services/defaultSettings";
const TableHeader = ({ title }) => {
  return (
    <th className="h-20 border-[1px] border-[#6b7280] p-5 font-semibold">
      {title}
    </th>
  );
};

const TableData = ({ data, className = "" }) => {
  return (
    <td
      className={`border-[1px] border-[#6b7280] p-3 text-sm sm:p-5 sm:text-base ${className}`}
    >
      {data}
    </td>
  );
};

const CartItem = ({ title, originalPrice, discountPrice, quantity }) => {
  const mainPrice = discountPrice || originalPrice;
  return (
    <tr className="text-center">
      <TableData data={title} />
      <TableData data={currencyFormatter(mainPrice)} />
      <TableData data={quantity} />
      <TableData data={currencyFormatter(quantity * mainPrice)} />
    </tr>
  );
};

export default function InvoiceTable({ city }) {
  const { cart, calcAllPrice, cartLength } = useCart();
  const [shippingPrice, setShippingPrice] = useState(0);

  const total = calcAllPrice();

  useEffect(() => {
    const fetchShippingPrice = async () => {
      if (!city) return setShippingPrice(0);

      try {
        const { shippingPrice } = await getShippingPrice(city);
        setShippingPrice(shippingPrice);
      } catch (error) {
        console.error("Error fetching shipping price:", error);
      }
    };

    fetchShippingPrice();
  }, [city]);

  const totalShipping =
    shippingPrice + parseInt(cartLength - 1) * NEXT_ITEM_FEES;

  return (
    <table className="mx-auto w-[90%] overflow-scroll sm:w-[90%]">
      <thead className="bg-[#d1d5db] p-3 sm:p-5">
        <tr className="border border-gray-color">
          <TableHeader title="المنتج" />
          <TableHeader title="السعر" />
          <TableHeader title="الكمية" />
          {/* <TableHeader title="الخصم" /> */}
          <TableHeader title="الاجمالي" />
        </tr>
      </thead>
      <tbody></tbody>
      <tbody>
        {cart.map(({ productInfo, quantity }) => (
          <CartItem
            key={productInfo.id}
            title={productInfo.title}
            originalPrice={productInfo.originalPrice}
            discountPrice={productInfo.discountPrice}
            quantity={quantity}
          />
        ))}
      </tbody>
      <tfoot>
        <tr className="text-center font-semibold text-black">
          <TableData data="الشحن" />
          <TableData data="---" />
          <TableData data="---" />
          <TableData
            data={
              shippingPrice === 0
                ? "اختار محافظتك"
                : currencyFormatter(totalShipping)
            }
          />
        </tr>
        <tr className="bg-[#fbe4e5] text-center font-semibold text-black">
          <TableData data="الاجمالي" />
          <TableData data="---" />
          <TableData data="---" />
          {/* <TableData data="---" /> */}
          <TableData data={currencyFormatter(total + totalShipping)} />
        </tr>
      </tfoot>
    </table>
  );
}
