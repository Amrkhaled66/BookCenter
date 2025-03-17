import { useState } from "react";
import useFormValidation from "src/hooks/useFormValidation";
import { useAddNewSubject } from "src/hooks/useAdminMutations";

import Switch from "src/components/ui/Switch";
import AdminForm from "src/components/ui/AdminForm";
import Alert from "src/components/ui/Alert";

const validate = (name) => {
  const errors = {};
  if (name.replace(/ /g, " ").length < 3)
    errors.name = "المادة اقل من 3 حروف ازاي 😭😭";
  return {
    data: {
      name,
    },
    errors,
  };
};

export default function Add() {
  const [isChecked, setIsChecked] = useState(true);
  const { errors, handleValidation, handleError } = useFormValidation(validate);
  const { mutate, isPending } = useAddNewSubject();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const { name } = Object.fromEntries(formData.entries());

    const { isValid, formattedData } = handleValidation(name);

    if (!isValid) return;

    const sentData = { ...formattedData, visible: isChecked };
    mutate(sentData, {
      onSuccess: () =>
        Alert("تم الاضافة", "تم اضافة المادة الجديد بنجاح", "success", "حسنا"),
    });
  };

  return (
    <AdminForm
      isLoading={isPending}
      onSubmit={handleSubmit}
      error={errors.name}
      inputName={"name"}
      label="اسم المادة الجديد"
      SubmitText="أضافة"
    >
      <Switch
        onChange={(e) => setIsChecked(e.target.checked)}
        checked={isChecked}
        label="ظاهر"
      />
    </AdminForm>
  );
}
