import { error } from "jquery";
import validatePhoneNum from "./validatePhoneNum";

const savedErrors = {
  name: "الاسم لازم يكون ثلاثي",
  wrongPhone: "برجاء التاكد من كتابة الرقم بطريقة صحيحة",
  city: "اختار محافظتك",
  state: "اختار مركزك",
  descriptiveAddress:
    "برجاء كتابة العنوان (محافظة - مركز - قرية - شرح العنوان +علامة مميزة)",
  firstLikeSecondPhone: "الرقم البديل لازم يكون غير الرقم الاساسي",
};

export default function ({
  name="d d d",
  firstPhone,
  secondPhone,
  city,
  state,
  descriptiveAddress,
}) {
  const fullName = name.trim().split(" ");
  const errors = {};
  firstPhone = validatePhoneNum(firstPhone);
  secondPhone = validatePhoneNum(secondPhone);
  const phoneRegex = /^01[0125][0-9]{8}$/;



  if (fullName.length < 3) {
    errors.name = savedErrors.name;
  }

  if (!city) {
    errors.city = savedErrors.city;
  }

  if (!state) {
    errors.state = savedErrors.state;
  }
  if (descriptiveAddress?.trim().length < 10) {
    errors.descriptiveAddress = savedErrors.descriptiveAddress;
  }

  if (!phoneRegex.test(firstPhone)) {
    errors.firstPhone = savedErrors.wrongPhone;
  }

  if (!phoneRegex.test(secondPhone)) {
    errors.secondPhone = savedErrors.wrongPhone;
  }

  if (firstPhone === secondPhone) {
    errors.secondPhone = savedErrors.firstLikeSecondPhone;
  }

  return errors;
}
