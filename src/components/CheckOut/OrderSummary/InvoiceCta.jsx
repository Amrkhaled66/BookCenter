import TransparentBtn from "src/components/ui/TransparentBtn";
import useColors from "src/hooks/useColors";

const CoponBtn = () => {
  const { colors } = useColors();

  const mainColor = colors.get("mainColor");
  return (
    <form className="flex w-full " action="">
      <input
        type="text"
        className="w-[75%] rounded-lg border-2 border-gray-color px-3 py-2 outline-none ring-main-color transition-all duration-300 focus:ring-1"
        placeholder="لو معاك كوبون خصم اكتبه هنا "
      />
      <TransparentBtn
        bgColor={mainColor}
        type="submit"
        className="mx-auto w-[20%] text-sm font-bold text-white"
      >
        تطبيق
      </TransparentBtn>
    </form>
  );
};

export default function OrderCheckoutSummary({ onSubmit }) {
  const { colors } = useColors();

  const secondColor = colors.get("secondColor");

  return (
    <div className="mx-auto flex w-[85%] flex-col gap-y-8 md:w-[50%] lg:w-[40%]">
      <CoponBtn />
      <TransparentBtn
        onClick={onSubmit}
        bgColor={secondColor}
        className="mx-auto w-full rounded-lg font-bold text-white"
      >
        الذهاب للدفع
      </TransparentBtn>
    </div>
  );
}
