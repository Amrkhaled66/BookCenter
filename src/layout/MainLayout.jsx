import Navbar from "src/components/Navbar/Navbar";
import Footer from "src/components/Footer/index";
import MobileMenu from "src/components/MobileMenu/MobileMenu";
import SupportBtn from "src/components/ui/SupportBtn";

import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <MobileMenu />
      <SupportBtn />
    </>
  );
}
