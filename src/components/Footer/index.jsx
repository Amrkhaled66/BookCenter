import LeftPart from "./LeftPart";
import RightPart from "./RightPart";

import WoodenSign from "src/assets/woodenSign.svg?react";
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="overflow-hidden bg-footer-color font-mainFont">
      <div className="container relative flex w-screen flex-col gap-y-24 py-20 font-black">
        <div className="flex flex-col-reverse gap-y-16 lg:flex-row">
          <RightPart />
          <LeftPart />
        </div>
        <WoodenSign className="absolute -bottom-5 right-0 hidden h-[200px] w-[200px] sm:block" />
        <p className="text-center font-cairo text-xl font-semibold text-white">
          &lt; All Copy Rights Reserved @{currentYear} &gt;
        </p>
      </div>
    </div>
  );
}
