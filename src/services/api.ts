import axios from "axios";
import type { User, LoginResponse, ApiResponse } from "../types";

const API_BASE_URL = "http://localhost:3000";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor to add auth token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor to handle token expiry
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/signin";
    }
    return Promise.reject(error);
  }
);

export const authAPI = {
  signup: async (
    fullName: string,
    email: string,
    password: string
  ): Promise<LoginResponse> => {
    const response = await api.post<ApiResponse<LoginResponse>>(
      "/auth/signup",
      {
        fullName,
        email,
        password,
      }
    );
    return response.data.data!;
  },

  signin: async (email: string, password: string): Promise<LoginResponse> => {
    const response = await api.post<ApiResponse<LoginResponse>>(
      "/auth/signin",
      {
        email,
        password,
      }
    );
    return response.data.data!;
  },
};

export const userAPI = {
  getDashboard: async (): Promise<User> => {
    const response = await api.get<ApiResponse<User>>("/user/dashboard");
    return response.data.data!;
  },

  refreshKyc: async (): Promise<User> => {
    const response = await api.post<ApiResponse<User>>("/user/refresh-kyc");
    return response.data.data!;
  },
};

export default api;
