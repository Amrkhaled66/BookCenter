import { motion } from "framer-motion";
import { PiBooks } from "react-icons/pi";

import ScaleButton from "src/components/ui/ScaleButton";
import useColors from "src/hooks/useColors";

export default function ContentSection() {
  const { mainColor } = useColors();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.85 }}
      className="flex h-fit w-full flex-col items-center gap-y-3 font-mainFontRegular  md:items-end md:gap-y-7 lg:w-1/2"
    >
      {/* title */}
      <h2 className="relative flex space-x-3 text-3xl font-mainFont font-black text-main-text--color sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl">
        <span className="text-nowrap">من مصدر واحد</span>
        <span className="z-10 text-nowrap">...كُلُّ الكتب</span>
      </h2>

      {/* description */}
      <p className="flex flex-col space-y-1  font-[550] text-center text-base leading-relaxed tracking-wide text-second-text--color md:text-xl lg:text-right lg:text-2xl">
        <span>بتدور علي كتب دراسية أو رواية تخطف أنفاسك </span>
        <span> عندنا كل اللي محتاجه في مكان واحد </span>
      </p>

      {/* CTA button */}
      <ScaleButton
        className={"text-white-color border-main-color"}
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
