import AdminLogInForm from "src/components/DashBoard/AdminLogInForm";
import adminPanda from "src/assets/adminPanda.png";
import RegisterPage from "src/components/register/RegisterPage";
import useColors from "src/hooks/useColors";
export default function AdminLogInPage() {
  const { colors } = useColors();
  let color = colors.get("thirdColor");
  return (
    <RegisterPage
      FormComponent={AdminLogInForm}
      imageSrc={adminPanda}
      imageAlt="adminPanda"
      mainColor={color}
    />
  );
}
