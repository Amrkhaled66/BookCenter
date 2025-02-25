import angryStudentImg from "src/assets/angryStudent.png";

import Divider from "src/components/ui/Divider";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ProductNotFound() {
  return (
    <div className="flex h-auto min-h-screen w-screen flex-col-reverse items-center justify-center gap-y-10 pb-5 pt-[100px]">
      <div className="flex w-full flex-col space-y-5 p-5 text-center font-mainFont font-extrabold text-black">
        <p className="text-2xl sm:text-4xl"> للأسف المنتج مش موجود</p>
        <Divider />
        <Link
          to="/contact"
          className="text-sm text-second-color underline sm:text-base"
        >
          تواصل معانا من هنا !
        </Link>
      </div>
      <div className="relative overflow-hidden flex w-full items-center justify-center p-6">
        <div className="absolute right-0 h-full w-full bg-second-color"></div>
        <motion.img
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          src={angryStudentImg}
          className="w-[60%] drop-shadow-2xl sm:w-[25%]"
          alt="angryStudent"
        />
      </div>
    </div>
  );
}
