import validatePhoneNum from "./validatePhoneNum";

export default function ({ phone, password }) {
  if (!phone || !password) return false;

  let data = {};
  const errors = {};


  phone = validatePhoneNum(phone);

  if (!phone) {
    errors.phone = "يوجد خطأ في رقم الهاتف او كلمة السر";
  }
  data = {
    phone,
    password,
  };

  return { data, errors };
}
