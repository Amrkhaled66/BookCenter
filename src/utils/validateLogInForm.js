import FormatePhoneNum from "./formatePhoneNum";
import validatePhoneNum from "./validatePhoneNum";

export default function ({ email,phone, password }) {
  if (!phone || !password) return false;

  let data = {};
  const errors = {};

  phone = FormatePhoneNum(phone);

  if (!phone) {
    errors.phone = "يوجد خطأ في رقم الهاتف او كلمة السر";
  }
  if (!validatePhoneNum(phone)) {
    errors.phone = "برجاء كتابة الرقم بطريقة صحيحة";
  }
  data = {
    phone,
    password,
  };

  return { data, errors };
}
