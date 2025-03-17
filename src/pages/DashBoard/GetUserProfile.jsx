import AdminContainer from "src/components/ui/AdminContainer";
import Alert from "src/components/ui/Alert";

import AdminForm from "src/components/ui/AdminForm";

import { useGetUserId } from "src/hooks/useAdminMutations";
import useFormValidation from "src/hooks/useFormValidation";

import { CgProfile } from "react-icons/cg";
import { FaPhone } from "react-icons/fa";

import FormatePhoneNum from "src/utils/formatePhoneNum";
import validatePhoneNum from "src/utils/validatePhoneNum";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const { errors, handleValidation, handleError } = useFormValidation(validate);
  const { mutate, isPending } = useGetUserId();

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
          `لقيناه الحمد لله`,
          "success",
          "حسناً",
        ).then(() => navigate(`${data.id}`));
      },
      onError: (error) => {
        handleError(error);
      },
    });
  };

  return (
    <AdminContainer title="ملف المستخدم" Icon={<CgProfile />}>
      <AdminForm
        inputName="phone"
        onSubmit={handleSubmit}
        icon={<FaPhone />}
        error={errors.phone}
        label="رقم الهاتف"
        isLoading={isPending}
      />
    </AdminContainer>
  );
};

export default GetUserProfile;
