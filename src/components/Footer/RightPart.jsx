// icons
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdAddCall } from "react-icons/md";

import logo2 from "src/assets/logo2.svg";
import Whatsapp from "src/assets/whatsapp.svg?react";
import Facebook from "src/assets/facebook.svg?react";
export default function RightPart() {
  return (
    <div className="flex w-full flex-col items-center gap-y-12 lg:w-1/2">
      <img src={logo2} alt="BookCenter" />
      <div className="flex gap-x-24 border-b-2 border-t-2 border-b-white border-t-white px-4 py-10">
        <a className="hover:drop-shadow-2xl hover:scale-95 transition-all duration-300 "  href="#">
          <Whatsapp />
        </a>
        <a className="hover:drop-shadow-2xl hover:scale-95 transition-all duration-300 " href="#">
          <Facebook />
        </a>
      </div>
    </div>
  );
}
