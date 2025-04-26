const ADMIN_PATH = "bookCenter-adminDashBoard";
const paidStatus = {
  paid: {
    text: "مدفوع",
    className: "bg-green-100  text-green-900",
  },
  pending: {
    text: "في انتظار الدفع",
    className: "bg-yellow-50 text-yellow-800",
  },
  expired: {
    text: "تم الغاء الفاتورة",
    className: "bg-red-50 text-red-900",
  },
  manual: {
    text: "تم التاكيد من الدعم",
    className: "bg-green-100  text-green-900",
  },
};
const NEXT_ITEM_FEES = 6;

export { ADMIN_PATH, paidStatus, NEXT_ITEM_FEES };
