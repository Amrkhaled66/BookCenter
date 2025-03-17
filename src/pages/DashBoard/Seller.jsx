import { useState } from "react";
import AdminContainer from "src/components/ui/AdminContainer";
import ComboboxDropdown from "src/components/ui/ComboboxDropdown";
import { GiTeacher } from "react-icons/gi";

import Add from "src/components/DashBoard/Seller/Add";
import Delete from "src/components/DashBoard/Seller/Delete";
import Update from "src/components/DashBoard/Seller/Update";

const statePages = {
  أضافة: <Add />,
  تعديل: <Update />,
  حذف: <Delete />,
};

export default function Seller() {
  const [state, setState] = useState(null);

  return (
    <AdminContainer title="أضافة وتعديل البائعين" Icon={<GiTeacher />}>
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
