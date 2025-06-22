import React from "react";
import { ArrowRight, Star, Sparkles } from "lucide-react";
import CreditCardComp from "./credit-card";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Background Stars */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-1 h-1 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-40 left-80 w-1 h-1 bg-blue-200 rounded-full animate-pulse delay-300"></div>
        <div className="absolute top-60 right-40 w-1 h-1 bg-yellow-200 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-40 left-60 w-1 h-1 bg-red-200 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 right-80 w-1 h-1 bg-white rounded-full animate-pulse delay-1300"></div>
        <div className="absolute top-32 right-20 w-1 h-1 bg-purple-200 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-60 left-40 w-1 h-1 bg-yellow-300 rounded-full animate-pulse delay-900"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <Star className="w-8 h-8 text-yellow-400 fill-current mr-3" />
              <span className="text-white/80 text-lg font-medium">
                StellarCard
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Your Gateway to
              <span className="bg-gradient-to-r from-red-400 via-yellow-400 to-red-400 bg-clip-text text-transparent block">
                Stellar Finance
              </span>
            </h1>

            <p className="text-xl text-white/80 mb-8 max-w-2xl">
              Bridge traditional banking with blockchain innovation. Deposit
              USDC on Stellar, complete KYC verification, and get a real credit
              card that works worldwide.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Link to="/signup">
                <button className="bg-gradient-to-r from-red-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-red-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group">
                  Get Started Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300">
                Watch Demo
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-white/60">
              <div className="flex items-center">
                <Sparkles className="w-4 h-4 mr-2" />
                <span className="text-sm">Visa Network</span>
              </div>
              <div className="flex items-center">
                <Sparkles className="w-4 h-4 mr-2" />
                <span className="text-sm">Apple Pay Ready</span>
              </div>
              <div className="flex items-center">
                <Sparkles className="w-4 h-4 mr-2" />
                <span className="text-sm">Global KYC</span>
              </div>
            </div>
          </div>

          {/* Right Content - Credit Card */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-red-600/20 to-purple-600/20 rounded-3xl blur-xl"></div>
              <CreditCardComp />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
