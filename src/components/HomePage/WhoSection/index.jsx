import ImagePart from "./ImagePart";
import ContentPart from "./ContentPart";
import CurvedLine2 from "src/assets/CurvedLine2.svg?react";

export default function index() {
  return (
    <div className="container  relative flex w-full flex-col items-center justify-between gap-y-10 py-28 lg:flex-row">
      <ImagePart />
      <ContentPart />
      <CurvedLine2 className="absolute animate-pulse left-0 bottom-0" />
    </div>
  );
}
