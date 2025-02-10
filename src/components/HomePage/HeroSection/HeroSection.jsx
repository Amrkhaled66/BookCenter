import ImageSection from "./ImageSection";
import ContentSection from "./ContentSection";

export default function HeroSection() {
  return (
    <div className="w-screen ">
      <div className="container relative flex w-full  h-screen  flex-col-reverse items-center justify-center gap-y-8 pt-[100px] md:flex-row md:pt-0">
        <ContentSection />
        <ImageSection />
      </div>
    </div>
  );
}
