export default function LeftSection({ children, className = "" }) {
  const cssClass = ` flex items-center justify-center h-auto lg:h-screen py-14 overflow-hidden w-screen lg:w-[45%]  ${className}`;
  return (
    <div className={cssClass}>
        {children}
      
    </div>
  );
}
