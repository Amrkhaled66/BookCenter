// ui components
import { Menu, Transition } from "@headlessui/react";
import LogOutModal from "src/components/ui/LogOutModal";

// services
import useCart from "src/hooks/useCart";
import { useNavigate, NavLink } from "react-router-dom";
import { logout, getUser } from "src/services/authServices";

//  imgs & icons
import pandaAvatar from "src/assets/pandaAvatar.svg";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoLogOutSharp } from "react-icons/io5";

import { BiLogOut } from "react-icons/bi";
import { FaUser } from "react-icons/fa";

const PROFILE_PATH = "/profile";
const HOME_PATH = "/";

export default function UserMenu() {
  const { clearCart } = useCart();
  const navigate = useNavigate();

  const userName = getUser().name;

  const handleLogout = () => {
    logout();
    navigate(HOME_PATH);
    clearCart();
    LogOutModal();
  };

  const renderMenuItem = (to, icon, label, onClick = null) => (
    <Menu.Item>
      {({ active }) => (
        <NavLink
          to={to}
          onClick={onClick}
          className={`flex w-full font-cairo items-center gap-2 rounded-md px-3 py-2 text-sm transition-all duration-300 ${
            active ? "bg-gray-300" : ""
          }`}
        >
          {icon}
          {label}
        </NavLink>
      )}
    </Menu.Item>
  );

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="flex items-center gap-2 rounded-full focus:outline-none">
          <img src={pandaAvatar} alt="pandaAvatar" className="h-12 w-12" />
        </Menu.Button>
      </div>

      <Transition
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-44 divide-y divide-gray-200 rounded-md bg-slate-100 py-2 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <p className="px-4 py-2 text-right text-sm text-gray-900">
            أهلا
            <span className="text-base font-semibold"> {userName}</span>
          </p>
          <div className="p-1">
            {renderMenuItem(
              PROFILE_PATH,
              <FaUser className="h-3 w-3 text-main-text--color" />,
              "الملف الشخصي",
            )}
            {renderMenuItem(
              null,
              <IoLogOutSharp className="h-3 w-3 text-main-text--color" />,
              "تسجيل الخروج",
              handleLogout,
            )}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
