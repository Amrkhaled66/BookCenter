// ui Components
import ShadowButton from "components/ui/ShadowButton";
import ScaleButton from "components/ui/ScaleButton";

// hooks
import useColors from "src/hooks/useColors";

// react icons
import { GiBookshelf } from "react-icons/gi";
import { IoIosCart } from "react-icons/io";
import { IoTrailSignOutline } from "react-icons/io5";

export default function NavLinks() {
  const { secondColor } = useColors();
  return (
    <nav className="order-3 flex gap-x-5 lg:order-none">
      {/* cart */}
      <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#094067] text-2xl transition-all duration-300 hover:drop-shadow-xl">
        <IoIosCart color="white" />
      </button>

      {/* Links */}
      <ul className="hidden items-center gap-4 text-[14px] font-semibold  md:flex xl:text-base font-Changa">
        <li>
          <ShadowButton
            bgColor="white"
            textColor="black"
            className={"group flex items-center text-darkAndWhite-color gap-x-1 "}
          >
            <span className="transition-rotate text-main-color duration-500 group-hover:rotate-[720deg]">
              <IoTrailSignOutline size={25} />
            </span>
            <span className="text-nowrap"> تسجيل الدخول</span>
          </ShadowButton>
        </li>
        <li>
          <ScaleButton
            className={`border-second-color`}
            bgColor={secondColor}
            textColor={"white"}
          >
            <GiBookshelf size={25} /> !أنشئ حساب جديد
          </ScaleButton>
        </li>
      </ul>
    </nav>
  );
}
