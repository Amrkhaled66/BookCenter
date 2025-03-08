import FormatePhoneNum from "./formatePhoneNum";
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

  let FormattedPhone = FormatePhoneNum(phone);
  let formattedConfirmPhone = FormatePhoneNum(confirmPhone);

  firstName = firstName.trim();
  lastName = lastName.trim();

  if (firstName.length < 3) {
    errors.firstName = "لازم الاسم الأول يبقا علي الاقل 3 احرف";
  }

  if (lastName.length < 3) {
    errors.lastName = "لازم الاسم الأخير يبقا علي الاقل 3 احرف";
  }

  if (!validatePhoneNum(FormattedPhone)) {
    errors.phone = "الرقم مكتوب غلط ، يرجى التأكد من كتابة رقم الهاتف";
  }
  if (!validatePhoneNum(formattedConfirmPhone)) {
    errors.phone = "الرقم مكتوب غلط ، يرجى التأكد من كتابة رقم الهاتف";
  }

  if (formattedConfirmPhone !== FormattedPhone) {
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
    phone: FormattedPhone,
    password,
  };
  return { data, errors };
}
