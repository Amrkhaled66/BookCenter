import { Navigate, useLocation } from "react-router-dom";

import { getToken } from "src/services/authServices";

const OnlyGuestRoute = ({ children }) => {
  const authToken = getToken() ? true : false;

  return !authToken ? (
    <>{children}</>
  ) : (
    <>
      <Navigate to="/" replace/>
    </>
  );
};

export default OnlyGuestRoute;
