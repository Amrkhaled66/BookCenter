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

  phone = validatePhoneNum(phone);
  confirmPhone = validatePhoneNum(confirmPhone);

  if (firstName.trim().length < 3) {
    errors.firstName = "لازم الاسم الأول يبقا علي الاقل 3 احرف";
  }

  if (lastName.trim().length < 3) {
    errors.lastName = "لازم الاسم الأخير يبقا علي الاقل 3 احرف";
  }

  if (!phone) {
    errors.phone = "الرقم مكتوب غلط ، يرجى التأكد من كتابة رقم الهاتف";
  }

  if (password.length < 6) {
    errors.password = "لازم كلمة السر يبقا علي الاقل 6 احرف";
    return errors;
  }
  if (phone !== confirmPhone) {
    errors.phone = "يرجى التأكد من كتابة تأكيد رقم الهاتف بنجاح";
  }

  if (password !== confirmPassword) {
    errors.password = "يرجى التأكد من كتابة تأكيد كلمة المرور بنجاح";
  }

  return errors;
}
