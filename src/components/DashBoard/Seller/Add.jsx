import { useState } from "react";
import { useGetAllCategories } from "src/hooks/useAdminMutations";
import useFormValidation from "src/hooks/useFormValidation";
import { useAddNewSeller } from "src/hooks/useAdminMutations";

import getItemId from "src/services/getItemId";

import Switch from "src/components/ui/Switch";
import AdminForm from "src/components/ui/AdminForm";
import Alert from "src/components/ui/Alert";
import ComboboxDropdown from "src/components/ui/ComboboxDropdown";
import Loader from "src/components/ui/icons/Loader";

export default function Add() {
  const [form, setForm] = useState({
    visible: true,
    category: null,
  });
  const { mutate, isPending } = useAddNewSeller();
  const { data: sellers, isLoading } = useGetAllCategories();

  const validate = (name) => {
    const errors = {};
    if (name.replace(/ /g, " ").length < 3)
      errors.name = "البائع اقل من 3 حروف ازاي 😭😭";
    if (!form.category) errors.category = "اختار القسم ي ادمن";
    return {
      data: {
        name,
      },
      errors,
    };
  };

  const { errors, handleValidation, handleError } = useFormValidation(validate);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const { name } = Object.fromEntries(formData.entries());

    const { isValid, formattedData } = handleValidation(name);

    if (!isValid) return;

    const sentData = { ...formattedData, ...form };
    mutate(sentData, {
      onSuccess: () =>
        Alert("تم الاضافة", "تم اضافة البائع الجديد بنجاح", "success", "حسنا"),
    });
  };

  if (isLoading) {
    return (
      <div>
        <Loader /> يتم التحميل
      </div>
    );
  }

  return (
    <AdminForm
      isLoading={isPending}
      onSubmit={handleSubmit}
      error={errors.name}
      inputName={"name"}
      label="اسم البائع الجديد"
      SubmitText="أضافة"
    >
      <ComboboxDropdown
        defaultValue="اختر القسم"
        name="category"
        options={sellers.map((seller) => seller.name)}
        error={errors.category}
        onChange={(value) => {
          const id = getItemId(sellers, value);
          setForm((prev) => {
            return {
              ...prev,
              category: id,
            };
          });
        }}
      />
      <Switch
        onChange={(e) =>
          setForm((prev) => {
            return {
              ...prev,
              visible: e.target.checked,
            };
          })
        }
        checked={form.visible}
        label="ظاهر"
      />
    </AdminForm>
  );
}
