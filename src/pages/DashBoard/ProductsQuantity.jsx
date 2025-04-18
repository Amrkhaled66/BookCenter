import AdminContainer from "src/components/ui/AdminContainer";
import ComboboxDropdown from "src/components/ui/ComboboxDropdown";
import { RiStockLine } from "react-icons/ri";

import { useState } from "react";

import ReleaseReservedStock from "src/components/DashBoard/ProductsQuantity/ReleaseReservedStock";
import AddToStock from "src/components/DashBoard/ProductsQuantity/AddToStock";

const actionComponents = [
  {
    title: "هنخلي المنتجات المحجوزة قابلة للحجز ؟",
    element: (props) => <ReleaseReservedStock {...props} />,
  },
  {
    title: "أضافة الي العدد القابل للحجز",
    element: (props) => <AddToStock {...props} />,
  },
];

export default function ProductsQuantity() {
  const [action, setAction] = useState(null);

  return (
    <AdminContainer title="تعديل عدد المنتج" Icon={<RiStockLine />}>
      <div className="w-[85%] space-y-6 sm:w-[50%]">
        <ComboboxDropdown
          onChange={(value) => setAction(value)}
          options={actionComponents.map((option) => option.title)}
          defaultValue="هنعمل أيه؟"
        />
      </div>
      {action && actionComponents.find((a) => a.title === action).element()}
    </AdminContainer>
  );
}
