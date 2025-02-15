import ImageSection from "./ImageSection";
import ContentSection from "./ContentSection";

export default function HeroSection() {
  return (
    <div className="w-screen ">
      <div className="container relative flex w-full gap-x-5  flex-col-reverse items-center justify-center gap-y-8 pt-[30px] mt-[100px]   lg:flex-row">
        <ContentSection />
        <ImageSection />
      </div>
    </div>
  );
}
