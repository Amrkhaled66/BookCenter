import { motion } from "framer-motion";

export default function ScaleButton({
  children,
  bgColor,
  textColor,
  className,
  ...props
}) {

  let buttonClass =
    className +
    ` gap-1 !font-mainFontRegular flex items-center text-nowrap rounded-lg border-2 bg-[${bgColor}] text-[${textColor}]  px-4 py-2 `;
  return (
    <motion.button
      whileHover={{
        scale: 1.1,
        color: bgColor,
        backgroundColor: "transparent",
      }}
      whileTap={{
        scale: 0.9,
        color: bgColor,
        backgroundColor: "transparent",
      }}
      {...props}
      initial={{ scale: 1, color: "white", backgroundColor: bgColor }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className={buttonClass}
      {...props}
    >
      {children}
    </motion.button>
  );
}
