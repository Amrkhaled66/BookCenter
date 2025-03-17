import { Link } from "react-router-dom";
import SupportIcon from "src/assets/supportIcon.svg?react";

export default function SupportBtn() {
  return (
    <div className="fixed bottom-5 right-5 rounded-3xl bg-white shadow-container-shadow shadow-black/15 transition-all duration-300 hover:scale-105">
      <Link
        className="relative flex items-center justify-center gap-x-5 rounded-lg px-4 py-2"
        to="/support"
      >
        <div className="relative h-10 w-10">
          <span className="absolute left-0 right-0 inline-flex h-full w-full animate-ping rounded-full bg-main-color opacity-75"></span>
          <SupportIcon className="h-10 w-10" />
        </div>
        <span className="font-mainFont font-semibold">تواصل مع الدعم </span>
      </Link>
    </div>
  );
}
