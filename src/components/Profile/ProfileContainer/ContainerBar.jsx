import info from "src/assets/info.png";
import order from "src/assets/order.png";
import DeliveryCar from "src/assets/DeliveryCar.png";
import { getUser } from "src/services/authServices";

import BarElement from "./BarElement";

const barElements = [
  {
    text: "بياناتي",
    imgSrc: info,
    link: "/profile",
  },
  {
    text: "أوردراتي",
    imgSrc: order,
    link: "orders",
  },
  {
    text: "بيانات الاستلام",
    imgSrc: DeliveryCar,
    link: "address",
  },
];

export default function ContainerBar() {
  const user = getUser();

  const userAvatar = user.name.split(" ")[0][0] + user.name.split(" ")[1][0];
  return (
    <div
      className={`flex w-full flex-col gap-y-10 border-l-gray-color px-2 pt-5 xl:w-[25%] xl:border-l-[1px]`}
    >
      {/* circle section */}
      <div className={`w-full border-b-gray-color py-8 xl:border-b-[1px]`}>
        <div className="mx-auto flex h-[150px] w-[150px] items-center justify-center rounded-full bg-main-text--color">
          <p className="text-4xl font-bold text-white">
            {userAvatar.toUpperCase()}
          </p>
        </div>
        <h3 className="align-center font-mainFontRegular mt-2 text-center text-2xl font-semibold text-main-color">
          {user.name}
        </h3>
        <p className="text-center font-semibold text-main-color">
          {user.phone}
        </p>
      </div>

      {/* Pages section */}
      <div className="w-full space-y-1">
        {barElements.map((element) => (
          <BarElement key={element.text} {...element} />
        ))}
      </div>
    </div>
  );
}
