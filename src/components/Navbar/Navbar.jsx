import logo from "../../assets/logo.svg";

import { motion } from "framer-motion";

import useIsNavStickyContext from "../../hooks/useIsNavSticky";
import useShowMobileMenu from "../../hooks/useShowMobileMenu";

import Progressbar from "./Progressbar";
import NavLinks from "./NavLinks";
import MenuIcon from "./MenuIcon";

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

        {/* Logo */}
        <p className="order-2 sm:w-96 lg:order-none">
          <img className="mx-auto w-20 md:mx-0" src={logo} alt="Book Center" />
        </p>

        {/* Search Section */}
        {/* <div
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
        </div> */}

        {/* Mobile Menu Icon */}
        <button
          onClick={toggleMenu}
          className="order-1 text-3xl md:order-none md:hidden"
        >
          <MenuIcon />
        </button>

        <NavLinks />
      </motion.div>
    </div>
  );
}
