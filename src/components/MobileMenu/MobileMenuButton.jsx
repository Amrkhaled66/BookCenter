import { Link } from "react-router-dom";
import useShowMobileMenu from "src/hooks/useShowMobileMenu";
export default function MobileMenuButton({ children }) {
  const { toggleMenu } = useShowMobileMenu();

  return (
    <button onClick={toggleMenu}>
      <li className="mx-auto flex w-[90%] items-center gap-x-2 rounded-xl bg-card-color px-2 py-2  transition-all duration-300 hover:pr-5">
        {children}
      </li>
    </button>
  );
}
