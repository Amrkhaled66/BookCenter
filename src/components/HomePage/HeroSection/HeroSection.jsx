import ImageSection from "./ImageSection";
import ContentSection from "./ContentSection";

export default function HeroSection() {
  return (
    <div className="h-screen w-screen bg-[#f4f6f8]">
      <div className="container relative flex h-auto min-h-full w-full flex-col-reverse items-center justify-center gap-y-8 pt-[100px] md:flex-row md:pt-0">
        <ContentSection />
        <ImageSection />
      </div>
      {/* Wave Background */}
      <div className="absolute h-[220px] w-full bg-waveBG bg-cover bg-no-repeat"></div>
      {/* <div className=" bg-wave rotate-180 h-[220px] absolute w-full bg-cover bg-no-repeat"> */}
    </div>
  );
}
