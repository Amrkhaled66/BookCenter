import { AiFillPhone } from "react-icons/ai";
import { IoIosUnlock } from "react-icons/io";

import AuthForm from "src/components/register/Form";

import validateAdminLogin from "src/utils/validateAdminLogin";
import { useAdminLogin } from "src/hooks/useAuthMutations";
export default function AdminLogInForm({ mainColor }) {
  return (
    <AuthForm
      title="لوحة التحكم :"
      description="صباح الشقي ايها الباندا اشتغل بضمير عشان ربنا شايفك "
      buttonText="تسجيل الدخول"
      fields={[
        {
          layout: "block",
          fields: [
            {
              label: "الايميل",
              inputType: "email",
              Icon: AiFillPhone,
              name: "email",
              error: Error.phone,
            },
          ],
        },
        {
          layout: "block",
          fields: [
            {
              label: "كلمة السر",
              inputType: "password",
              Icon: IoIosUnlock,
              name: "password",
            },
          ],
        },
      ]}
      mainColor={mainColor}
      validate={validateAdminLogin}
      mutationFn={useAdminLogin}
    />
  );
}
