import logo from "src/assets/logo.svg";

import { motion } from "framer-motion";

import useIsNavStickyContext from "src/hooks/useIsNavSticky";
import useShowMobileMenu from "src/hooks/useShowMobileMenu";
import useAuth from "src/hooks/useAuth";

import Progressbar from "./Progressbar";
import NavLinks from "./NavLinks";
import MenuIcon from "./MenuIcon";

import { Link } from "react-router-dom";
const navVariants = {
  hidden: {
    transform: "translateY(-100px)",
  },
  visible: {
    transform: "translateY(0)",
  },
};

export default function Navbar() {
  const { isSticky } = useIsNavStickyContext();
  const { toggleMenu } = useShowMobileMenu();
  const { isAuth } = useAuth();

  return (
    <div
      className={`${isSticky ? "bg-[#3da9fc3f] backdrop-blur-sm" : " "} fixed left-1/2 top-0 z-50 w-screen -translate-x-1/2 rounded-xl bg-transparent transition-all duration-300`}
    >
      <motion.div
        variants={navVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.3 }}
        className={`container mx-auto flex flex-wrap items-center justify-between gap-4 rounded bg-transparent py-5 md:flex-nowrap`}
      >
        <Progressbar />

        <NavLinks />
        {/* Logo */}
        <Link
          to="/"
          className="relative order-3 flex justify-end sm:w-96 md:order-none"
        >
          <img className="mx-auto w-20 md:mx-0" src={logo} alt="Book Center" />
        </Link>
        {/* Mobile Menu Icon */}
        {!isAuth() && (
          <button
            onClick={toggleMenu}
            className="order-3 text-3xl md:order-none md:hidden"
          >
            <MenuIcon />
          </button>
        )}
      </motion.div>
    </div>
  );
}

{
  /* Search Section */
  /* <div
          className={`order-4 mx-auto flex w-full items-center justify-center transition-all duration-300 sm:w-5/6 lg:order-none`}
        >
          <button className="rounded-l-full bg-main-color px-7 py-3 text-white">
            ابحث
          </button>
          <input
            type="text"
            dir="rtl"
            className="w-3/6 rounded-r-full border border-main-color px-4 py-3 text-right transition-all focus:outline-none focus:ring-[.5px] focus:ring-main-color"
            placeholder="ابحث الان..."
          />
        </div> */
}
