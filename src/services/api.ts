import axios from "axios";
import type {
  CardResponse,
  AuthResponse,
  DashboardResponse,
  LiquidationAddress,
  RefreshKycResponse,
} from "../types";

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
// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response?.status === 401) {
//       localStorage.removeItem("token");
//       window.location.href = "/signin";
//     }
//     return Promise.reject(error);
//   }
// );

export const authAPI = {
  signup: async (
    fullName: string,
    email: string,
    password: string
  ): Promise<AuthResponse> => {
    const response = await api.post<AuthResponse>("/auth/signup", {
      fullName,
      email,
      password,
    });
    return response.data;
  },

  signin: async (email: string, password: string): Promise<AuthResponse> => {
    const response = await api.post<AuthResponse>("/auth/signin", {
      email,
      password,
    });
    return response.data;
  },
};

export const userAPI = {
  getDashboard: async (): Promise<DashboardResponse> => {
    const response = await api.get<DashboardResponse>("/user/dashboard");
    return response.data;
  },

  refreshKyc: async (): Promise<RefreshKycResponse> => {
    const response = await api.post<RefreshKycResponse>("/user/refresh-kyc");
    return response.data;
  },

  getWallets: async () => {
    const response = await api.get<LiquidationAddress | null>(
      "/bridge/address"
    );
    return response.data;
  },

  requestCard: async () => {
    const response = await api.post<CardResponse>("/card");
    return response.data;
  },

  getCard: async () => {
    const response = await api.get<CardResponse | null>("/card");
    return response.data;
  },
};

export default api;
