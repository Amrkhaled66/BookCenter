import useSideBar from "src/hooks/useSideBar";
import { Tooltip } from "@mui/material";
import { NavLink } from "react-router-dom";
import useWidth from "src/hooks/useWidthContext";
export default function SideBarItem({ children, to, icon, ...props }) {
  const { collapsed, closed, closeSideBar } = useSideBar();
  const { isSmallScreen } = useWidth();
  const NavClassName =
    "flex items-center gap-x-2 rounded-lg py-3 text-main-color   normal-case transition-colors duration-300 hover:bg-gray-100 mb-1   hover:bg-gray-200 font-cairo font-semibold bg-card-color drop-shadow-md  pr-2 ";

  if (collapsed && !closed) {
    return (
      <NavLink
      to={to}
        className={({ isActive }) =>
          isActive
            ? NavClassName +
              " m-0 scale-110 !bg-main-color text-white pl-4"
            : `${NavClassName}   py-0`
        }
        {...props}
      >
        <Tooltip
          slotProps={{
            popper: {
              modifiers: [
                {
                  name: "offset",
                  options: {
                    offset: [0, 13],
                  },
                },
              ],
            },
          }}
          title={children}
          placement="right"
          arrow
        >
          <span className="text-xl">{icon}</span>
        </Tooltip>
      </NavLink>
    );
  }

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
