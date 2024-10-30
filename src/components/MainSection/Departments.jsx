import DeptBtn from "./DeptBtn";
import { useState } from "react";
import { motion } from "framer-motion";
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
  const [selectedDept, setSelectedDept] = useState("academicBooks");

  const handleSelectDept = function (newDept) {
    setSelectedDept(newDept);
  };

  return (
    <div className="flex mt-12 md:mt-0 flex-col items-center gap-y-8 font-mainFontRegular">
      <h2 className="font-mainFont text-4xl font-[600] text-darkAndWhite-color">
        الأقـسـام
      </h2>
      <motion.ul
        layout
        transition={{ type: "spring" }}
        className="container flex flex-wrap items-center justify-center gap-x-5 gap-y-4"
      >
        {departments.map((dept) => (
          <li key={dept.deptName}>
            <DeptBtn
              onClick={() => handleSelectDept(dept.deptName)}
              isSelected={selectedDept === dept.deptName}
            >
              {dept.title}
            </DeptBtn>
          </li>
        ))}
      </motion.ul>
    </div>
  );
}
