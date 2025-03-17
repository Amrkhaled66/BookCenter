import AdminContainer from "src/components/ui/AdminContainer";
import Add from "src/components/DashBoard/Product/Add";
import Update from "src/components/DashBoard/Product/Update";
import Delete from "src/components/DashBoard/Product/Delete";
import ComboboxDropdown from "src/components/ui/ComboboxDropdown";

import { useState } from "react";

import { FaBoxOpen } from "react-icons/fa";

const statePages = {
  أضافة: <Add />,
  تعديل: <Update />,
  حذف: <Delete />,
};

export default function Product() {
  const [state, setState] = useState(null);

  return (
    <AdminContainer title="أضافة وتعديل منتج" Icon={<FaBoxOpen />}>
      <ComboboxDropdown
        onChange={(value) => setState(value)}
        options={["أضافة", "تعديل", "حذف"]}
        defaultValue="هنعمل ايه دلوقتي ؟"
        width=" w-[85%] sm:w-[50%]"
      />
      {statePages[state]}
    </AdminContainer>
  );
}
