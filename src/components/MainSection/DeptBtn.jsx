import { motion } from "framer-motion";

export default function DeptBtn({ children, isSelected, ...props }) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.3, type: "spring", stiffness: 400, damping: 10 }}
      className={` ${isSelected ? "bg-main-color font-bold text-white " : ""} rounded-xl border-2 border-main-color text-darkAndWhite-color  px-4 py-2`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
