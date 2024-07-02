import axiosInstance from "./config";

export const createTodo = async (TodoObj: ICreateTodo) => {
  try {
    const response = await axiosInstance.post("/todo/create", {
      ...TodoObj,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getTodos = async () => {
  try {
    const response = await axiosInstance.get("/todo/all");
    return response.data;
  } catch (error) {
    throw error;
  }
};

