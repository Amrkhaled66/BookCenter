import { motion } from "framer-motion";

import studentImg from "src/assets/studentImg.svg";

export default function ImageSection() {
  return (
    <div className="flex w-full justify-center lg:w-1/2">
      <motion.img
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.1, 1] }}
        transition={{ duration: 1 }}
        src={studentImg}
        className="w-4/5 min-w-[330px]"
        alt="BOOK CENTER"
      />
    </div>
  );
}
