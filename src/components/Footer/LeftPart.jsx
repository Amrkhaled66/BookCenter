import Arrow from "src/assets/Arrow.svg?react";

import ShadowButton from "../ui/ShadowButton";
export default function LeftPart() {
  return (
    <div className="flex h-auto w-full flex-col gap-y-14 lg:w-1/2">
      <div className="relative mx-auto">
        <p className="flex w-fit flex-col gap-y-2 text-nowrap text-right text-3xl font-black tracking-wide sm:text-4xl lg:text-start xl:text-5xl">
          <span className="text-white">لسا عندك اي سؤال عن...</span>
          <span className="text-stroke-light relative text-nowrap text-left font-cairo text-second-color xl:-translate-x-11">
            بوك سنتر
            <Arrow className="absolute z-10 left-0 top-10 sm:left-14" />
          </span>
        </p>
      </div>
      <div className="flex flex-col gap-y-4">
        <button className="bg-fourth-color mx-auto rounded-md px-12 py-2 transition-all duration-300 hover:scale-105 hover:drop-shadow-2xl min-w-60">
          أنضم لقناة الواتس
        </button>
        <span className="mx-auto font-cairo text-2xl font-bold text-white">
          {" "}
          &lt; أو/ &gt;
        </span>
        <button className="mx-auto w-fit rounded-md bg-second-color py-2 text-white transition-all duration-300 hover:scale-105 hover:drop-shadow-2xl min-w-60">
          تواصل مع الدعم
        </button>
      </div>
    </div>
  );
}
