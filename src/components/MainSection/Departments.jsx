import DeptBtn from "./DeptBtn";
import { useState } from "react";
import {motion} from "framer-motion"
const departments = [
  {
    title: "كتب وروايات",
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
    <div className="flex flex-col gap-y-8  font-mainFontRegular items-center" >
      <h2 className="font-[600] text-4xl text-darkAndWhite-color font-mainFont" >الأقـسـام</h2>
      <motion.ul layout transition={{type:"spring"}} className="flex flex-wrap gap-x-5">
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
