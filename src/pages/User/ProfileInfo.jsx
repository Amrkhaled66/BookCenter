import { getUser } from "src/services/authServices";
import ContainerHeader from "src/components/Profile/ContainerHeader";
import Stikes from "src/assets/Stikes.svg?react";
import ProfileDetails from "./ProfileDetails";

import { IoMdPerson } from "react-icons/io";
import { FaPhoneFlip } from "react-icons/fa6";
import { GrMapLocation } from "react-icons/gr";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineLocationCity } from "react-icons/md";

const InfoRow = ({ title, value, icon }) => (
  <div className="flex flex-wrap items-center justify-between gap-x-3 font-bold tracking-wide">
    <span className="flex items-center gap-x-3 font-mainFontRegular font-thin">
      {icon} {title}
    </span>
    <span>{value}</span>
  </div>
);

const ProfileSection = ({
  title,
  children,
  bgColor = "bg-card-color",
}) => (
  <div className={` w-full sm:w-[65%] lg:w-1/2 drop-shadow-xl`}>
    <div
      className={`relative mx-auto w-fit items-center border-8 border-wood-color ${bgColor} px-6 py-1 font-semibold`}
    >
      <span>{title}</span>
      <Stikes className="absolute left-1/2 -z-10 w-[80%] -translate-x-1/2" />
    </div>
    <div
      className={`mx-auto mt-5 h-auto min-h-72 w-[95%] space-y-6 rounded-lg border-4 border-wood-color px-4 py-6 ${bgColor} px-3 py-4`}
    >
      {children}
    </div>
  </div>
);

export default function UserProfileDetails() {
  const user = getUser();

  return (
    <div className="drop flex h-auto w-full flex-1 flex-col pt-3 font-cairo">
      <ContainerHeader
        title="بيانات الحساب"
        subTitle="لو حابب تعدل بيانات حسابك"
      />
      {/* profile details */}
      <div className="mx-auto flex h-auto min-h-screen w-[90%] flex-1 flex-col gap-y-14 pt-10">
        <ProfileDetails user={user} />
      </div>
    </div>
  );
}
