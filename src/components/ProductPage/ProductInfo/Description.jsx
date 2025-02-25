import Stikes from "src/assets/Stikes.svg?react";
import Stand from "src/assets/Stand.svg?react";

const Description = () => (
  <div className="relative border-b-4 border-second-color py-6">
    <p className="mx-auto w-fit border-[9px] border-wood-color px-2 py-1 text-center font-cairo text-base font-black sm:mx-0 sm:text-lg">
      وصف الكتاب
    </p>
    <p className="mx-auto mt-5 min-h-36 w-full rounded-3xl border-[9px] border-wood-color bg-main-color px-3 py-3 font-cairo text-sm font-bold leading-[2] tracking-wide text-white sm:w-[90%] sm:px-6 sm:py-6 sm:text-lg">
      الكتاب فيه اسئلة كتيرة جدا + الشرح المتميز للدكتور احمد الجوهري واوعي تنسي
      هدايا الدكتور
    </p>
    <div className="flex flex-col-reverse items-center sm:flex-row">
      <div className="mr-0 mt-auto translate-y-6 sm:w-fit xl:mr-12">
        <div className="translate-y-1 text-nowrap rounded-2xl border-[6px] border-main-color bg-white px-6 py-2 text-2xl font-bold sm:px-6 sm:py-3">
          EGP 150
        </div>
        <div className="flex justify-center">
          <Stand />
        </div>
      </div>
      <div className="mr-auto flex w-[80%] translate-x-9 flex-col items-end">
        <Stikes className="w-full -translate-y-1 sm:w-[60%]" />
        <div className="w-full -translate-y-2 space-y-2 rounded-3xl border-8 border-wood-color bg-[#FFFCE5] px-5 py-3 font-semibold tracking-wider sm:w-[70%] sm:py-6">
          <p>📚نوت بوك</p>
          <p>📚كتاب التدريبات</p>
          <p>📚كتاب الشرح</p>
        </div>
      </div>
    </div>
  </div>
);

export default Description;
