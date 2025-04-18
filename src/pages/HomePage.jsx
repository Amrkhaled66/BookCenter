import HeroSection from "src/components/HomePage/HeroSection/HeroSection";
import MainSection from "src/components/HomePage/MainSection/MainSection";
import WhoSection from "src/components/HomePage/WhoSection/index";

import useGoToPageTop from "src/hooks/useGoToPageTop";
export default function HomePage() {
  useGoToPageTop();
  return (
    <div  >
      <HeroSection />
      <MainSection />
      <WhoSection />
    </div>
  );
}
