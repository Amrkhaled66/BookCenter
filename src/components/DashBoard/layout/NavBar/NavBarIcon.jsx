import { Tooltip } from "@mui/material";

export default function NavBarIcon({
  icon,
  title,
  dotColor,
  children,
  ...props
}) {
  return (
    <Tooltip
      title={title}
      placement="top"
      slotProps={{
        popper: {
          modifiers: [
            {
              name: "offset",
              options: {
                offset: [0, -5],
              },
            },
          ],
        },
      }}
      arrow
    >
      <div
        className={` hover:drop-shadow-md flex items-center space-x-1 ${children ? "rounded-lg" : "rounded-[50%]"} hover:bg-light-gray`}
      >
        <button className={`relative p-2 text-sm md:text-2xl`} {...props}>
          {dotColor && (
            <span
              style={{ background: dotColor }}
              className="absolute right-2 top-2 h-2 w-2 rounded-full"
            ></span>
          )}
          {icon}
        </button>
        {children && (
          <p className="flex items-center text-sm font-bold text-gray-400">
            {children}
          </p>
        )}
      </div>
    </Tooltip>
  );
}
