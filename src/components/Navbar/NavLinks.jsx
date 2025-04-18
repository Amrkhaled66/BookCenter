// UI Components
import ShadowButton from "components/ui/ShadowButton";
import ScaleButton from "components/ui/ScaleButton";

// Hooks
import useColors from "src/hooks/useColors";

//  Icons
import { Icon } from "@iconify/react";

import Book from "src/assets/Frame.svg?react";

import { Link } from "react-router-dom";

import useAuth from "src/hooks/useAuth";
export default function NavLinks() {
  const { colors } = useColors();
  const { isAuth } = useAuth();

  const secondColor = colors.get("secondColor");

  return (
    <nav className="order-3  items-center justify-center gap-x-5 font-mainFont md:order-none flex">
      {/* Unauthenticated User - Signup/Login Buttons */}
      {!isAuth() && (
        <ul className="hidden items-center gap-4 text-[14px] font-semibold md:flex xl:text-base">
          <Link to="/signup">
            <li>
              <ScaleButton
                className="group peer border-second-color"
                bgColor={secondColor}
                textColor="white"
              >
                <Icon icon="cuida:user-add-outline" width="24" height="24" />
                أنشئ حسابك
              </ScaleButton>
            </li>
          </Link>

          <Link to="/login">
            <li>
              <ShadowButton
                bgColor="transparent"
                textColor="black"
                className="group flex items-center gap-x-1 bg-white text-darkAndWhite-color drop-shadow-lg"
              >
                <Book /> سجل
                <span className="text-main-color">الدخول</span>
              </ShadowButton>
            </li>
          </Link>
        </ul>
      )}

    </nav>
  );
}
