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
    const { response } = await axiosInstance.post("/auth/signup", sentData);
    return response;
  } catch (err) {
    throw err.response;
  }
};

const refreshToken = async () => {
  try {
    const { data } = await axiosInstance.get("/auth/refreshToken", {
      withCredentials: "true",
    });
    return data;
  } catch (err) {
    err;
    throw err.response;
  }
};

const logout = async () => {
  try {
    const { data } = await axiosInstance.post("/auth/logout", null, {
      withCredentials: "true",
    });
    return data;
  } catch (err) {
    err.response;
    throw err.response;
  }
};

export { login, signup, refreshToken, logout };
