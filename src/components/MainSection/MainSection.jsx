import Departments from "./Departments";
import Products from "./Products";

export default function MainSection() {
  return (
    <div className="relative flex min-h-screen gap-y-11  py-5 h-auto w-screen flex-col items-center justify-start">
      <Departments />
      <Products />
    </div>
  );
}
