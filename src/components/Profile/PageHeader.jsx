import userProfileWave from "src/assets/userProfileWave.svg";
import UserProfileLine from "src/assets/userProfileLine.svg";

import { getUser } from "src/services/authServices";

export default function PageHeader() {
  const user = getUser().name.split(" ")[0];
  return (
    <div className="flex w-full flex-col font-cairo items-center py-10 justify-center text-third-color">
      <p className=" text-5xl font-bold ">أهلا بيك يـ {user}</p>
      <span className="pt-3">
        <img src={UserProfileLine} />
      </span>
    </div>
  );
}
