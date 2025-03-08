import Cookies from "js-cookie";

const userToken = "token";
const adminToken = "adminToken";

const setUser = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

const getUser = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null; // Handle missing data gracefully
};

const clearUser = () => {
  localStorage.removeItem("user");
};

const setToken = (token) => {
  Cookies.set(userToken, token, { secure: true, sameSite: "Strict" });
};

const getToken = () => {
  return Cookies.get(userToken);
};

const clearToken = () => {
  Cookies.remove(userToken);
};

const setAdmin = (admin) => {
  localStorage.setItem("admin", JSON.stringify(admin));
};

const getAdmin = () => {
  localStorage.getItem("admin");
};

const clearAdmin = () => {
  localStorage.removeItem("admin");
};

const setAdminToken = (token) => {
  Cookies.set(adminToken, token, { secure: true, sameSite: "Strict" });
};

const getAdminToken = () => {
  return Cookies.get(adminToken);
};

const clearAdminToken = () => {
  return Cookies.remove(adminToken);
};

const isAuth = () => !!getToken();

const login = (data) => {
  setUser(data.user);
  setToken(data.accessToken);
};

const logout = () => {
  clearToken();
  clearUser();
};

const loginAdmin = (data) => {
  setAdmin(data.admin);
  setAdminToken(data.adminToken);
};

const logoutAdmin = () => {
  clearAdmin();
  clearAdminToken();
};
export {
  getUser,
  isAuth,
  setToken,
  setUser,
  getToken,
  clearToken,
  login,
  logout,
  clearUser,
  setAdminToken,
  getAdminToken,
  clearAdminToken,
  setAdmin,
  getAdmin,
  clearAdmin,
  loginAdmin,
  logoutAdmin,
};
