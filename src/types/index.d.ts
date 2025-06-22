export interface User {
  id: string;
  fullName: string;
  email: string;
  kycLink: string | null;
  tosLink: string | null;
  kycStatus:
    | "not_started"
    | "under_review"
    | "incomplete"
    | "approved"
    | "rejected";
  tosStatus: "pending" | "approved";
  isVerified: boolean;
  createdAt: Date;
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

export interface AuthResponse {
  access_token: string;
  user: {
    id: string;
    fullName: string;
    email: string;
  };
}

export type DashboardResponse = {
  user: {
    id: string;
    fullName: string;
    email: string;
    kycLink: string | null;
    tosLink: string | null;
    kycStatus: string;
    tosStatus: string;
    isVerified: boolean;
    createdAt: Date;
  };
  canAccessFullFeatures: boolean;
};

export type RefreshKycResponse = {
  kycStatus: string;
  tosStatus: string;
  isVerified: boolean;
  error?: undefined;
};

export type LiquidationAddress = {
  id: string;
  userId: string;
  chain: string;
  address: string;
  createdAt: Date;
  updatedAt: Date;
  bridgeId: string;
  currency: string;
  destination_payment_rail: string;
  destination_address: string;
  destination_currency: string;
  blockchain_memo: string | null;
};

export type CardResponse = {
  id: string;
  cardNumber: string;
  expiryMonth: number;
  expiryYear: number;
  cvv: string;
  usdcBalance: number;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
};
