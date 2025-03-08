import { WidthContext } from "src/contexts/widthContext";
import { useContext } from "react";
export default function useWidth() {
  return useContext(WidthContext);
}
