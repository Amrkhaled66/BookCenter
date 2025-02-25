import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

import {
  setUser,
  setToken,
  clearToken,
  clearUser,
  getToken,
  getUser,
} from "src/services/authServices";

import { clearStoringCart } from "src/services/cartServices";

import useCart from "src/hooks/useCart";

const AuthContextProvider = ({ children }) => {
  const [authData, setAuthData] = useState(null);
  const { clearCart } = useCart();

  const login = async (data) => {
    setAuthData({
      token: data.accessToken,
      user: data.user,
    });
    setToken(data.accessToken);
    setUser(data.user);
  };

  const logout = async () => {
    clearToken();
    clearUser();
    clearCart();
    setAuthData(null);
  };

  const isAuth = () => {
    return getToken() ? true : false;
  };

  useEffect(() => {
    const token = getToken();
    const user = getUser();
    if (token) setAuthData({ token, user });
  }, []);

  return (
    <AuthContext.Provider value={{ authData, login, logout, isAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export { AuthContext };
