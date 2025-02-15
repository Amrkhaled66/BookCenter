import LeftPart from "./LeftPart";
import RightPart from "./RightPart";

import WoodenSign from "src/assets/woodenSign.svg?react";
export default function Footer() {
  return (
    <div className="bg-footer-color overflow-hidden font-mainFont">
      <div className="container relative flex w-screen flex-col gap-y-24  py-20 font-black">
        <div className="flex flex-col-reverse gap-y-16 lg:flex-row">
          <RightPart />
          <LeftPart />
        </div>
        <WoodenSign className="absolute -bottom-5 hidden sm:block right-0 h-[200px] w-[200px]" />
        <p className="text-center font-cairo text-xl font-semibold text-white">
          &lt; All Copy Rights Reserved @2025 &gt;
        </p>
      </div>
    </div>
  );
}
