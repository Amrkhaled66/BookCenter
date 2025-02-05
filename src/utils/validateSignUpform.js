import validatePhoneNum from "./validatePhoneNum";

export default function ({
  firstName,
  lastName,
  phone,
  confirmPhone,
  password,
  confirmPassword,
}) {
  const errors = {};
  let data = {};

  let phoneValidation = validatePhoneNum(phone);
  let confirmPhoneValidation = validatePhoneNum(phone);
  const phoneRegex = /^01[0125][0-9]{8}$/;

  firstName = firstName.trim();
  lastName = lastName.trim();

  if (firstName.length < 3) {
    errors.firstName = "لازم الاسم الأول يبقا علي الاقل 3 احرف";
  }

  if (lastName.length < 3) {
    errors.lastName = "لازم الاسم الأخير يبقا علي الاقل 3 احرف";
  }

  if (!phoneRegex.test(phoneValidation)) {
    errors.phone = "الرقم مكتوب غلط ، يرجى التأكد من كتابة رقم الهاتف";
  }
  if (!phoneRegex.test(confirmPhoneValidation)) {
    errors.phone = "الرقم مكتوب غلط ، يرجى التأكد من كتابة رقم الهاتف";
  }

  if (confirmPhoneValidation !== phoneValidation) {
    errors.phone = "يرجى التأكد من كتابة تأكيد رقم الهاتف بنجاح";
  }

  if (password.length < 6) {
    errors.password = "لازم كلمة السر يبقا علي الاقل 6 احرف";
    return errors;
  }

  if (password !== confirmPassword) {
    errors.password = "يرجى التأكد من كتابة تأكيد كلمة المرور بنجاح";
  }
  data = {
    name: firstName + " " + lastName,
    phone: phoneValidation,
    password,
  };
  return { data, errors };
}
