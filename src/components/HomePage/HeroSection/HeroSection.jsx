import ImageSection from "./ImageSection";
import ContentSection from "./ContentSection";

export default function HeroSection() {
  return (
    <div className="w-screen ">
      <div className="container relative h-screen  flex w-full flex-col-reverse items-center justify-center gap-x-5 sm:gap-y-6  md:pt-[30px] lg:flex-row">
        <ContentSection />
        <ImageSection />
      </div>
    </div>
  );
}
