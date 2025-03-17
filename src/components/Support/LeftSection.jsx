import ConnectBtn from "./CoonectBtn";


import faceBook from "src/assets/facebook.svg";
import Whatsapp from "src/assets/whatsapp.svg";

export default function LeftSection() {
  return (
    <div className="flex flex-col w-full  md:max-w-[50%] gap-y-32">
      <p className="w-full text-right font-cairo text-[28px] sm:text-[35px] lg:text-[40px] font-black tracking-wide lg:text-start">
        <span className="relative text-main-color">
          التواصل مع ...{" "}
          <span className="absolute -bottom-11 right-24 text-nowrap text-second-color">
            تيم بوكــسنتر{" "}
          </span>
        </span>
      </p>
      <div className="flex flex-col  gap-y-9">
        <ConnectBtn img={Whatsapp} channel="وتساب" color="#60BE92" />
        <ConnectBtn img={faceBook} channel="فيسـبوك" color="#61B2E4" />
      </div>
    </div>
  );
}
