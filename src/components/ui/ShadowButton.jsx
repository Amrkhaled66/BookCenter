export default function ShadowButton({
  children,
  className,
  bgColor,
  textColor,
  ...props
}) {
  let buttonClass =
    className +
    ` font-mainFontRegular flex items-center gap-x-1 font-medium rounded-lg bg-${bgColor} px-4 py-3 bg-white dark:bg-transparent text-${textColor} transition-all text-xl duration-300 hover:scale-105 hover:drop-shadow-xl  md:px-4 md:py-2 `;
  return (
    <button {...props} className={buttonClass} {...props}>
      {children}
    </button>
  );
}
