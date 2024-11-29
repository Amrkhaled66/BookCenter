import logo from "src/assets/logo.svg";

import { Link } from "react-router-dom";

export default function RightSection({ children }) {
  return (
    <div className="relative flex h-auto  w-screen flex-col items-center justify-center rounded-se-[30px] rounded-ss-[30px] bg-white p-9 lg:container lg:w-[55%] lg:rounded-none lg:p-0">
      <Link
        to={"/"}
        className="absolute right-8 top-3 hidden w-full items-start  lg:flex"
      >
        <img src={logo} alt="logo" />
      </Link>
      {children}
    </div>
  );
}
