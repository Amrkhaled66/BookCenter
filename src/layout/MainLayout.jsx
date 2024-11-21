import Navbar from "src/components/Navbar/Navbar";
import Footer from "src/components/Footer";
import MobileMenu from "src/components/MobileMenu/MobileMenu";
import { Outlet } from "react-router-dom";
export default function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <MobileMenu />
    </>
  );
}
