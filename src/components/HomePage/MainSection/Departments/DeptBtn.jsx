import { motion } from "framer-motion";

const fadeInVariants = {
  initial: { opacity: 0, y: 100 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.06 * i,
    },
  }),
};

export default function DeptBtn({ children, index, isSelected, ...props }) {
  return (
    <motion.button
      variants={fadeInVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      custom={index}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{
        duration: 0.3,
        type: "spring",
        stiffness: 400,
        damping: 10,
      }}
      className={` ${isSelected ? "bg-main-color font-bold text-white" : ""} rounded-xl border-2 border-main-color px-4 py-2 text-darkAndWhite-color`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
