import LoginForm from "src/components/register/LoginForm";
import pandaStudent from "src/assets/pandaStudent.png";
import RegisterPage from "src/components/register/RegisterPage";

export default function LoginPage() {
  return (
    <RegisterPage
      FormComponent={LoginForm}
      imageSrc={pandaStudent}
      imageAlt="pandaStudent"
      mainColor="main-color"
    />
  );
}
