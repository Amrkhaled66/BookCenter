import { motion } from "framer-motion";

export default function ScaleIn({ children, ...props }) {
  return (
    <motion.span
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3, type: "spring" }}
      className="flex items-center justify-center font-black tracking-wider text-white"
      {...props}
    >
      {children}
    </motion.span>
  );
}
