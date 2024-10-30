import { motion, useScroll, useSpring } from "framer-motion";
import useIsNavStickyContext from "src/hooks/useIsNavSticky";
export default function Progressbar() {
  const { isSticky } = useIsNavStickyContext();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001,
  });

  return (
    <>
      {isSticky && (
        <motion.div
          style={{ scaleX }}
          className="container absolute bottom-0 left-0 h-1 origin-[0%] transform rounded-3xl bg-main-color px-3"
        />
      )}
    </>
  );
}
