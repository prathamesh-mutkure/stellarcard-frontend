"use client";

import type React from "react";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import type { User, AuthContextType } from "../types";
import { authAPI, userAPI } from "../services/api";
import { toast } from "sonner";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token")
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (token) {
      refreshUserData();
    }
  }, [token]);

  const login = async (email: string, password: string) => {
    try {
      setLoading(true);
      const response = await authAPI.signin(email, password);
      setToken(response.token);
      setUser(response.user);
      localStorage.setItem("token", response.token);
      toast.success("Successfully signed in!");
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Sign in failed");
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const signup = async (fullName: string, email: string, password: string) => {
    try {
      setLoading(true);
      const response = await authAPI.signup(fullName, email, password);
      setToken(response.token);
      setUser(response.user);
      localStorage.setItem("token", response.token);
      toast.success("Account created successfully!");
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Sign up failed");
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
    toast.success("Logged out successfully");
  };

  const refreshUserData = async () => {
    try {
      const userData = await userAPI.getDashboard();
      setUser(userData);
    } catch (error) {
      console.error("Failed to refresh user data:", error);
    }
  };

  const value: AuthContextType = {
    user,
    token,
    login,
    signup,
    logout,
    refreshUserData,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
