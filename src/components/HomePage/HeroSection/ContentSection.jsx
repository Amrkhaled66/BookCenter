import { motion } from "framer-motion";
import { PiBooks } from "react-icons/pi";

import ScaleButton from "src/components/ui/ScaleButton";
import useColors from "src/hooks/useColors";


const ContentSectionTitle = function () {
  return (
    <h2 className="relative flex items-center font-mainFont text-3xl font-black text-main-text--color sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl">
      <span className="z-10 text-nowrap">كل الكتب ...</span>
      <span className="text-nowrap">من مصدر واحد</span>
    </h2>
  );
};

export default function ContentSection() {
  const { colors } = useColors();
  const mainColor = colors.get("mainColor");


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.85 }}
      className="flex h-fit w-full flex-col items-center gap-y-3 font-mainFontRegular md:items-start md:gap-y-7 lg:w-1/2"
    >
      {/* title */}
      <ContentSectionTitle />

      {/* description */}
      <p className="flex flex-col space-y-1 text-center text-base font-[550] leading-relaxed tracking-wide text-second-text--color md:text-xl lg:text-right lg:text-2xl">
        <span>بتدور علي كتب دراسية أو رواية تخطف أنفاسك </span>
        <span> عندنا كل اللي محتاجه في مكان واحد </span>
      </p>

      {/* CTA button */}
      <ScaleButton
        className={"border-main-color text-white-color"}
        bgColor={mainColor}
      >
        <span>
          <PiBooks size={25} />
        </span>
        <span className="text-xl"> تصفح الكتب</span>
      </ScaleButton>
    </motion.div>
  );
}
