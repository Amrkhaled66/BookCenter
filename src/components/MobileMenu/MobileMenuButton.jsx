import { Link } from "react-router-dom";
import useShowMobileMenu from "src/hooks/useShowMobileMenu";
export default function MobileMenuButton({ children }) {
  const { toggleMenu } = useShowMobileMenu();

  return (
    <button className="w-[92%] mx-auto" onClick={toggleMenu}>
      <li className="mx-auto flex w-full  items-center gap-x-2 rounded-2xl bg-card-color px-2 py-2 transition-all duration-300 hover:pr-5">
        {children}
      </li>
    </button>
  );
}
