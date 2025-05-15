import api from "./api";

export const login = async (email: string, password: string) => {
  const response = await api.post("/auth/login", { email, password });
  localStorage.setItem("token", response.data.token);
  return response.data;
};

export const register = async (
  name: string,
  email: string,
  password: string,
) => {
  const response = await api.post("/auth/register", { name, email, password });
  return response.data;
};

export const resetPassword = async (email: string) => {
  const response = await api.post("/auth/reset-password", { email });
  return response.data;
};

export const logout = () => {
  localStorage.removeItem("token");
};
