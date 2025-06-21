export interface User {
  id: string;
  fullName: string;
  email: string;
  kycStatus: "pending" | "completed" | "rejected";
  tosAccepted: boolean;
  kycLink?: string;
  tosLink?: string;
  cardIssued: boolean;
  balance?: number;
}

export interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (fullName: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  refreshUserData: () => Promise<void>;
  loading: boolean;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
}

export interface LoginResponse {
  token: string;
  user: User;
}
