
import { Navigate } from "react-router-dom";

import { ADMIN_PATH } from "src/services/defaultSettings";

import { getAdminToken } from "src/services/authServices";

export default function OnlyAdmin({ children }) {
    const authToken = getAdminToken() ? true : false;

  if (!authToken) return <Navigate to={`/${ADMIN_PATH}/login`} replace />;

  return children;
}