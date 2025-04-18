import Header from "../Header";
import InvoiceTable from "./InvoiceTable";
import InvoiceCta from "./InvoiceCta";
export default function OrderSummary({ city, onSubmit,Loading }) {
  return (
    <div className="mx-auto flex w-full  flex-col gap-y-10 rounded-lg border-r-[1px] bg-white py-9 drop-shadow-2xl">
      <Header title={"الفاتورة"} />
      <InvoiceTable city={city} />
      <InvoiceCta onSubmit={onSubmit} Loading={Loading} />
    </div>
  );
}
