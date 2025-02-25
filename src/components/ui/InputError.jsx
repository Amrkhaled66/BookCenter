import { motion } from "framer-motion";
import { memo } from "react";
const InputError = memo(({ error }) => {
  return (
    <motion.p
      key={Date.now()}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-2 rounded-lg bg-rose-400 px-4 py-1 text-[15px] text-white"
    >
      ⚠ - {error}
    </motion.p>
  );
});

export default InputError;
