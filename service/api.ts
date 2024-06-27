import axiosInstance, { APP_TOKEN, saveToken } from "./config";

export const ping = async () => {
  try {
    const response = await axiosInstance.get("/ping");
    return response;
  } catch (error) {
    throw error;
  }
};

export const loginUser = async ({ email, password }: ISignIn) => {
  try {
    const response = await axiosInstance.post("/user/login", {
      email,
      password,
    });
    const _token = response.data.token;
    axiosInstance.defaults.headers.common["Authorization"] = _token;
    await saveToken(APP_TOKEN, _token);
    return response.data.user;
  } catch (error) {
    throw error;
  }
};

export const registerUser = async ({ name, email, password }: IUser) => {
  try {
    const response = await axiosInstance.post("/user/register", {
      name,
      email,
      password,
    });
    return response.data.user
  } catch (error) {
    throw error;
  }
};
