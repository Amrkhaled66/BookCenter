import ComboboxDropdown from "src/components/ui/ComboboxDropdown";
import TransparentBtn from "src/components/ui/TransparentBtn";

import { useDeleteSeller, useGetAllSellers } from "src/hooks/useAdminMutations";
import { useState } from "react";

import Alert from "src/components/ui/Alert";

export default function Delete() {
  const { data, isLoading } = useGetAllSellers();
  const [chosenCategory, setChosenCategory] = useState(null);
  const { mutate, isPending } = useDeleteSeller();

  const getCategoryId = () => {
    return data.find((cat) => cat.name === chosenCategory);
  };

  const handleSubmit = () => {
    if (!chosenCategory)
      return Alert("حدث خطأ", "فين البائع اللي هنحذفها", "error", "حسناً");

    const { _id: id } = getCategoryId();

    mutate(id, {
      onSuccess: Alert("تم بنجاح", "تم حذف البائع بنجاح", "success", "حسناً"),
    });
  };

  if (isLoading) {
    return <p>Loading categories...</p>;
  }

  return (
    <div className="w-full space-y-12">
      <ComboboxDropdown
        width="sm:w-[50%] mx-auto w-[85%]"
        defaultValue="اختر البائع"
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
