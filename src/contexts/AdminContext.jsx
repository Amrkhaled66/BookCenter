import { createContext, useEffect, useState } from "react";
import { adminLogin, logout, refreshToken } from "src/services/api/auth";

const AdminContext = createContext();

import {
  setAdminToken,
  setAdmin,
  getAdmin,
  clearAdmin,
  getAdminToken,
} from "src/services/authServices";

const AdminContextProvider = ({ children }) => {
  const [adminData, setAdminData] = useState(null);

  const adminLogin = async (data) => {
    try {
      setAdminData({
        token: data.accessToken,
        admin: data.admin,
      });
    
      setAdminToken(data.accessToken);
      setAdmin(data.admin);
    } catch (error) {
      console.error("Admin login failed", error);
    }
  };

  const adminLogout = async () => {
    try {
      await adminLogout();
      clearAdmin();
      clearAdmin();
      setAdminData(null);
    } catch (error) {
      throw error
    }
  };

  const isAdmin = () => {
    return getAdminToken() ? true : false;
  };

  useEffect(() => {
    const token = getAdminToken();
    const admin = getAdmin();
    if (token) setAdminData({ token, admin });
  }, []);

  return (
    <AdminContext.Provider
      value={{ adminData, adminLogin, adminLogout, isAdmin }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;
export { AdminContext };
