import { Outlet } from "react-router-dom";
import SideBar from "src/components/DashBoard/layout/SideBar/SideBar";
import NavBar from "src/components/DashBoard/layout/NavBar/NavBar";
import TopSection from "src/components/DashBoard/layout/Container/TopSection";
import BottomSection from "src/components/DashBoard/layout/Container/BottomSection";
export default function DashBoardLayout() {
  return (
    <div className="relative flex w-screen">
      <SideBar />
      <div className="w-[60%] flex-1 dark:bg-black">
        <NavBar />
        <div className="flex h-full flex-col items-center">
          <TopSection />
          <BottomSection>
            <Outlet />
          </BottomSection>
        </div>
      </div>
    </div>
  );
}
