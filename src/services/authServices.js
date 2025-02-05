import Cookies from "js-cookie";

// Store user object in localStorage
const setUser = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

// Retrieve user object from localStorage
const getUser = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null; // Handle missing data gracefully
};

// Clear user object from localStorage
const clearUser = () => {
  localStorage.removeItem("user");
};

// Set token in a secure cookie
const setToken = (token) => {
  Cookies.set("token", token, { secure: true, sameSite: "Strict" });
};

// Get token from cookie
const getToken = () => {
  return Cookies.get("token");
};

// Clear token from cookie
const clearToken = () => {
  Cookies.remove("token");
};

// Check if the user is authenticated dynamically
const isAuth = () => !!getToken();

const login = (data) => {
  setUser(data.user);
  setToken(data.accessToken);
};

const logout = () => {
  clearToken();
  clearUser();
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
};
