import SignUpForm from "src/components/register/SignUpForm";
import pandaImage2 from "src/assets/pandaStudent2.png";
import RegisterPage from "src/components/register/RegisterPage";

import useHandelPageTitle from "src/hooks/useHandelPageTitle";
export default function SignUpPage() {
  useHandelPageTitle("انشاء حساب");

  return (
    <RegisterPage
      FormComponent={SignUpForm}
      imageSrc={pandaImage2}
      imageAlt="pandaImage"
      mainColor="secondColor"
    />
  );
}
