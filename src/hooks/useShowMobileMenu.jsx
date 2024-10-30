import { useContext } from "react";
import { showMobileMenuContext } from "../contexts/ShowMobileMenu";

export default function useShowMobileMenu() {
  return useContext(showMobileMenuContext);
}
