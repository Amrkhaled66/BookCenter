import Header from "../Header";
import DeliveryInfoForm from "./DeliveryInfoForm";

import useColors from "src/hooks/useColors";
import TransparentBtn from "src/components/ui/TransparentBtn";
import Alert from "src/components/ui/Alert";

import DeliveryCar from "src/assets/DeliveryCar.png";

export default function DeliveryInfo({errors, formData, setFormData }) {
  const { colors } = useColors();
  const mainColor = colors.get("mainColor");

  return (
    <div className="mx-auto flex w-[90%] flex-col gap-y-7 rounded-lg border-[1px] border-main-color bg-white px-8 pb-16 pt-8 drop-shadow-xl sm:w-[70%] sm:px-12 lg:w-[50%] xl:w-[40%]">
      <Header title={"بيانات التوصيل"} icon={DeliveryCar} />
      <DeliveryInfoForm  errors={errors} formData={formData} setFormData={setFormData} />
      <TransparentBtn
        bgColor={mainColor}
        className="mx-auto w-full text-white"
        onClick={() =>
          Alert("تنبيهات مهمة عن بيانات التسليم !!", "", "info", "تمام")
        }
      >
        تنبيهات مهمة عن بيانات التسليم !!
      </TransparentBtn>
    </div>
  );
}
