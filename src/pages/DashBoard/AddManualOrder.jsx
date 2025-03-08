import AdminContainer from "src/components/ui/AdminContainer";

import InputFiled2nd from "src/components/ui/InputFiled2nd";
import TransparentBtn from "src/components/ui/TransparentBtn";

import useColors from "src/hooks/useColors";

import { VscDiffAdded } from "react-icons/vsc";
import { FaBarcode } from "react-icons/fa";

const AddManualOrder = () => {
  const { colors } = useColors();
  const mainColor = colors.get("mainColor");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <AdminContainer title="اٍنشاء اوردر يدوي" Icon={<VscDiffAdded />}>
      <div className="w-full">
        <form
          onSubmit={handleSubmit}
          className="mx-auto flex w-[85%] flex-col gap-y-9 text-sm sm:w-[50%]"
          action=""
        >
          <InputFiled2nd
            name="phone"
            icon={<FaBarcode />}
            label="كود الاوردر"
            type="text"
          />
          <TransparentBtn
            type="submit"
            bgColor={mainColor}
            className="text-white"
          >
            بحث
          </TransparentBtn>
        </form>
      </div>
    </AdminContainer>
  );
};

export default AddManualOrder;
