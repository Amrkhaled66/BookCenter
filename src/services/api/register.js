import { axiosPrivate } from "src/utils/axiosInstance";
import axiosInstance from "src/utils/axiosInstance";
const login = async (phone, pass) => {
  try {
    const { data } = await axiosInstance.post(
      "/user/login",
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
    const { response } = await axiosInstance.post("/user/signup", sentData);
    return response;
  } catch (err) {
    throw err.response;
  }
};

const refreshToken = async () => {
  try {
    const { data } = await axiosInstance.get("/user/refreshToken", {
      withCredentials: "true",
    });
    return data;
  } catch (err) {
    console.log(err);
    throw err.response;
  }
};

export { login, signup, refreshToken };
