import AdminLogInForm from "src/components/DashBoard/AdminLogInForm";
import adminPanda from "src/assets/adminPanda.png";
import RegisterPage from "src/components/register/RegisterPage";

export default function AdminLogInPage() {
  return (
    <RegisterPage
      FormComponent={AdminLogInForm}
      imageSrc={adminPanda}
      imageAlt="adminPanda"
      mainColor="thirdColor"
    />
  );
}
