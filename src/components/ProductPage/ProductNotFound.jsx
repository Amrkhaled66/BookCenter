import angryStudentImg from "src/assets/angryStudent.png";

import Divider from "src/components/ui/Divider";

export default function ProductNotFound() {
  return (
    <div className="flex h-auto min-h-screen w-screen flex-col-reverse items-center justify-center gap-y-10 pb-5 pt-[100px] xl:flex-row-reverse xl:justify-between">
      <div className="flex w-3/5 flex-col space-y-5 p-5 text-center font-mainFontRegular font-extrabold text-black">
        <p className="text-3xl md:text-5xl"> للأسف المنتج مش موجود</p>
        <Divider />
        <a className="text-lg text-second-color underline">
          ! تواصل معانا من هنا
        </a>
      </div>
      <div className="flex h-auto w-full items-center justify-center bg-second-color p-6 xl:min-h-screen xl:w-2/5 xl:rounded-e-[100px]">
        <img
          src={angryStudentImg}
          className="drop-shadow-2xl"
          alt="angryStudent"
        />
      </div>
    </div>
  );
}
