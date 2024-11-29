import SignUpForm from "src/components/register/SignUpForm";
import pandaImage2 from "src/assets/pandaStudent2.png";
import RegisterPage from "src/components/register/RegisterPage";

export default function SignUpPage() {
  return (
    <RegisterPage
      FormComponent={SignUpForm}
      imageSrc={pandaImage2}
      imageAlt="pandaImage"
      mainColor="second-color"
    />
  );
}
