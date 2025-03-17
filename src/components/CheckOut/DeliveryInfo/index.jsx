import Header from "../Header";
import DeliveryInfoForm from "./DeliveryInfoForm";

import useColors from "src/hooks/useColors";
import TransparentBtn from "src/components/ui/TransparentBtn";
import Alert from "src/components/ui/Alert";

import DeliveryCar from "src/assets/DeliveryCar.png";

const deliveryIssuesList = [
  "لازم الرقم الاساسي يكون متاح ديمأ لان المندوب هيتواصل عليه",
  "العنوان لازم يكون كامل و واضح للمندوب",
];

export default function DeliveryInfo({ errors, formData, setFormData }) {
  const { colors } = useColors();
  const mainColor = colors.get("mainColor");

  const list = deliveryIssuesList
    .map((issue) => {
      return ` <li style="font-family:cairo; margin:5px 0; font-size:14px" >- ${issue}</li>`;
    })
    .join("");

  return (
    <div className="mx-auto flex w-[90%] flex-col gap-y-7 rounded-lg border-[1px] border-main-color bg-white px-8 pb-16 pt-8 drop-shadow-xl sm:w-[70%] sm:px-12 lg:w-[50%] xl:w-[40%]">
      <Header title={"بيانات التوصيل"} icon={DeliveryCar} />
      <DeliveryInfoForm
        errors={errors}
        formData={formData}
        setFormData={setFormData}
      />
      <TransparentBtn
        bgColor={mainColor}
        className="mx-auto w-full text-white"
        onClick={() =>
          Alert(
            "تنبيهات مهمة عن بيانات التسليم !!",
            "",
            "info",
            "تمام",
            `
            <div style="text-align: center; font-family: Arial, sans-serif;">
                <div style="
                    display: inline-block;
                    text-align: center;
                    margin: 5px auto;
                    padding: 15px;
                    border: 1px solid #6FB3A2;
                    border-radius: 8px;
                    background-color: #F9F9F9;
                    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
                ">
                    <ul style="
                        margin: 0;
                        padding: 0;
                        list-style: none;
                        text-align: right;
                        line-height: 1.9;
                    ">
                        ${list}
                    </ul>
                </div>
            </div>
                `,
          )
        }
      >
        تنبيهات مهمة عن بيانات التسليم !!
      </TransparentBtn>
    </div>
  );
}
