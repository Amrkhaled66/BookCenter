import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "src/assets/logo.svg";

// Hooks
import useIsNavStickyContext from "src/hooks/useIsNavSticky";
import useShowMobileMenu from "src/hooks/useShowMobileMenu";
import useAuth from "src/hooks/useAuth";

// Components
import Progressbar from "./Progressbar";
import MenuIcon from "./MenuIcon";
import NavLinks from "./NavLinks";
import UserMenu from "./UserMenu";
import CartIcon from "../ui/CartIcon";

const navVariants = {
  hidden: { transform: "translateY(-100px)" },
  visible: { transform: "translateY(0)" },
};

export default function Navbar() {
  const { isSticky } = useIsNavStickyContext();
  const { toggleMenu } = useShowMobileMenu();
  const { isAuth } = useAuth();

  const isUserAuthenticated = isAuth();

  return (
    <div
      className={`fixed left-1/2 top-0 z-50 w-screen -translate-x-1/2 rounded-xl transition-all duration-300 ${isSticky ? "   backdrop-blur-sm " : "bg-transparent"
        }`}
    >
      <motion.div
        variants={navVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.3 }}
        className="container mx-auto flex flex-wrap items-center  justify-between gap-4 rounded bg-transparent py-5 md:flex-nowrap"
      >
        <Progressbar />

        {!isUserAuthenticated && <div className="flex items-center gap-x-3">
          <NavLinks />
          <CartIcon />
        </div>
        }
        {
          isUserAuthenticated && <div className="flex items-center gap-x-3 " >
            <UserMenu />
            <CartIcon />
          </div>
        }
        

        <Link
          to="/"
          className="relative  flex justify-center lg:justify-end sm:w-96 md:order-none"
        >
          <img className="mx-auto w-20 md:mx-0" src={logo} alt="Book Center" />
        </Link>

        {!isUserAuthenticated && (
          <button
            onClick={toggleMenu}
            className="order-3 text-3xl flex justify-center md:order-none md:hidden"
          >
            <MenuIcon />
          </button>
        )}
      </motion.div>
    </div>
  );
}

