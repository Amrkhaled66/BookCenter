import { useState } from "react";

const useFormValidation = (validate) => {
  const [errors, setErrors] = useState({});

  const handleValidation = (formData) => {
    const { data: formattedData, errors } = validate(formData);

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return { isValid: false, formattedData: null };
    }

    setErrors({});
    return { isValid: true, formattedData };
  };

  const handleError = (error) => {
    let errMessage;
    if (error.status === 401) {
      errMessage = "خطأ في رقم الهاتف او في كلمة المرور";
    } else if (error.status === 409) {
      errMessage = "الرقم مسجل بالفعل علي الموقع";
    } else if (error.status === 400) {
      errMessage = "خطأ برجاء التواصل مع الدعم";
    }
    setErrors({ phone: errMessage });
  };

  return { errors, handleValidation, handleError };
};

export default useFormValidation; 