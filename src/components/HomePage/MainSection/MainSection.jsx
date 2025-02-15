import Departments from "./Departments/Departments";
import Products from "./Products";

import { Link } from "react-router-dom";
import TransparentBtn from "src/components/ui/TransparentBtn";
import useColors from "src/hooks/useColors";
import { Icon } from "@iconify/react";
export default function MainSection() {
  const { colors } = useColors();
  const secondColor = colors.get("secondColor");
  return (
    <div>
      <div className="container mt-36 flex flex-col items-center justify-start gap-y-11 py-5 font-mainFont">
        <Departments />
        <Products />
        <Link to="/products">
          <TransparentBtn
            className={"flex items-center gap-x-2 text-white"}
            bgColor={secondColor}
          >
            <span className="text-xl"> تصفح كل الكتب</span>
            <Icon icon="streamline-emojis:panda-face" width="24" height="24" />
          </TransparentBtn>
        </Link>
      </div>
    </div>
  );
}
