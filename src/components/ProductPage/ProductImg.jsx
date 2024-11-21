import { motion } from "framer-motion";

export default function ProductImg({ img }) {
  return (
    <motion.img
      initial={{ rotate: 40 }}
      animate={{ rotate: 0 }}
      transition={{ duration: 0.5 }}
      className="drop-shadow-2x h-full w-full min-w-[300px] max-w-[400px] rounded-xl rounded-r-2xl drop-shadow-2xl xl:w-[30%]"
      src={img}
      alt="Product Image"
    />
  );
}
