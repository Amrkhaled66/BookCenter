import { AiFillPhone } from "react-icons/ai";
import { IoIosUnlock } from "react-icons/io";

import AuthForm from "src/components/register/Form";

export default function LoginForm({ mainColor }) {
  return (
    <AuthForm
      title="تسجيل الدخول :"
      description="ادخل علي حسابك بإدخال رقم الهاتف و كلمة المرور المسجل بهم من قبل"
      fields={[
        {
          layout: "block",
          fields: [
            { label: "رقم الهاتف", inputType: "text", Icon: AiFillPhone },
          ],
        },
        {
          layout: "block",
          fields: [
            { label: "كلمة السر", inputType: "password", Icon: IoIosUnlock },
          ],
        },
      ]}
      buttonText="تسجيل الدخول"
      redirectText="لا يوجد لديك حساب؟"
      redirectLink="/signup"
      mainColor={mainColor}
    />
  );
}
