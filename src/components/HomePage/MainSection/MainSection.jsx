import Departments from "./Departments/Departments";
import Products from "./Products";

export default function MainSection() {
  return (
    <div className=" ">
      <div className=" container mt-36 flex flex-col  items-center justify-start gap-y-11 py-5">
        <Departments />
        <Products />
      </div>
    </div>
  );
}
