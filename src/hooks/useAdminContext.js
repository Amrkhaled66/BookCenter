import { useContext } from "react";
import { AdminContext } from "src/contexts/AdminContext";

export default function useAdminContext() {
  return useContext(AdminContext);
}
