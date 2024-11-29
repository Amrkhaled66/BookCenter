import AuthForm from "src/components/register/Form";

export default function SignUpForm({ mainColor }) {
  return (
    <AuthForm
      title="أنشئ حسابك الآن :"
      description="ادخل علي حسابك بإدخال رقم الهاتف و كلمة المرور المسجل بهم من قبل"
      fields={[
        {
          fields: [
            { label: "الأسم الاول", inputType: "text" },
            { label: "الأسم الأخير", inputType: "text" },
          ],
          layout: "inline",
        },

        {
          layout: "block",
          fields: [{ label: "رقم الهاتف", inputType: "text" }],
        },
        {
          layout: "block",
          fields: [{ label: "تأكيد رقم الهاتف", inputType: "text" }],
        },
        {
          layout: "block",
          fields: [{ label: "كلمة السر", inputType: "password" }],
        },
        {
          layout: "block",
          fields: [{ label: "تأكيد كلمة السر", inputType: "password" }],
        },
      ]}
      buttonText="أنشئ الحساب"
      redirectText="لديك حساب بالفعل ؟"
      redirectLink="/login"
      mainColor={mainColor}
    />
  );
}
