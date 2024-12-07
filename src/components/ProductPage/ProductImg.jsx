import { motion } from "framer-motion";

export default function ProductImg({ imageUrl }) {
  return (
    <motion.img
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, type: "spring" }}
      className=" w-[90%] md:w-[70%] drop-shadow-2xl lg:w-[70%]"
      src={`${import.meta.env.VITE_API_URL}/${imageUrl}`}
      alt="Product Image"
    />
  );
}
