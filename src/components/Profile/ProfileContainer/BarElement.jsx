import { NavLink } from "react-router-dom";

const BarElement = ({ text, imgSrc, link }) => {
  const BarElementClass = `relative flex w-full rounded-lg bg-white  items-center gap-x-3 py-2 pr-3 font-cairo text-lg font-semibold text-main-text--color overflow-hidden border-main-color hover:bg-main-color hover:text-white transition-all duration-300`;

  return (
    <NavLink
      to={link}
      end
      className={({ isActive }) =>
        isActive
          ? `!bg-main-color text-white ${BarElementClass}`
          : `${BarElementClass}`
      }
    >
      <img src={imgSrc} className="h-6 w-6" alt="image" />
      <span>{text}</span>
    </NavLink>
  );
};

export default BarElement;
