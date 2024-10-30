import Departments from "./Departments";
import Products from "./Products";

export default function MainSection() {
  return (
    <div className="relative flex h-screen w-screen flex-col items-center justify-start">
      <Departments />
      <Products />
    </div>
  );
}
