import { useState } from "react";

const useFormValidation = (validate) => {
  const [errors, setErrors] = useState({});

  const handleValidation = (formData) => {
    const { data: formattedData, errors: formErrors } = validate(formData);

    if (formErrors && Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
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
    } else if (error.status === 404) {
      errMessage = "مفيش اكونت للرقم ده";
    }
    setErrors({ phone: errMessage, email: errMessage });
  };

  return { errors, handleValidation, handleError };
};

export default useFormValidation;
