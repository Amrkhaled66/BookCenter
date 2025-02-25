import Header from "../Header";
import InvoiceTable from "./InvoiceTable";
import InvoiceCta from "./InvoiceCta";
export default function OrderSummary({ city, onSubmit }) {
  return (
    <div className="mx-auto flex w-full -translate-y-5 flex-col gap-y-10 rounded-lg border-r-[1px] bg-white py-9 drop-shadow-2xl sm:w-[92%]">
      <Header title={"الفاتورة"} />
      <InvoiceTable city={city} />
      <InvoiceCta onSubmit={onSubmit} />
    </div>
  );
}
