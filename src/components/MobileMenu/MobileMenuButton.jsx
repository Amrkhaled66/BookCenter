import { motion } from "framer-motion";

export default function NavButton({ icon, text }) {
  const itemVariants = {
    initial: { opacity: 0, x: 100 }, // Example: Items are off-screen initially
    animate: { opacity: 1, x: 0 },
    transition: { delay: .5},
  };
  return (
    <motion.li
      variants={itemVariants}
      className=" flex flex-col items-center justify-center gap-y-3  text-white"
    >
      <motion.span
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
        animate={{
          scale: [1.1, 1.4, 1.1], // Start at scale 1, grow to 1.2, then return to 1
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="text-center text-2xl"
      >
        {icon}
      </motion.span>
      <span className="text-base">{text}</span>
    </motion.li>
  );
}
