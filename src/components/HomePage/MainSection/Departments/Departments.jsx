import DeptBtn from "./DeptBtn";
import { useState } from "react";
import { motion } from "framer-motion";
import useCategory from "src/hooks/useCategory";

const departments = [
  {
    title: "الكتب الدراسية",
    deptCode: "studentBooks",
  },
  {
    title: "كتب و روايات",
    deptCode: "booksAndNovel",
  },
];

export default function Departments() {
  const { selectedCategory, selectCategory } = useCategory();

  const handleSelectDept = function (newDept) {
    selectCategory(newDept);
  };

  return (
    <div className="mt-12 flex flex-col items-center gap-y-8 font-mainFontRegular md:mt-0">
      <h2 className="font-mainFont text-4xl font-[600] text-darkAndWhite-color">
        الأقـسـام
      </h2>
      <motion.ul
        layout
        transition={{ type: "spring" }}
        className="container flex flex-wrap items-center justify-center gap-x-5 gap-y-4"
      >
        {departments.map((dept, i) => (
          <li key={dept.deptCode}>
            <DeptBtn
              onClick={() => handleSelectDept(dept.deptCode)}
              isSelected={selectedCategory === dept.deptCode}
              index={i}
            >
              {dept.title}
            </DeptBtn>
          </li>
        ))}
      </motion.ul>
    </div>
  );
}
