import NavBarIcon from "./NavBarIcon";
import MenuIcon from "src/components/ui/icons/MenuIcon";
import { FiMenu } from "react-icons/fi";

export default function NavBar() {
  return (
    <div className="flex w-full items-center">
      <div className="flex items-center">
        <NavBarIcon icon={<MenuIcon icon={<FiMenu />} />} title="Menu" />
      </div>
    </div>
  );
}
