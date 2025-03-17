import AdminForm from "src/components/ui/AdminForm";
import ComboboxDropdown from "src/components/ui/ComboboxDropdown";
import Switch from "src/components/ui/Switch";
import Alert from "src/components/ui/Alert";

import { useState } from "react";
import useFormValidation from "src/hooks/useFormValidation";
import {
  useUpdateSeller,
  useGetAllSellers,
  useGetAllCategories,
} from "src/hooks/useAdminMutations";

import getItemId from "src/services/getItemId";
import Loader from "src/components/ui/icons/Loader";

export default function Update() {
  const { data: sellers, isLoading: sellersLoading } = useGetAllSellers();
  const { mutate, isPending } = useUpdateSeller();
  const { data: categories, isLoading: categoryLoading } =
    useGetAllCategories();

  const [form, setForm] = useState({
    visible: true,
    category: null,
  });
  const [seller, setSeller] = useState(null);

  const validate = (name) => {
    const errors = {};
    if (name.replace(/ /g, " ").length < 3)
      errors.name = "المادة اقل من 3 حروف ازاي 😭😭";

    if (!form.category) errors.category = "اختر القسم يـ ادمن";

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

    const id = seller._id;
    const sentData = { ...formattedData, ...form };

    mutate(
      { sentData, id },
      {
        onSuccess: Alert(
          "تم بنجاح",
          "تم تحديث البائع بنجاح",
          "success",
          "حسناً",
        ),
        onError: (error) => handleError(error),
      },
    );
  };

  if (sellersLoading || categoryLoading) {
    return (
      <p className="flex items-center gap-x-2">
        <Loader /> يتم التحميل
      </p>
    );
  }

  return (
    <div className="w-full space-y-12">
      <ComboboxDropdown
        width="sm:w-[50%] mx-auto w-[85%]"
        defaultValue="اختر البائع"
        options={sellers?.map((category) => category.name)}
        onChange={(value) => {
          const seller = sellers.find((seller) => seller.name === value);
          setSeller(seller);
        }}
      />
      <AdminForm
        key={seller?._id}
        isLoading={isPending}
        onSubmit={handleSubmit}
        error={errors.name}
        inputName={"name"}
        label="اسم البائع الجديد"
        SubmitText="تعديل"
        defaultInputValue={seller?.name}
      >
        <ComboboxDropdown
          defaultValue={seller?.category?.name || "اختر القسم"}
          options={categories.map((seller) => seller.name)}
          error={errors.category}
          onChange={(value) => {
            const id = getItemId(categories, value);
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
    </div>
  );
}
