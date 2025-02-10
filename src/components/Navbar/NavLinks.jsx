// UI Components
import ShadowButton from "components/ui/ShadowButton";
import ScaleButton from "components/ui/ScaleButton";
import UserMenu from "./UserMenu";

// Hooks
import useColors from "src/hooks/useColors";
import useCart from "src/hooks/useCart";

// React Icons
import { GiBookshelf } from "react-icons/gi";
import { IoTrailSignOutline } from "react-icons/io5";

import cartImg from "src/assets/cart.svg";

import { Link } from "react-router-dom";

import useAuth from "src/hooks/useAuth";
export default function NavLinks() {
  const { cartLength } = useCart();
  const { colors } = useColors();
  const { isAuth } = useAuth();

  const secondColor = colors.get("secondColor");

  return (
    <nav className="order-3 flex items-center justify-center gap-x-5 md:order-none">
      {/* Authenticated User - Dropdown Menu */}
      {isAuth() && <UserMenu />}

      {/* Unauthenticated User - Signup/Login Buttons */}
      {!isAuth() && (
        <ul className="font-Changa hidden items-center gap-4 text-[14px] font-semibold md:flex xl:text-base">
          <Link to="/signup">
            <li>
              <ScaleButton
                className="border-second-color"
                bgColor={secondColor}
                textColor="white"
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
                className="group flex items-center gap-x-1 text-darkAndWhite-color"
              >
                <span className="transition-rotate text-main-color duration-500 group-hover:rotate-[720deg]">
                  <IoTrailSignOutline size={25} />
                </span>
                <span className="text-nowrap"> تسجيل الدخول</span>
              </ShadowButton>
            </li>
          </Link>
        </ul>
      )}

      {/* Cart Icon */}
      <Link
        to={"cart"}
        className="relative flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 hover:drop-shadow-xl"
      >
        <div
          className={`absolute -top-1 text-lg ${
            cartLength > 9 ? "left-[.85rem]" : "left-1/2"
          } font-bold`}
        >
          {cartLength}
        </div>
        <img className="h-full w-full" src={cartImg} alt="cart" />
      </Link>
    </nav>
  );
}
