import LinkIcon from "src/assets/LinkIconsvg.svg";

import currencyFormatter from "src/utils/currencyFormatter";

const OrderCardElement = ({ className = " ", right, left }) => {
  return (
    <div className="flex items-center justify-between">
      <span className={`rounded-lg ${className} p-2 text-sm`}>{right}</span>
      <span className="font-bold">{left}</span>
    </div>
  );
};

const paidStatus = {
  paid: {
    text: "مدفوع",
    className: "bg-green-50  text-green-700",
  },
  pending: {
    text: "في انتظار الدفع",
    className: "bg-yellow-50 text-yellow-700",
  },
  failed: {
    text: "تم الغاء الفاتورة",
    className: "bg-red-50 text-red-900",
  },
};

export default function OrderCard({
  products,
  productsPrice,
  shippingPrice,
  totalPrice,
  invoiceLink,
  paymentStatus,
  deliveryStatus,
  createdAt,
}) {
  const orderData = new Date(createdAt);
  const arabicData = orderData.toLocaleDateString("ar-Eg", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  });

  return (
    <div className="mx-auto  w-[100%] rounded-xl border-[1px] border-third-color bg-white p-3 font-cairo text-sm drop-shadow-xl sm:w-[80%] lg:w-[90%]">
      <div className="space-y-3 border-b-2 border-black/10 pb-3">
        <p className="text-center font-bold text-third-color">
          تاريخ الشراء : {arabicData}
        </p>
        <p className="w-full rounded-sm bg-blue-50 px-3 py-2 text-right font-bold tracking-wider text-blue-900">
          📚 الكتب اللي اشتريتها
        </p>
        <div className="space-y-2">
          {products.map((product) => (
            <div key={product._id} className="flex justify-between">
              <span>{product.name}</span>
              <span className="font-bold">x{product.quantity}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-y-2 border-b-2 border-black/10 py-2 pb-3">
        <OrderCardElement
          className="bg-blue-100 text-blue-900"
          right={"سعر الشحن"}
          left={currencyFormatter(shippingPrice)}
        />

        <OrderCardElement
          className="bg-green-100 text-green-900"
          right={"سعر الكتب"}
          left={currencyFormatter(productsPrice)}
        />

        <OrderCardElement
          className="bg-orange-100 text-orange-900"
          right={"السعر الكلي"}
          left={currencyFormatter(totalPrice)}
        />
      </div>
      <div className="flex flex-col gap-y-2 border-b-2 border-black/10 py-2 pb-3 font-semibold">
        <div className="flex items-center justify-between">
          <span className="rounded-lg bg-violet-100 p-2 text-violet-900">
            لينك الفاتورة
          </span>
          <a
            href={invoiceLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-second-color px-3 py-2 font-bold text-white outline outline-2 outline-second-color transition-all duration-300 hover:bg-transparent"
          >
            <img className="h-6 w-6" src={LinkIcon} alt="Invoice Link" />
          </a>
        </div>
        <div className="flex items-center justify-between">
          <span className="rounded-lg bg-blue-50 p-2 text-blue-900">
            حالة الدفع
          </span>
          <span
            className={`rounded-sm px-2 py-1 font-bold ${paidStatus[paymentStatus].className}`}
          >
            {paidStatus[paymentStatus].text}
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-y-2 py-2   pb-3">
        <div className="flex items-center justify-between">
          <span className="rounded-lg p-1">حالة التوصيل</span>
          <span className="rounded-lg px-3 py-2 font-bold text-red-500">
            لسا مش مدفوع
          </span>
        </div>
      </div>
      <div></div>
    </div>
  );
}
