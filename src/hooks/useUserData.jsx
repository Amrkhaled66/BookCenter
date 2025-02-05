import { userDataCtx } from "src/contexts/userData";
import { useContext } from "react";


export default function useUserData() {
  return useContext(userDataCtx);
}
