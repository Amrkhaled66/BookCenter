import DataTable from "react-data-table-component";

import useColors from "src/hooks/useColors";

export default function Table({ ...props }) {
  const { colors } = useColors();

  const mainColor = colors.get("mainColor");

  return (
    <DataTable
      {...props}
      responsive
      className="table-scrollbar"
      pointerOnHover
      direction="rtl"
      paginationRowsPerPageOptions={[5, 30, 50, 100, 500, 1000]}
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
            padding: "15px",

            fontSize: "13px",
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
