import type React from "react";
import { Link } from "react-router-dom";
import { CreditCard, Shield, Zap, Globe, ArrowRight } from "lucide-react";

export const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <CreditCard className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">
                StellarCard
              </span>
            </div>
            <div className="flex space-x-4">
              <Link
                to="/signin"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Get your <span className="text-blue-600">Stellar USDC</span>
            <br />
            debit card
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Spend your stablecoins anywhere with our Stellar-powered debit card.
            Instant transactions, low fees, and global acceptance.
          </p>
          <Link
            to="/signup"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
          >
            Get Your Card Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

        {/* Features */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Instant Transactions
            </h3>
            <p className="text-gray-600">
              Lightning-fast payments powered by the Stellar network. No
              waiting, no delays.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Bank-Level Security
            </h3>
            <p className="text-gray-600">
              Your funds are protected with enterprise-grade security and
              compliance.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Globe className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Global Acceptance
            </h3>
            <p className="text-gray-600">
              Use your card anywhere Visa is accepted. Online, in-store, or at
              ATMs worldwide.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to join the future of payments?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Get started in minutes. Complete KYC, deposit USDC, and receive your
            card.
          </p>
          <Link
            to="/signup"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
          >
            Create Account
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <CreditCard className="h-6 w-6 text-blue-400" />
            <span className="ml-2 text-lg font-semibold">StellarCard</span>
          </div>
          <p className="text-center text-gray-400 mt-4">
            © 2024 StellarCard. Bringing stablecoins to everyday payments.
          </p>
        </div>
      </footer>
    </div>
  );
};
