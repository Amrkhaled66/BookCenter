import ContainerHeader from "src/components/Profile/ContainerHeader";
import DeliveryForm from "src/components/Profile/DeliveryForm";

export default function DeliveryInfo() {
  return (
    <div className="flex h-auto w-full flex-1 flex-col font-cairo">
      <ContainerHeader
        title="بيانات الاستلام"
        subTitle="لو حابب تعدل بيانات الاستلام"
      />
      <div className="mx-auto flex h-auto w-[80%] flex-1 flex-col items-center gap-y-12 pt-10 sm:w-[50%]">
        <DeliveryForm />
      </div>
    </div>
  );
}
