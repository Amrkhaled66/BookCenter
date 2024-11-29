// ui Components
import ShadowButton from "components/ui/ShadowButton";
import ScaleButton from "components/ui/ScaleButton";

// hooks
import useColors from "src/hooks/useColors";
import useCart from "src/hooks/useCart";

// react icons
import { GiBookshelf } from "react-icons/gi";
import { IoTrailSignOutline } from "react-icons/io5";

import cartImg from "src/assets/cart.svg";

import { Link } from "react-router-dom";
export default function NavLinks() {
  const { cartLength } = useCart();
  const { secondColor } = useColors();

  return (
    <nav className="order-3 flex gap-x-5 md:order-none">
      {/* Links */}
      <ul className="font-Changa hidden items-center gap-4 text-[14px] font-semibold md:flex xl:text-base">
        <Link to="/signup">
          <li>
            <ScaleButton
              className={`border-second-color`}
              bgColor={secondColor}
              textColor={"white"}
            >
              <GiBookshelf size={25} /> !أنشئ حساب جديد
            </ScaleButton>
          </li>
        </Link>

        <Link to="/login">
          <li>
            <ShadowButton
              bgColor="transparent"
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
        </Link>
      </ul>
      {/* cart */}
      <Link
        to={"cart"}
        className="relative flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 hover:drop-shadow-xl"
      >
        <div
          className={`absolute -top-1 text-lg ${cartLength > 9 ? "left-[.85rem]" : "left-1/2"} font-bold`}
        >
          {cartLength}
        </div>
        <img className="h-full w-full" src={cartImg} alt="cart" />
      </Link>
    </nav>
  );
}
