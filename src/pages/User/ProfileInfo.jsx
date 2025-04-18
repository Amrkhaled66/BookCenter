import { getUser } from "src/services/authServices";
import ContainerHeader from "src/components/Profile/ContainerHeader";
import ProfileDetails from "./ProfileDetails";

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
