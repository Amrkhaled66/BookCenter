import { useDeliveryForm } from "src/hooks/useDeliveryForm";
import { useCityState } from "src/hooks/useCityState";
import { useUpdateProfile } from "src/hooks/useUserMutations";

import ContainerHeader from "src/components/Profile/ContainerHeader";
import DeliveryForm from "src/components/Profile/DeliveryForm";
import Loader from "src/components/ui/icons/Loader";
import Toast from "src/components/ui/Toast";

export default function DeliveryInfo() {
  const { formData, updateFormData } = useDeliveryForm();
  const { cities, cityStates, isLoading } = useCityState(formData.city);
  const { mutate, isPending } = useUpdateProfile();

  const handleSubmit = () => {
    const city = cities?.find((c) => c.name === formData.city);
    const data = {
      cityId: city?._id,
      state: formData.state,
      descriptiveAddress: formData.descriptiveAddress,
      secondaryPhone: formData.secondaryPhone,
    };
    mutate(data, {
      onSuccess: () => {
        Toast("تم تعديل بيانات الاستلام.", "success", "#eafff0");
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
    <div className="flex h-auto w-full flex-1 flex-col font-cairo">
      <ContainerHeader
        title="بيانات الاستلام"
        subTitle="لو حابب تعدل بيانات الاستلام"
      />
      <div className="mx-auto flex h-auto w-[80%] flex-1 flex-col items-center gap-y-12 pt-10 sm:w-[50%]">
        <DeliveryForm
          formData={formData}
          updateFormData={updateFormData}
          cityStates={cityStates}
          cities={cities}
        />
        <button
          type="submit"
          onClick={handleSubmit}
          className="flex w-full items-center justify-center rounded-md border-[2px] border-second-color bg-second-color py-2 font-bold text-white transition-all duration-300 hover:bg-transparent hover:text-second-color"
        >
          {isPending ? <Loader /> : "حفظ التعديلات"}
        </button>
      </div>
    </div>
  );
}
