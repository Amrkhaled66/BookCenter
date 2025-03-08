import { useContext } from "react";
import { SideBarContext } from "src/contexts/useSideBar";
export default function useSideBar() {
  return useContext(SideBarContext);
}
