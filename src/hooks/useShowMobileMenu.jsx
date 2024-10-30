import { useContext } from "react";
import { showMobileMenuContext } from "../contexts/showMobileMenu";

export default function useShowMobileMenu() {
  return useContext(showMobileMenuContext);
}
