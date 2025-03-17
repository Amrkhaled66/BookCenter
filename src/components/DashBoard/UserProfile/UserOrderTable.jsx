import Table from "src/components/ui/Table";

import Alert from "src/components/ui/Alert";
import arabicData from "src/utils/arabicData";

import { paidStatus } from "src/services/defaultSettings";

const handleViewAllProducts = (products) => {
  const productList = products.map((product) => {
    return ` <li style="font-family:cairo; margin:5px 0; font-size:16px" >{${product?.quantity} : ${product?.product?.name}}</li>`;
  });

  Alert(
    "منتجات الاوردر",
    "",
    "info",
    "اقفلني",
    `
              <div style="text-align: center; font-family: Arial, sans-serif;">
                  <div style="
                      display: inline-block;
                      text-align: center;
                      margin: 5px auto;
                      padding: 15px;
                      border: 1px solid #6FB3A2;
                      border-radius: 8px;
                      background-color: #F9F9F9;
                      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
                  ">
                      <ul style="
                          margin: 0;
                          padding: 0;
                          list-style: none;
                          text-align: center;
                          line-height: 1.5; 
                      ">
                          ${productList}
                      </ul>
                  </div>
              </div>
                  `,
  );
};

const columns = [
  {
    name: "OrderId",
    selector: (row) => row._id,
    wrap: true,
  },
  { name: "OrderNumber", selector: (row) => row?.name },
  {
    name: "أجمالي سعر الأوردر",
    selector: (row) => row.totalPrice,
    wrap: true,
    sortable: true,
  },
  {
    name: "المشتريات",
    selector: (row) =>
      row.products && row.products.length ? (
        <button
          onClick={() => handleViewAllProducts(row.products)}
          className="rounded-lg bg-second-color px-3 py-[6px] text-white transition-all duration-300 hover:scale-90"
        >
          😎 وريني
        </button>
      ) : (
        ""
      ),
  },
  {
    name: "حالة الدفع",
    selector: (row) => (
      <div
        className={`rounded-lg px-2 py-1 font-bold ${paidStatus[row.paymentStatus].className}`}
      >
        {paidStatus[row.paymentStatus].text}
      </div>
    ),
  },
  {
    name: "وقت الدفع",
    selector: (row) => arabicData(row.createdAt),
    wrap: true,
    sortable: true,
  },
  { name: "حالة الشحن", selector: (row) => row?.position },
  {
    name: "اِجمالي عدد المشتريات",
    selector: (row) => row.products?.length,
    sortable: true,
  },
  { name: "سعر الشحن ", selector: (row) => row.shippingPrice, sortable: true },
  {
    name: "سعر المنتجات ",
    selector: (row) => row.productsPrice,
    sortable: true,
  },
  {
    name: " الفاتورة",
    selector: (row) =>
      row.invoiceLink && (
        <button className="rounded-lg bg-fourth-color px-3 py-[6px] text-black transition-all duration-300 hover:scale-90">
          <a className="underline" href={row.invoiceLink} target="_blank">
            وريني الفلوس
          </a>
        </button>
      ),
  },
  { name: " المحافظة", selector: (row) => row?.shippingAddress?.city?.name },
  { name: " المركز", selector: (row) => row.shippingAddress.state },
  {
    name: " العنوان",
    selector: (row) => row.shippingAddress.descriptiveAddress,
    wrap: true,
  },
  {
    name: " تاريخ الاوردر",
    selector: (row) => arabicData(row.createdAt),
    wrap: true,
    sortable: true,
  },
];

export default function UserOrderTable({ orders }) {
  return (
    <Table pagination paginationPerPage={5} columns={columns} data={orders} />
  );
}
