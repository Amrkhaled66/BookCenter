import { motion } from "framer-motion";

export default function RegisterImg(props) {
  return (
    <motion.img
      className="block pt-[50px] drop-shadow-xl lg:fixed lg:pt-0"
      initial={{ opacity: 0, y: 150 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
      }}
      {...props}
      alt="registerImg"
    />
  );
}
