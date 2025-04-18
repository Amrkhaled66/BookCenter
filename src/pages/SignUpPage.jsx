import SignUpForm from "src/components/register/SignUpForm";
import pandaImage2 from "src/assets/pandaStudent2.png";
import RegisterPage from "src/components/register/RegisterPage";

import useHandelPageTitle from "src/hooks/useHandelPageTitle";
import useColors from "src/hooks/useColors";
export default function SignUpPage() {
  useHandelPageTitle("انشاء حساب");
  const { colors } = useColors();
  let color = colors.get("secondColor");

  return (
    <RegisterPage
      FormComponent={SignUpForm}
      imageSrc={pandaImage2}
      imageAlt="pandaImage"
      mainColor={color}
    />
  );
}
