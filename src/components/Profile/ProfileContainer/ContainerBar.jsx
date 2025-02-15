import house from "src/assets/house.png";
import info from "src/assets/info.png";
import order from "src/assets/order.png";
import DeliveryCar from "src/assets/DeliveryCar.png";
import { getUser } from "src/services/authServices";

import { NavLink } from "react-router-dom";

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

const BarElement = ({ text, imgSrc, link }) => {
  const BarElementClass = `relative flex w-full rounded-lg bg-white  items-center gap-x-3 py-2 pr-3 font-cairo text-lg font-semibold text-main-text--color overflow-hidden border-third-color hover:bg-third-color hover:text-white transition-all duration-300`;

  return (
    <NavLink
      to={link}
      end
      className={({ isActive }) =>
        isActive
          ? `!bg-third-color text-white ${BarElementClass}`
          : `${BarElementClass}`
      }
    >
      <img src={imgSrc} className="h-6 w-6" alt="image" />
      <span>{text}</span>
    </NavLink>
  );
};

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
          <p className="text-4xl font-bold text-white">{userAvatar.toUpperCase()}</p>
        </div>
        <h3 className="align-center mt-2 text-center font-mainFontRegular text-2xl font-semibold text-third-color">
          {user.name}
        </h3>
        <p className="text-center font-semibold text-third-color">
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

// after:absolute after:bottom-0 after:right-0 after:block after:h-[5px] after:w-full after:scale-x-0 after:rounded-[10px] after:bg-third-color after:transition-all after:duration-300 after:content-[''] hover:after:left-0 hover:after:scale-x-100
