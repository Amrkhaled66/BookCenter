import DeptBtn from "./DeptBtn";
import { motion } from "framer-motion";

import useCategory from "src/hooks/useCategory";

import Brush from "src/assets/Brush.svg?react";

export default function Departments() {
  const { selectedCategory, selectCategory, departments } = useCategory();

  const handleSelectDept = function (newDept) {
    selectCategory(newDept);
  };

  return (
    <div className="mt-12 flex flex-col items-center gap-y-8 font-mainFont md:mt-0">
      <h2 className="font-elMessiri relative text-2xl font-[600] text-darkAndWhite-color sm:text-4xl">
        <Brush className="mx-auto w-3/4 sm:w-full" />
        <span className="absolute right-20 top-1/2 -translate-y-1/2 stroke-black text-white sm:right-14">
          الأقـسـام
        </span>
        {/*  */}
      </h2>
      <motion.ul
        layout
        transition={{ type: "spring" }}
        className="container flex flex-wrap items-center justify-center gap-x-5 gap-y-4"
      >
        {departments?.map((dept, i) => (
          <li key={dept._id}>
            <DeptBtn
              onClick={() => handleSelectDept(dept._id)}
              isSelected={selectedCategory === dept._id}
              index={i}
            >
              {dept.name}
            </DeptBtn>
          </li>
        ))}
      </motion.ul>
    </div>
  );
}
