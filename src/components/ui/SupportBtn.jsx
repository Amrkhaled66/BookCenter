import { Link } from "react-router-dom";
import SupportIcon from "src/assets/supportIcon.svg?react";
import { motion } from "framer-motion";

export default function SupportBtn() {
  return (
    <motion.div
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeIn" }}
      className="fixed bottom-5 z-[1000] left-5 rounded-3xl transition-all"
    >
      <Link
        className="relative flex items-center justify-center gap-x-2 rounded-lg duration-300 hover:scale-90"
        to="/support"
      >
        <div className="rounded-lg bg-white px-5 py-3 font-cairo font-semibold shadow-xl shadow-black/25">
          تواصل مع الدعم
        </div>
        <div className="relative h-10 w-10">
          <span className="absolute left-0 right-0 inline-flex h-full w-full rounded-full opacity-75"></span>
          <SupportIcon className="h-11 w-11" />
        </div>
      </Link>
    </motion.div>
  );
}
