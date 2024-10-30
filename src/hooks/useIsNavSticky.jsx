import { isNavStickyContext } from "../contexts/isNavSticky";
import { useContext } from "react";

export default function useIsNavStickyContext() {
  return useContext(isNavStickyContext);
}
