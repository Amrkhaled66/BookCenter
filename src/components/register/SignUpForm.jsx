import AuthForm from "src/components/register/Form";

import signupValidate from "src/utils/validateSignUpform";

import { useSignup } from "src/hooks/useAuthMutations";
export default function SignUpForm({ mainColor }) {
  return (
    <AuthForm
      title="أنشئ حسابك الآن :"
      description="ادخل علي حسابك بإدخال رقم الهاتف و كلمة المرور المسجل بهم من قبل"
      fields={[
        {
          fields: [
            { label: "الأسم الاول", inputType: "text", name: "firstName" },
            { label: "الأسم الأخير", inputType: "text", name: "lastName" },
          ],
          layout: "inline",
        },

        {
          layout: "block",
          fields: [{ label: "رقم الهاتف", inputType: "text", name: "phone" }],
        },
        {
          layout: "block",
          fields: [
            {
              label: "تأكيد رقم الهاتف",
              inputType: "text",
              name: "confirmPhone",
            },
          ],
        },
        {
          layout: "block",
          fields: [
            { label: "كلمة السر", inputType: "password", name: "password" },
          ],
        },
        {
          layout: "block",
          fields: [
            {
              label: "تأكيد كلمة السر",
              inputType: "password",
              name: "confirmPassword",
            },
          ],
        },
      ]}
      buttonText="أنشئ الحساب"
      redirectText="لديك حساب بالفعل ؟"
      redirectLink="/login"
      mainColor={mainColor}
      validate={signupValidate}
      mutationFn={useSignup}
    />
  );
}
