import useSideBar from "src/hooks/useSideBar";
import { NavLink } from "react-router-dom";
import useWidth from "src/hooks/useWidthContext";
export default function SideBarItem({ children, to, icon, ...props }) {
  const { closeSideBar } = useSideBar();
  const { isSmallScreen } = useWidth();
  const NavClassName =
    "flex items-center gap-x-2 rounded-lg py-3 text-main-color   normal-case transition-colors duration-300 hover:bg-gray-100 mb-1   hover:bg-gray-200 font-cairo font-semibold bg-card-color drop-shadow-md  pr-2 ";

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? NavClassName +
          " !bg-main-color text-white pl-4 "
          : `${NavClassName} pl-4`
      }
      {...props}
      onClick={isSmallScreen ? closeSideBar : null}
    >
      <span className="text-xl ">{icon}</span>
      <span>{children}</span>
    </NavLink>
  );
}
