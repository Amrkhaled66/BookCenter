import ImagePart from "./ImagePart";
import ContentPart from "./ContentPart";
import CurvedLine2 from "src/assets/CurvedLine2.svg?react";

export default function index() {
  return (
    <div className="relative">
      <div className="container relative flex w-full flex-col items-center justify-between gap-y-10   py-[40px] sm:py-[60px] lg:flex-row lg:py-[80px]">
        <ImagePart />
        <ContentPart />
      </div>
      <CurvedLine2 className="absolute bottom-0 left-0 animate-pulse" />
    </div>
  );
}
