import useSideBar from "src/hooks/useSideBar";
import useWidth from "src/hooks/useWidthContext";
export default function MenuIcon({ icon }) {
  const { toggleCollapsed, toggleClosed } = useSideBar();
  const { isSmallScreen } = useWidth();
  return (
    <p className="text-2xl cursor-pointer " onClick={isSmallScreen ? toggleClosed : toggleCollapsed}>
      {icon}
    </p>
  );
}
