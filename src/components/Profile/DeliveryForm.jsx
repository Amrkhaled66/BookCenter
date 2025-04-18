import ComboboxDropdown from "src/components/ui/ComboboxDropdown";
import InputFiled2nd from "src/components/ui/InputFiled2nd";
import Toast from "src/components/ui/Toast";
import Loader from "src/components/ui/icons/Loader";
import { Icon } from "@iconify/react";

import { useDeliveryForm } from "src/hooks/useDeliveryForm";
import { useUpdateProfile } from "src/hooks/useUserMutations";
import { useCityState } from "src/hooks/useCityState";

import { setUser } from "src/services/authServices";

import validateCheckoutForm from "src/utils/validateCheckoutForm";
import { useState } from "react";
export default function DeliveryForm() {
  const { formData, updateFormData } = useDeliveryForm();
  const { mutate, isPending } = useUpdateProfile();
  const { cities, cityStates, isLoading } = useCityState(formData?.city || " ");

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validateCheckoutForm({ ...formData });
    if (Object.keys(errors).length > 0) {
      return setErrors(errors);
    }

    const city = cities?.find((c) => c.name === formData.city);
    const data = {
      cityId: city?._id,
      state: formData?.state,
      descriptiveAddress: formData?.descriptiveAddress,
      secondaryPhone: formData?.secondPhone,
    };
    mutate(data, {
      onSuccess: (data) => {
        Toast("تم تعديل بيانات الاستلام.", "success", "#eafff0");
        setUser(data.user);
        setErrors({});
      },
    });
  };

  if (isLoading) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col space-y-12">
      <ComboboxDropdown
        width="w-full"
        options={cities.map((city) => city?.name)}
        value={formData?.city|| ""}
        onChange={(value) => updateFormData("city", value)}
        defaultValue={"اختر محافظتك"}
        error={errors.city}
      />
      <ComboboxDropdown
        width="w-full"
        options={cityStates}
        value={formData?.state || ""}
        onChange={(value) => updateFormData("state", value)}
        defaultValue={"اختر المنطقة"}
        error={errors.state}
      />
      <InputFiled2nd
        error={errors.descriptiveAddress}
        icon={
          <Icon
            icon="ion:location"
            width="25"
            height="25"
            style={{ color: "#1c5075" }}
          />
        }
        label="العنوان"
        type="text"
        value={formData?.descriptiveAddress|| ""}
        required
        onChange={(e) => updateFormData("descriptiveAddress", e.target.value)}
      />
      <InputFiled2nd
        error={errors?.secondPhone}
        icon={
          <Icon
            icon="si:phone-enabled-fill"
            width="25"
            height="25"
            style={{ color: "#1c5075" }}
          />
        }
        required
        label="الهاتف البديل"
        type="text"
        value={formData?.secondPhone|| ""}
        onChange={(e) => updateFormData("secondPhone", e.target.value)}
      />

      <button
        type="submit"
        className="flex w-full items-center justify-center rounded-md border-[2px] border-second-color bg-second-color py-2 font-bold text-white transition-all duration-300 hover:bg-transparent hover:text-second-color"
      >
        {isPending ? <Loader /> : "حفظ التعديلات"}
      </button>

    </form>
  );
}
