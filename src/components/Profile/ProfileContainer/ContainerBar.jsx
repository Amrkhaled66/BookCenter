import house from "src/assets/house.png";
import info from "src/assets/info.png";
import order from "src/assets/order.png";
import DeliveryCar from "src/assets/DeliveryCar.png";

import { NavLink } from "react-router-dom";

const grayColor = "bg-gray-100";

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
  const BarElementClass = `relative flex w-full items-center gap-x-3 py-2 pr-8 font-cairo ${grayColor} text-lg font-semibold text-main-text--color overflow-hidden border-third-color hover:bg-third-color hover:text-white transition-all duration-300`;

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
  return (
    <div
      className={`flex h-auto w-[17%] flex-col gap-y-10 border-l-4 border-l-${grayColor} pt-5`}
    >
      {/* circle section */}
      <div className={`w-full py-6 border-b-${grayColor} border-b-4`}>
        <div className="mx-auto flex h-[150px] w-[150px] items-center justify-center rounded-full bg-main-text--color">
          <p className="text-4xl font-bold text-white">AK</p>
        </div>
        <h3 className="align-center mt-2 text-center font-mainFontRegular text-2xl font-semibold text-third-color">
          Amr Khaled
        </h3>
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
