import ImageSection from "./ImageSection";
import ContentSection from "./ContentSection";

export default function HeroSection() {
  return (
    <div className="h-screen w-screen">
      <div className="container relative flex h-auto min-h-full w-full flex-col items-center justify-center gap-y-8 pt-[100px] md:flex-row md:pt-0">
        <ImageSection />
        <ContentSection />
      </div>
    </div>
  );
}