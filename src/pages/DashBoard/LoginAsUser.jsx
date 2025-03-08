import { CiLogin } from "react-icons/ci";
import { FaPhone } from "react-icons/fa";

import AdminContainer from "src/components/ui/AdminContainer";
import InputFiled2nd from "src/components/ui/InputFiled2nd";
import TransparentBtn from "src/components/ui/TransparentBtn";

import FormatePhoneNum from "src/utils/formatePhoneNum";
import validatePhoneNum from "src/utils/validatePhoneNum";

import useColors from "src/hooks/useColors";
import useFormValidation from "src/hooks/useFormValidation";
import { useLoginAsUser } from "src/hooks/useAuthMutations";
import useAuth from "src/hooks/useAuth";
import Alert from "src/components/ui/Alert";

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
const LoginAsUser = () => {
  const { colors } = useColors();
  const { errors, handleValidation ,handleError} = useFormValidation(validate);
  const { login } = useAuth();

  const mainColor = colors.get("mainColor");
  const mutate = useLoginAsUser();

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const { phone } = Object.fromEntries(formData.entries());

    const { isValid, formattedData } = handleValidation(phone);

    if (!isValid) return;

    mutate.mutate(formattedData, {
      onSuccess: (data) => {
        login(data);
        Alert(
          "تم التسجيل",
          `تم تسجيل الدخول لرقم ${phone}`,
          "success",
          "حسنا",
        ).then(() => {
          window.open("/", "_blank");
        });
      },
      onError: (err) => handleError(err),
    });
  };

  return (
    <AdminContainer title="تسجيل الدخول كـ طالب" Icon={<CiLogin />}>
      <div className="w-full">
        <form
          onSubmit={onSubmit}
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
            className="text-white"
          >
            تسجيل الدخول
          </TransparentBtn>
        </form>
      </div>
    </AdminContainer>
  );
};

export default LoginAsUser;
