import { useContext } from "react";

import { ColorsContext } from "../contexts/Colors";

export default function useColors() {
  return useContext(ColorsContext);
}
