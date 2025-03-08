import AdminContainer from "src/components/ui/AdminContainer";
import UserProfile from "./UserProfile";
import Alert from "src/components/ui/Alert";

import InputFiled2nd from "src/components/ui/InputFiled2nd";
import TransparentBtn from "src/components/ui/TransparentBtn";

import useColors from "src/hooks/useColors";
import { useGetUserProfile } from "src/hooks/useAdminMutations";
import useFormValidation from "src/hooks/useFormValidation";
import { useState } from "react";

import { CgProfile } from "react-icons/cg";
import { FaPhone } from "react-icons/fa";

import FormatePhoneNum from "src/utils/formatePhoneNum";
import validatePhoneNum from "src/utils/validatePhoneNum";


const validate = (phone) => {
  const errors = {};
  phone = FormatePhoneNum(phone);
  if (!validatePhoneNum(phone)) errors.phone = "برجاء كتابة الرقم بشكل صحيح";
  return {
    data: {
      phone,
    },
    errors,
  };
};

const GetUserProfile = () => {
  const [userData, setUserData] = useState({});
  const { colors } = useColors();
  const { errors, handleValidation, handleError } = useFormValidation(validate);

  const mainColor = colors.get("mainColor");

  const { mutate, isPending } = useGetUserProfile();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { phone } = Object.fromEntries(formData.entries());

    const { isValid, formattedData } = handleValidation(phone);

    if (!isValid) return;

    mutate(formattedData.phone, {
      onSuccess: (data) => {
        Alert(
          "تم العثور علي المستخدم",
          `تم العثور علي ${data.user.name}`,
          "success",
          "حسناً",
        ).then(() => setUserData(data));
      },
      onError: (error) => {
        handleError(error);
      },
    });
  };

  return (
    <AdminContainer title="ملف المستخدم" Icon={<CgProfile />}>
      {userData ? (
        <UserProfile
          onSearchAnotherUser={() => setUserData(null)}
          data={userData}
        />
      ) : (
        <div className="w-full">
          <form
            onSubmit={handleSubmit}
            className="mx-auto flex w-[85%] flex-col gap-y-9 text-sm sm:w-[50%]"
            action=""
          >
            <InputFiled2nd
              name="phone"
              icon={<FaPhone />}
              label="رقم الهاتف"
              type="text"
              error={errors.phone}
            />
            <TransparentBtn
              type="submit"
              bgColor={mainColor}
              className="flex items-center justify-center text-white"
              disabled={isPending}
              loading={isPending}
            >
              بحث
            </TransparentBtn>
          </form>
        </div>
      )}
    </AdminContainer>
  );
};

export default GetUserProfile;
