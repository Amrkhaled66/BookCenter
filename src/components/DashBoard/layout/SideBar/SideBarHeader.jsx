import useSideBar from "src/hooks/useSideBar";

import useWidth from "src/hooks/useWidthContext";

import { Icon } from "@iconify/react";
export default function SideBarHeader() {
  const { closeSideBar } = useSideBar();
  const { isSmallScreen } = useWidth();
  return (
    <div className="mb-8 flex justify-between pt-3 text-xl font-extrabold text-gray-600">
      {isSmallScreen && (
        <button
          onClick={closeSideBar}
          className="flex items-end justify-center gap-x-2 px-2 py-2 font-mainFont text-sm transition-all duration-300 hover:bg-white hover:drop-shadow-lg"
        >
          <Icon
            icon="icon-park-solid:right-c"
            width="23"
            height="23"
            style={{ color: "#094067" }}
          />
          تصغير النافذه
        </button>
      )}
    </div>
  );
}
