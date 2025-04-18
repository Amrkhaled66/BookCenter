import FormInput from "./FormInput";

import ComboboxDropdown from "src/components/ui/ComboboxDropdown";

import { useCityState } from "src/hooks/useCityState";

export default function DeliveryInfoForm({ errors, formData, setFormData }) {
  const { cities, cityStates, isLoading } = useCityState(formData?.city);

  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form
      className="mx-auto flex w-full flex-col gap-x-7 gap-y-5 py-5"
      action=""
    >
      <FormInput
        onChange={onChange}
        name="name"
        defaultValue={formData?.name || "" }
        label={"الاسم بالكامل "}
        type="text"
        error={errors?.name}
      />
      <FormInput
        onChange={onChange}
        name="firstPhone"
        defaultValue={formData?.firstPhone || ""}
        label={"الرقم الاساسي"}
        type="text"
        error={errors?.firstPhone}
      />
      <FormInput
        onChange={onChange}
        name="secondPhone"
        defaultValue={formData?.secondPhone || ""}
        label={"الرقم البديل"}
        type="text"
        error={errors?.secondPhone}
      />
      <ComboboxDropdown
        onChange={(value) =>
          setFormData((prev) => ({
            ...prev,
            city: value,
            state: "",
          }))
        }
        width="w-full"
        options={isLoading ? "يتم التحميل..." : cities?.map((city) => city?.name)}
        value={formData?.city}
        defaultValue="اختار محافظتك"
        label={"المحافظة"}
        error={errors?.city}
      />
      <ComboboxDropdown
        onChange={(value) =>
          setFormData((prev) => ({
            ...prev,
            state: value,
          }))
        }
        width="w-full"
        options={isLoading ? "يتم التحميل..." : cityStates}
        value={formData?.state}
        defaultValue="اختار مركزك"
        label={"المركز"}
        error={errors?.state}
      />
      <FormInput
        onChange={onChange}
        name="descriptiveAddress"
        defaultValue={formData?.descriptiveAddress || ""}
        label={"العنوان بالتفصيل"}
        type="text"
        error={errors?.descriptiveAddress}
      />
    </form>
  );
}
