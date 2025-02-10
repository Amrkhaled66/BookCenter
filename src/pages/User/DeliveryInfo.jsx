import { useState } from "react";

import ContainerHeader from "src/components/Profile/ContainerHeader";
import ComboboxDropdown from "src/components/ui/ComboboxDropdown";
import InputFiled2nd from "src/components/ui/InputFiled2nd";

// icons
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";

export default function DeliveryInfo({}) {
  const [formData, setFormData] = useState({
    government: "Cairo",
    state: "",
    address: "",
    secondaryPhone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { government, state, address, secondaryPhone, deliveryDate } =
      formData;

    formData;
    // onSubmit?.({
    //   government,
    //   state,
    //   address,
    //   secondaryPhone,
    // });
  };

  return (
    <div className="flex h-auto w-full flex-1 flex-col font-cairo">
      <ContainerHeader
        title="بيانات الاستلام"
        subTitle="لو حابب تعدل بيانات الاستلام"
      />
      <div className="mx-auto flex h-auto w-full flex-1 flex-col items-center pt-10">
        <form
          className="flex w-[80%] flex-col space-y-12 sm:w-[50%]"
          onSubmit={handleSubmit}
        >
          {/* Government ComboboxDropdown */}
          <ComboboxDropdown
            width={"w-full"}
            options={["Cairo"]}
            value={formData.government}
            onChange={(value) =>
              setFormData({ ...formData, government: value })
            }
          />
          <ComboboxDropdown
            width={"w-full"}
            options={["Alexandria", "Aswan", "Asyut", "Beheira"]}
            value={formData.government}
            onChange={(value) =>
              setFormData({ ...formData, government: value })
            }
          />
          <InputFiled2nd
            icon={<FaLocationDot />}
            label={"العنوان"}
            type={"text"}
          />
          <InputFiled2nd
            icon={<FaPhone />}
            label={"الهاتف البديل"}
            type={"text"}
          />

          <div className="flex pt-10">
            <button
              type="submit"
              className="font-Cairo w-full rounded-xl border-2 bg-second-color px-12 py-3 text-xl font-semibold text-white transition-all duration-300 hover:border-second-color hover:bg-transparent hover:text-second-color"
            >
              حفظ التعديلات
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
