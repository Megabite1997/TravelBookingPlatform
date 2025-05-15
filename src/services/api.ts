import axios from "axios";

// Create Axios instance
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000",
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptors for request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Interceptors for response
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      console.error("Unauthorized - Redirecting to login");
    }
    return Promise.reject(error);
  },
);

export default api;
