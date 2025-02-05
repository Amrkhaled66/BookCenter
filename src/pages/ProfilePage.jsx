import PageHeader from "src/components/Profile/PageHeader";
import ContainerBar from "src/components/Profile/ProfileContainer/ContainerBar";
import { Outlet } from "react-router-dom";

import useHandelPageTitle from "src/hooks/useHandelPageTitle";

import LoadingPage from "src/components/ui/LoadingPage";

export default function ProfilePage() {
  useHandelPageTitle("الصفحة الشخصية");

  return (
    <div className="w-screen bg-card-color pb-[50px] pt-[110px]">
      <div className="flex h-full flex-col items-center justify-start gap-y-10">
        <PageHeader />
        <div className="mx-auto flex h-auto min-h-screen pb-10 w-[90%] -translate-y-6 scale-95 flex-row rounded-[15px] bg-white-color shadow-container-shadow">
          <ContainerBar />
          <Outlet />
        </div>
      </div>
    </div>
  );
}
