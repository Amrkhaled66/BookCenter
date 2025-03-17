import AdminContainer from "src/components/ui/AdminContainer";
import AddNewCategory from "src/components/DashBoard/CategoryServices/AddNewCategory";
import UpdateCategory from "src/components/DashBoard/CategoryServices/UpdateCategory";
import DeleteCategory from "src/components/DashBoard/CategoryServices/DeleteCategory";
import ComboboxDropdown from "src/components/ui/ComboboxDropdown";

import { useState } from "react";

import { MdOutlineCategory } from "react-icons/md";

const statePages = {
  أضافة: <AddNewCategory />,
  تعديل: <UpdateCategory />,
  حذف: <DeleteCategory />,
};

export default function Category() {
  const [state, setState] = useState(null);

  return (
    <AdminContainer title="أضافة وتعديل الأقسام" Icon={<MdOutlineCategory />}>
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
