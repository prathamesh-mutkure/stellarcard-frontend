"use client";

import type React from "react";
import { useEffect, useState } from "react";
import { useAuth } from "../contexts/auth-context";
import { StatusBadge } from "../components/StatusBadge";
import { LoadingSpinner } from "../components/LoadingSpinner";
import {
  CreditCard,
  LogOut,
  RefreshCw,
  ExternalLink,
  DollarSign,
  History,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";
import { userAPI } from "../services/api";
import { toast } from "sonner";
import type { LiquidationAddress } from "@/types";

export const Dashboard: React.FC = () => {
  const { user, logout, refreshUserData } = useAuth();
  const [refreshing, setRefreshing] = useState(false);

  const [address, setAddress] = useState<LiquidationAddress | null>(null);

  const handleRefreshKyc = async () => {
    try {
      setRefreshing(true);
      await userAPI.refreshKyc();
      await refreshUserData();
      toast.success("Verification status updated");
    } catch (error) {
      toast.error("Failed to refresh verification status");
    } finally {
      setRefreshing(false);
    }
  };

  const getAddress = async () => {
    try {
      const response = await userAPI.getWallets();
      setAddress(response);
    } catch (error) {
      toast.error("Failed to fetch wallet address");
      return null;
    }
  };

  const isVerified =
    user?.kycStatus === "approved" && user?.tosStatus === "approved";

  useEffect(() => {
    getAddress();
  }, [isVerified]);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <CreditCard className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">
                StellarCard
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                Welcome, {user.fullName}
              </span>
              <button
                onClick={logout}
                className="flex items-center text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                <LogOut className="h-4 w-4 mr-1" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Verification Status Card */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">
              Account Verification
            </h2>
            <button
              onClick={handleRefreshKyc}
              disabled={refreshing}
              className="flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium"
            >
              <RefreshCw
                className={`h-4 w-4 mr-1 ${refreshing ? "animate-spin" : ""}`}
              />
              Refresh Status
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <h3 className="font-medium text-gray-900">KYC Verification</h3>
                <p className="text-sm text-gray-600">
                  Identity verification required
                </p>
              </div>
              <StatusBadge
                status={user.kycStatus}
                label={
                  user.kycStatus === "approved"
                    ? "Completed"
                    : user.kycStatus === "rejected"
                    ? "Rejected"
                    : "Pending"
                }
              />
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <h3 className="font-medium text-gray-900">Terms of Service</h3>
                <p className="text-sm text-gray-600">
                  Accept terms and conditions
                </p>
              </div>
              <StatusBadge
                status={user.tosStatus === "approved" ? "completed" : "pending"}
                label={user.tosStatus === "approved" ? "Accepted" : "Pending"}
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            {user.kycStatus !== "approved" && user.kycLink && (
              <a
                href={user.kycLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Complete KYC
                <ExternalLink className="h-4 w-4 ml-2" />
              </a>
            )}

            {user.tosStatus !== "approved" && user.tosLink && (
              <a
                href={user.tosLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Accept Terms
                <ExternalLink className="h-4 w-4 ml-2" />
              </a>
            )}
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {!isVerified ? (
            <div className="lg:col-span-2">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
                <AlertCircle className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">
                  Complete verification to unlock features
                </h3>
                <p className="text-yellow-700">
                  Please complete your KYC verification and accept our terms of
                  service to access card management, deposits, and transaction
                  features.
                </p>
              </div>
            </div>
          ) : (
            <>
              {/* Deposit USDC Section */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <DollarSign className="h-6 w-6 text-green-600 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900">
                    Deposit USDC
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Add funds to your account by depositing USDC or XLM
                  stablecoins.
                </p>
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">
                      Current Balance
                    </span>
                    <span className="text-lg font-semibold text-gray-900">
                      ${"0.00"} USDC
                    </span>
                  </div>
                </div>

                {address && (
                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <div className="flex justify-between items-center overflow-ellipsis overflow-hidden">
                      <span className="text-sm font-semibold text-gray-900">
                        {address.address}
                      </span>
                    </div>
                  </div>
                )}

                <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
                  Deposit Funds
                </button>
              </div>

              {/* Card Management */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <CreditCard className="h-6 w-6 text-blue-600 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900">
                    Your Card
                  </h3>
                </div>
                {!user.id ? (
                  <div>
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-4 text-white mb-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-sm opacity-80">StellarCard</p>
                          <p className="text-lg font-semibold">
                            **** **** **** 1234
                          </p>
                        </div>
                        <CreditCard className="h-8 w-8" />
                      </div>
                      <div className="mt-4 flex justify-between">
                        <div>
                          <p className="text-xs opacity-80">CARDHOLDER</p>
                          <p className="text-sm font-medium">
                            {user.fullName.toUpperCase()}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs opacity-80">EXPIRES</p>
                          <p className="text-sm font-medium">12/28</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                        Freeze Card
                      </button>
                      <button className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors">
                        Card Settings
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center">
                    <div className="bg-gray-100 rounded-lg p-8 mb-4">
                      <CreditCard className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-600">No card issued yet</p>
                    </div>
                    <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                      Request Physical Card
                    </button>
                  </div>
                )}
              </div>

              {/* Transaction History */}
              <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <History className="h-6 w-6 text-gray-600 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900">
                    Recent Transactions
                  </h3>
                </div>
                <div className="text-center py-8">
                  <History className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">No transactions yet</p>
                  <p className="text-sm text-gray-400 mt-1">
                    Your transaction history will appear here once you start
                    using your card.
                  </p>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Success Message for Verified Users */}
        {isVerified && (
          <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center">
              <CheckCircle2 className="h-5 w-5 text-green-600 mr-2" />
              <p className="text-green-800 font-medium">
                Account fully verified! You can now access all features.
              </p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
