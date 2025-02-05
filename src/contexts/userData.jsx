import { createContext, useEffect, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getProfileInfo } from "src/services/api/user";

const userDataCtx = createContext();
export default function UserDataProvider({ children }) {
  const [userData, setUserData] = useState({});

  const value = {
    userData,
    setUserData
  };

  return <userDataCtx.Provider value={value}>{children}</userDataCtx.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export { userDataCtx };
