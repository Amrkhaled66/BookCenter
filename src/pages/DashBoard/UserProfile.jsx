import InputFiled2nd from "src/components/ui/InputFiled2nd";
import TransparentBtn from "src/components/ui/TransparentBtn";
import ProfileDetails from "../User/ProfileDetails";

import useColors from "src/hooks/useColors";
import useFormValidation from "src/hooks/useFormValidation";

import { RiLockPasswordLine } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa";

import CurlyLine from "src/assets/CurlyLine.svg?react";
import Table from "src/components/ui/Table";

const validate = (pass) => {
  const errors = {};

  // reformat
  pass = pass?.replace(/ /g, "");

  // validate pass
  if (pass?.replace(/ /g, "").length < 6)
    errors.pass = "الباسورد لازم يكون 6 حروف اقل حاجة";

  return {
    data: {
      pass,
    },
    errors,
  };
};

const UserProfile = ({ data, onSearchAnotherUser }) => {
  const { colors } = useColors();
  const { errors, handleValidation, handleError } = useFormValidation(validate);
  console.log(data);

  const mainColor = colors.get("mainColor");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { phone } = Object.fromEntries(formData.entries());

    const { isValid, formattedData } = handleValidation(phone);

    if (!isValid) return;
  };

  return (
    <div className="w-full">
      <div className="flex w-full flex-col gap-y-16">
        <button
          onClick={onSearchAnotherUser}
          className="mr-12 flex w-fit items-center gap-x-1 rounded-lg bg-fourth-color px-4 py-3 text-sm text-black underline transition-all duration-500 ease-in-out hover:scale-105 hover:drop-shadow-xl"
        >
          <FaArrowRight /> العودة للخلف والبحث عن رقم اخر
        </button>
        <div className="mx-auto w-fit space-y-4">
          <p className="text-center text-sm">تم العثور علي الطالب</p>
          <p className="text-center text-3xl text-black underline">
            {data?.user?.phone}
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mx-auto flex w-[85%] flex-col gap-y-9 text-sm sm:w-[50%]"
          action=""
        >
          <InputFiled2nd
            name="phone"
            icon={<RiLockPasswordLine />}
            label="الرقم السري الجديد"
            type="text"
            error={errors.pass}
          />
          <TransparentBtn
            type="submit"
            bgColor={mainColor}
            className="text-white"
          >
            تغيير كلمة السر
          </TransparentBtn>
        </form>

        <div className="mx-auto w-[80%] space-y-9 text-base text-black">
          <p className="mx-auto w-fit text-center font-cairo text-3xl font-bold text-main-color">
            بيانات الطالب
            <CurlyLine className="mx-auto w-[90%]" />
          </p>
          <ProfileDetails user={data.user} />
        </div>
        <div className="mx-auto h-1 w-[50%] rounded-xl bg-zinc-300 drop-shadow-md"></div>
        <div className="mx-auto w-[90%] space-y-9 text-base text-black">
          <p className="mx-auto w-fit text-center font-cairo text-3xl font-bold text-main-color">
            أوردرات الطالب
            <CurlyLine className="mx-auto w-[90%]" />
          </p>
          <div className="overflow-hidden rounded-md w-full">
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
