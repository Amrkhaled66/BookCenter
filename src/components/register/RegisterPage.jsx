import LeftSection from "src/components/register/LeftSection";
import RightSection from "src/components/register/RightSection";
import { Link } from "react-router-dom";
import HomeIcon from "src/components/ui/icons/HomeIcon";
import RegisterImg from "src/components/register/registerImg";

// Reusable RegisterPage Component
export default function RegisterPage({
  FormComponent,
  imageSrc,
  imageAlt,
  mainColor,
}) {
  return (
    <div
      className={`flex h-auto min-h-screen w-full bg-${mainColor} flex-col-reverse lg:flex-row`}
    >
      <Link
        className="fixed left-5 top-5 z-10 rounded-full bg-white p-3 transition-all duration-300 hover:brightness-75 hover:drop-shadow-2xl"
        to="/"
      >
        <HomeIcon />
      </Link>

      {/* Right section contains the form (Login or Signup) */}
      <RightSection>
        <FormComponent mainColor={mainColor} />
      </RightSection>

      {/* Left section contains the image */}
      <LeftSection>
        <RegisterImg src={imageSrc} alt={imageAlt} />
      </LeftSection>
    </div>
  );
}
