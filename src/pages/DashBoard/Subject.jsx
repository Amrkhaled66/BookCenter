import { useState } from "react";
import AdminContainer from "src/components/ui/AdminContainer";
import ComboboxDropdown from "src/components/ui/ComboboxDropdown";
import { GiMaterialsScience } from "react-icons/gi";

import Add from "src/components/DashBoard/SubjectServices/Add";
import Delete from "src/components/DashBoard/SubjectServices/Delete";
import Update from "src/components/DashBoard/SubjectServices/Update";

const statePages = {
  أضافة: <Add />,
  تعديل: <Update />,
  حذف: <Delete />,
};

export default function Subject() {
  const [state, setState] = useState(null);

  return (
    <AdminContainer title="أضافة وتعديل المواد" Icon={<GiMaterialsScience />}>
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
