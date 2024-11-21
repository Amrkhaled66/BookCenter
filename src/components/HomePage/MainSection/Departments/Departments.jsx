import DeptBtn from "./DeptBtn";
import { useState } from "react";
import { motion } from "framer-motion";
import useProducts from "src/hooks/useProducts";

const departments = [
  {
    title: "كتب و روايات",
    deptName: "novels&books",
  },
  {
    title: "الكتب الدراسية",
    deptName: "academicBooks",
  },
];

export default function Departments() {
  const { selectedCategory, selectCategory } = useProducts();

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
          <li key={dept.deptName}>
            <DeptBtn
              onClick={() => handleSelectDept(dept.deptName)}
              isSelected={selectedCategory === dept.deptName}
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
