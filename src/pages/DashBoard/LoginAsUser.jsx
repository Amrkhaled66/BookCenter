import { CiLogin } from "react-icons/ci";
import { FaPhone } from "react-icons/fa";

import AdminContainer from "src/components/ui/AdminContainer";
import AdminForm from "src/components/ui/AdminForm";

import FormatePhoneNum from "src/utils/formatePhoneNum";
import validatePhoneNum from "src/utils/validatePhoneNum";
import Alert from "src/components/ui/Alert";

import useAuth from "src/hooks/useAuth";
import useFormValidation from "src/hooks/useFormValidation";
import { useLoginAsUser } from "src/hooks/useAuthMutations";

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
  const { errors, handleValidation, handleError } = useFormValidation(validate);
  const { login } = useAuth();

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
      <AdminForm
        inputName="phone"
        error={errors.phone}
        label="رقم الهاتف"
        icon={<FaPhone />}
        onSubmit={onSubmit}
        isLoading={mutate.isPending}
      />
    </AdminContainer>
  );
};

export default LoginAsUser;
