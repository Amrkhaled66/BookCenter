import { Navigate, Outlet } from "react-router-dom";

import { isAuth } from "src/services/authServices";

const ProtectedRoute = ({ children }) => {
  if (!isAuth()) return <Navigate to="/login" replace />;

  return children;
};

export default ProtectedRoute;
