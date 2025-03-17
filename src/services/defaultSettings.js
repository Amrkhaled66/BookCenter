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
  failed: {
    text: "تم الغاء الفاتورة",
    className: "bg-red-50 text-red-900",
  },
};

export { ADMIN_PATH, paidStatus };
