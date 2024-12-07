import validatePhoneNum from "./validatePhoneNum";

export default function ({ phone, password }) {
  if (!phone || !password) return false;

  const errors = {};
  const phoneRegex = /^01[0125][0-9]{8}$/;

  phone = validatePhoneNum(phone);

  if (!phoneRegex.test(phone)) {
    errors.phone = "يوجد خطأ في رقم الهاتف او كلمة السر";
  }

  return errors;
}
