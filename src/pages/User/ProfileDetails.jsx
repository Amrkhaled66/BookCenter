import React from "react";
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

const ProfileSection = ({ title, children, bgColor = "bg-card-color" }) => (
  <div className={` w-full sm:w-[65%] lg:w-1/2 drop-shadow-xl`}>
    <div
      className={`relative mx-auto w-fit items-center border-8 border-wood-color ${bgColor} px-6 py-1 font-semibold`}
    >
      <span>{title}</span>
    </div>
    <div
      className={`mx-auto mt-5 h-auto min-h-72 w-[95%] space-y-6 rounded-lg border-4 border-wood-color px-4 py-6 ${bgColor} px-3 py-4`}
    >
      {children}
    </div>
  </div>
);

const ProfileDetails = ({ user }) => (
  <div className="flex flex-col items-center justify-between gap-x-5 gap-y-4 lg:flex-row">
    <ProfileSection title="البيانات الشخصية">
      <InfoRow icon={<IoMdPerson />} title="الاسم" value={user?.name} />
      <InfoRow icon={<FaPhoneFlip />} title="رقم الهاتف" value={user?.phone} />
    </ProfileSection>
    <ProfileSection title="بيانات الاستلام" bgColor="bg-[#FFFCE5]">
      <InfoRow icon={<GrMapLocation />} title="المحافظة" value={user?.address?.city} />
      <InfoRow icon={<IoLocationOutline />} title="المركز" value={user?.address?.state} />
      <InfoRow icon={<MdOutlineLocationCity />} title="العنوان" value={user?.address?.descriptiveAddress} />
      <InfoRow icon={<FaPhoneFlip />} title="الرقم البديل" value={user?.secondaryPhone} />
    </ProfileSection>
  </div>
);

export default ProfileDetails; 