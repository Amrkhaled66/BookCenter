import ComboboxDropdown from "src/components/ui/ComboboxDropdown";
import TransparentBtn from "src/components/ui/TransparentBtn";

import { useDeleteSubject,useGetAllSubjects} from "src/hooks/useAdminMutations";
import { useState } from "react";

import Alert from "src/components/ui/Alert";

export default function Delete() {
  const { data, isLoading } = useGetAllSubjects();
  const [chosenCategory, setChosenCategory] = useState(null);
  const { mutate, isPending } = useDeleteSubject();

  const getCategoryId = () => {
    return data.find((cat) => cat.name === chosenCategory);
  };

  const handleSubmit = () => {
    if (!chosenCategory)
      return Alert("حدث خطأ", "فين المادة اللي هنحذفها", "error", "حسناً");

    const { _id: id } = getCategoryId();

    mutate(id, {
      onSuccess: Alert("تم بنجاح", "تم حذف المادة بنجاح", "success", "حسناً"),
    });
  };

  if (isLoading) {
    return <p>Loading categories...</p>;
  }

  return (
    <div className="w-full space-y-12">
      <ComboboxDropdown
        width="sm:w-[50%] mx-auto w-[85%]"
        defaultValue="اختر المادة"
        options={data.map((category) => category.name)}
        onChange={setChosenCategory}
      />
      <TransparentBtn
        onClick={handleSubmit}
        bgColor="#f43f5e"
        className="mx-auto w-[85%] text-white sm:w-[50%]"
        loading={isPending}
      >
        حذف
      </TransparentBtn>
    </div>
  );
}
