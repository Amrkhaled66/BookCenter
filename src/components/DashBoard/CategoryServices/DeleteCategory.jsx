import ComboboxDropdown from "src/components/ui/ComboboxDropdown";
import TransparentBtn from "src/components/ui/TransparentBtn";

import { useGetAllCategories } from "src/hooks/useAdminMutations";
import { useDeleteCategory } from "src/hooks/useAdminMutations";
import { useState } from "react";

import Alert from "src/components/ui/Alert";

export default function DeleteCategory() {
  const { data, isLoading } = useGetAllCategories();
  const [chosenCategory, setChosenCategory] = useState(null);
  const { mutate, isPending } = useDeleteCategory();

  const getCategoryId = () => {
    return data.find((cat) => cat.name === chosenCategory);
  };

  const handleSubmit = () => {
    if (!chosenCategory)
      return Alert("حدث خطأ", "فين القسم اللي هنحذفه", "error", "حسناً");

    const { _id: id } = getCategoryId();

    mutate(id, {
      onSuccess: Alert("تم بنجاح", "تم حذف القسم بنجاح", "success", "حسناً"),
    });
  };

  if (isLoading) {
    return <p>Loading categories...</p>;
  }

  return (
    <div className="w-full space-y-12">
      <ComboboxDropdown
        width=" w-full"
        defaultValue="اختر القسم"
        options={data.map((category) => category.name)}
        onChange={setChosenCategory}
      />
      <TransparentBtn
        onClick={handleSubmit}
        bgColor="#f43f5e"
        className="mx-auto w-full text-white "
        loading={isPending}
      >
        حذف
      </TransparentBtn>
    </div>
  );
}
