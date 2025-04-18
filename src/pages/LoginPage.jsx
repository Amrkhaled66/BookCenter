import LoginForm from "src/components/register/LoginForm";
import pandaStudent from "src/assets/pandaStudent.png";
import RegisterPage from "src/components/register/RegisterPage";

import useHandelPageTitle from "src/hooks/useHandelPageTitle";
import useColors from "src/hooks/useColors";
export default function LoginPage() {
  useHandelPageTitle("تسجيل الدخول");
  const { colors } = useColors();
  const mainColor = colors.get("mainColor");
  return (
    <RegisterPage
      FormComponent={LoginForm}
      imageSrc={pandaStudent}
      imageAlt="pandaStudent"
      mainColor={mainColor}
    />
  );
}
