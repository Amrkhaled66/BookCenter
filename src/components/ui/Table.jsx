import DataTable from "react-data-table-component";

import useColors from "src/hooks/useColors";

import Alert from "./Alert";

const handleViewAllProducts = (products) => {
  const productList = ["dfdf", "dfdfdf"];

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
    selector: (row) => row.name,
  },
  { name: "OrderNumber", selector: (row) => row.name, sortable: true },
  {
    name: "أجمالي سعر الأوردر",
    selector: (row) => row.name,
    wrap: true,
  },
  {
    name: "المشتريات",
    selector: (row) =>
      row.products && row.products.length ? (
        <>
          <button
            onClick={handleViewAllProducts}
            className="rounded-lg bg-second-color px-3 py-[6px] text-white transition-all duration-300 hover:scale-75"
          >
            😎  وريني
          </button>
        </>
      ) : (
        ""
      ),
  },
  { name: "حالة الدفع", selector: (row) => row.name },
  { name: "المشتريات", selector: (row) => row.position },
  { name: "المشتريات", selector: (row) => row.position },
  { name: "المشتريات", selector: (row) => row.position },
  { name: "المشتريات", selector: (row) => row.position },
  { name: "حالة الدفع", selector: (row) => row.position },
  { name: "حالة الشحن", selector: (row) => row.name },
];

const dataa = [
  {
    id: 1,
    name: "TigerTigerTigerTigerTigerTigerTigerTigerTigerTigerTigerTigerTigerTigerTigerTiger Nixon",
    products: ["Accountant", "d"],

    position: "System Architect",
    office: "Edinburgh",
  },
  {
    id: 2,
    name: " WintersWintersWintersWintersWintersWintersWintersWintersWintersWintersWintersWinters",
    products: ["Accountant", "d"],

    position: "Accountant",
    office: "Tokyo",
  },
  {
    id: 2,
    name: " Winters",
    products: ["Accountant", "d"],
    office: "Tokyo",
  },
  {
    id: 2,
    name: "Garrett WintersWintersWintersWintersWintersWintersWintersWintersWintersWintersWintersWintersWintersWintersWintersWinters",
    position: "Accountant",
    office: "Tokyo",
  },
  { id: 2, name: "Garrett Winters", position: "Accountant", office: "Tokyo" },
];

export default function Table() {
  const { colors } = useColors();

  const mainColor = colors.get("mainColor");

  return (
    <DataTable
      columns={columns}
      data={dataa}
      pagination
      //   highlightOnHover
      responsive
      className="table-scrollbar"
      pointerOnHover
      direction="rtl"
      paginationRowsPerPageOptions={[10, 30, 50, 100, 500, 1000]}
      noDataComponent={
        <div className="w-full rounded-lg bg-gray-200/70 py-5 text-center font-mainFont font-bold">
          لا توجد بيانات
        </div>
      }
      customStyles={{
        headCells: {
          style: {
            padding: "25px",
            fontWeight: "900",
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
            fontSize: "15px",
            textWrap: "wrap",
          },
        },

        rows: {
          style: {
            transition: "ease .2s",
            "&:nth-of-type(odd)": {
              backgroundColor: "#d1d5db",
            },
            "&:hover": {
              backgroundColor: mainColor,
              color: "#fff",
            },
          },
        },

        cells: {
          style: {
            padding: "20px",
            width: "50px",
            height: "fit-content",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            whiteSpace: "normal", // Allows text to wrap
            wordBreak: "break-word", // Ensures long words break properly
            overflow: "visible", // Ensures content is shown
            textOverflow: "clip", // Prevents "..."
          },
        },
      }}
    />
  );
}
