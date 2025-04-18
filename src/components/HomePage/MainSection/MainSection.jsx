import Departments from "./Departments/Departments";
import Products from "./Products";
import SubCategories from "./SubCategories";

import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import TransparentBtn from "src/components/ui/TransparentBtn";
import CurvedLine from "src/assets/CurvedLine.svg?react";
import Loader from "src/components/ui/icons/Loader";
import ErrorContainer from "src/components/ui/ErrorContainer";

import useColors from "src/hooks/useColors";
import useCategory from "src/hooks/useCategory";
import { useLocation } from "react-router-dom";
import { useProducts } from "src/contexts/products";

export default function MainSection() {
  const { colors } = useColors();
  const { selectedCategory, departmentsLoading } = useCategory();
  const location = useLocation().pathname;
  const secondColor = colors.get("secondColor");
  useProducts();
  if (departmentsLoading) {
    return (
      <div className="flex h-screen  items-center justify-center">
        <ErrorContainer>
          <p className="flex items-center gap-x-2 font-mainFont">
            <Loader /> يتم تحميل الأقسام
          </p>
        </ErrorContainer>
      </div>
    );
  }

  return (
    <div className="relative ">
      <div className="container  flex min-h-screen h-auto flex-col items-center justify-start gap-y-16  font-mainFont">
        <Departments />
        {selectedCategory === "67cf95e8ed649e087d873ee8" && <SubCategories />}
        <CurvedLine className="absolute -bottom-[150px] -right-32 -z-10 hidden animate-pulse sm:block" />
        <Products />
        {location !== "/products" && (
          <Link to="/products">
            <TransparentBtn
              className={"flex items-center gap-x-2 text-white"}
              bgColor={secondColor}
            >
              <span className="text-xl"> تصفح كل الكتب</span>
              <Icon
                icon="streamline-emojis:panda-face"
                width="24"
                height="24"
              />
            </TransparentBtn>
          </Link>
        )}
      </div>
    </div>
  );
}
