import { css } from "@emotion/react";

export default function ConnectBtn({ channel, img, color }) {
  return (
    <button
      // eslint-disable-next-line react/no-unknown-property

      className={`group relative transition-all duration-300 shadow-[${color}]shadow-md w-full rounded-2xl bg-white px-5 py-4 font-cairo underline drop-shadow-xl sm:w-[90%] lg:w-[80%]`}
    >
      <span className="absolute  -top-5 right-0 h-9 w-9 group-hover:animate-shake">
        <img src={img} alt="" />
      </span>
      <span>تواصل معانا عن طريق {channel}</span>
      <span
        style={{ backgroundColor: color }}
        className="absolute bottom-0 right-0 -z-10 rounded-2xl transition-all h-[1px] w-[1px] duration-300 group-hover:h-full group-hover:w-full"
      ></span>
    </button>
  );
}
