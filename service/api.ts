import axiosInstance from "./config";

export const ping = async () => {
  try {
    const response = await axiosInstance.get("/ping");
    return response;
  } catch (error) {
    throw error;
  }
};
