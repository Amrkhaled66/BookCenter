import { useContext } from "react";

import {AuthContext} from "src/contexts/AuthContext";

export default function useAuth() {
  return useContext(AuthContext);
}
