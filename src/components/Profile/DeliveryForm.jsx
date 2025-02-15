import ComboboxDropdown from "src/components/ui/ComboboxDropdown";
import InputFiled2nd from "src/components/ui/InputFiled2nd";
import { Icon } from "@iconify/react";

export default function DeliveryForm({
  formData,
  updateFormData,
  cityStates,
  cities,
}) {
  return (
    <form className="flex w-full flex-col space-y-12">
      <ComboboxDropdown
        width="w-full"
        options={cities.map((city) => city.name)}
        value={formData.city}
        onChange={(value) => updateFormData("city", value)}
        defaultValue={"اختر محافظتك"}
      />
      <ComboboxDropdown
        width="w-full"
        options={cityStates}
        value={formData.state}
        onChange={(value) => updateFormData("state", value)}
        defaultValue={"اختر المنطقة"}
      />
      <InputFiled2nd
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
        value={formData.descriptiveAddress}
        onChange={(e) => updateFormData("descriptiveAddress", e.target.value)}
      />
      <InputFiled2nd
        icon={
          <Icon
            icon="si:phone-enabled-fill"
            width="25"
            height="25"
            style={{ color: "#1c5075" }}
          />
        }
        label="الهاتف البديل"
        type="text"
        value={formData.secondaryPhone}
        onChange={(e) => updateFormData("secondaryPhone", e.target.value)}
      />
    </form>
  );
}
