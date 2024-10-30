// ui Components
import ShadowButton from "components/ui/ShadowButton";
import ScaleButton from "components/ui/ScaleButton";

// hooks
import useColors from "src/hooks/useColors";
import useCart from "src/hooks/useCart";

// react icons
import { GiBookshelf } from "react-icons/gi";
import { IoTrailSignOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";

// bg-[#094067]
export default function NavLinks() {
  const { cartLength } = useCart();
  const { secondColor } = useColors();
  return (
    <nav className="order-3 flex gap-x-5 lg:order-none">
      {/* cart */}
      <button className="relative flex h-10 w-10 items-center justify-center rounded-full text-2xl text-white transition-all duration-300 hover:drop-shadow-xl">
        <div className="absolute -left-1 -top-1 z-10 h-5 w-auto min-w-5 rounded-full bg-main-text--color px-1 text-sm">
          {cartLength}
        </div>
        <IoCartOutline
          className="-scale-x-100"
          stroke="#000000"
          strokeWidth={30}
          size={30}
        />
      </button>

      {/* Links */}
      <ul className="hidden items-center gap-4 font-Changa text-[14px] font-semibold md:flex xl:text-base">
        <li>
          <ShadowButton
            bgColor="white"
            textColor="black"
            className={
              "group flex items-center gap-x-1 text-darkAndWhite-color"
            }
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
