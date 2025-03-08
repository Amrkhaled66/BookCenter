import { useContext } from "react";

import { AuthContext } from "src/contexts/authContext";

export default function useAuth() {
  return useContext(AuthContext);
}
