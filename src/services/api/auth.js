import axiosInstance from "src/utils/axiosInstance";
const login = async (phone, pass) => {
  try {
    const { data } = await axiosInstance.post(
      "/auth/login",
      { phone, pass },
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: "true",
      },
    );

    return data;
  } catch (err) {
    throw err.response;
  }
};

const signup = async (sentData) => {
  try {
    const { data } = await axiosInstance.post("/auth/signup", sentData);
    return data;
  } catch (err) {
    throw err.response;
  }
};

const refreshToken = async (role = "user") => {
  try {
    const route = role === "user" ? "/auth/refreshToken" : "admin/refreshAdmin";
    const { data } = await axiosInstance.post(
      route,
      {},
      {
        withCredentials: "true",
      },
    );
    return data;
  } catch (err) {
    throw err.response;
  }
};

const logout = async (role = "user") => {
  try {
    const route = role === "user" ? "/auth/logout" : "/auth/adminLogout";
    const { data } = await axiosInstance.post(route, null, {
      withCredentials: "true",
    });
    return data;
  } catch (err) {
    throw err.response;
  }
};

const adminLogin = async (email, pass) => {
  try {
    const { data } = await axiosInstance.post(
      "/admin/loginAdmin",
      { email, pass },
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: "true",
      },
    );
    return data;
  } catch (err) {
    throw err.response;
  }
};

const loginAsUser = async (axiosAdmin, phone) => {
  try {
    const { data } = await axiosAdmin.post("/admin/loginAsUser", phone);
    return data;
  } catch (err) {
    throw err.response;
  }
};

export { login, signup, refreshToken, logout, loginAsUser, adminLogin };
