import { motion, AnimatePresence } from "framer-motion";

import MobileMenuButton from "./MobileMenuButton";

// react Icons
import { IoHomeSharp } from "react-icons/io5";
import { GiBookshelf } from "react-icons/gi";
import { IoTrailSignOutline } from "react-icons/io5";

// hooks
import useShowMobileMenu from "src/hooks/useShowMobileMenu";

//  variants
const containerVariants = {
  initial: { opacity: 0, y: 100, scale: 0.8 },
  animate: { opacity: 1, y: 0, scale: [1.3, 1] },
  exit: { opacity: 0, y: 100, scale: 0.8 },
};

const menuVariants = {
  animate: {
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.2,
    },
  },
};

export default function MobileMenu() {
  const { showMobileMenu } = useShowMobileMenu();

  return (
    <AnimatePresence>
      {showMobileMenu && (
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.5 }}
          className="fixed font-mainFontRegular font-thin bottom-3 z-10 w-full"
        >
          <motion.ul
            variants={menuVariants}
            className="mx-auto flex w-[90%] justify-between rounded-3xl bg-main-color px-5 py-3"
          >
            <MobileMenuButton
              text={"تسجيل الدخول"}
              icon={<IoTrailSignOutline />}
            />
            <MobileMenuButton
              text={"الصفحه الرئيسية"}
              icon={<IoHomeSharp />}
            />
            <MobileMenuButton text={"اِنشئ حساب جديد"} icon={<GiBookshelf />} />
          </motion.ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
