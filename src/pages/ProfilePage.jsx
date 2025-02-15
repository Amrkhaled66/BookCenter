import PageHeader from "src/components/Profile/PageHeader";
import ContainerBar from "src/components/Profile/ProfileContainer/ContainerBar";
import { Outlet } from "react-router-dom";

import useHandelPageTitle from "src/hooks/useHandelPageTitle";

export default function ProfilePage() {
  useHandelPageTitle("الصفحة الشخصية");

  return (
    <div className="w-screen pb-[50px] pt-[110px]">
      <div className="flex h-full flex-col items-center justify-start gap-y-10">
        {/* <PageHeader /> */}
        <div className="mx-auto  flex h-full min-h-screen w-full -translate-y-6 scale-95 flex-col rounded-[5px] border-[1px] border-gray-color lg:w-[80%] xl:flex-row">
          <ContainerBar />
          <div className="w-full   pb-8" >
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
