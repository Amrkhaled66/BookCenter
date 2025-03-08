// import react icons
import { CiLogin } from "react-icons/ci";
import { VscDiffAdded } from "react-icons/vsc";
import { CgProfile } from "react-icons/cg";

export const links = [
  {
    name: "تسجيل الدخول كـ طالب",
    icon: <CiLogin />,
    to: "loginAsUser",
  },
  {
    name: "اٍنشاء اوردر يدوي",
    icon: <VscDiffAdded />,
    to: "addManualOrder",
  },
  {
    name: "ملف المستخدم",
    icon: <CgProfile />,
    to: "GetUserProfile",
  },
  {
    name: "أضافة منتج",
    icon: <CgProfile />,
    to: "addNewProduct",
  },
  {
    name: "أضافة مادة جديدة",
    icon: <CgProfile />,
    to: "addNewSubject",
  },
  {
    name: "أضافة صف جديد",
    icon: <CgProfile />,
    to: "addNewGrade",
  },
];
