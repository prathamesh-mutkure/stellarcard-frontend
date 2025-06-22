import React from "react";
import { ArrowRight, Star, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const CTA: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-red-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Background Stars */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-1 h-1 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-20 left-40 w-1 h-1 bg-yellow-200 rounded-full animate-pulse delay-300"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-blue-200 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-20 left-20 w-1 h-1 bg-red-200 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 right-40 w-1 h-1 bg-white rounded-full animate-pulse delay-1300"></div>
      </div>

      {/* Turkish Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-16 h-16 border-2 border-white rotate-45"></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 border-2 border-yellow-400 rotate-45"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 border-2 border-red-400 rotate-45"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <Link to="/signup">
            <div className="flex items-center justify-center mb-6">
              <Star className="w-8 h-8 text-yellow-400 fill-current mr-3" />
              <span className="text-white/80 text-lg font-medium">
                Ready to Get Started?
              </span>
              <Star className="w-8 h-8 text-yellow-400 fill-current ml-3" />
            </div>
          </Link>

          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Join the Future of
            <span className="bg-gradient-to-r from-yellow-400 via-red-400 to-yellow-400 bg-clip-text text-transparent block">
              Digital Banking
            </span>
          </h2>

          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Experience seamless crypto-to-card spending with enterprise-grade
            security, global acceptance, and the beauty of Turkish-inspired
            design.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <button className="bg-white text-slate-900 px-12 py-4 rounded-full font-bold text-lg hover:bg-white/90 transition-all duration-300 flex items-center justify-center group transform hover:scale-105">
              Create Account
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-white/40 text-white px-12 py-4 rounded-full font-semibold text-lg hover:bg-white/10 hover:border-white/60 transition-all duration-300">
              Schedule Demo
            </button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-white/60">
            <div className="flex items-center">
              <Sparkles className="w-5 h-5 mr-2 text-yellow-400" />
              <span>Visa Network Partner</span>
            </div>
            <div className="flex items-center">
              <Sparkles className="w-5 h-5 mr-2 text-blue-400" />
              <span>Bridge & Plaid Verified</span>
            </div>
            <div className="flex items-center">
              <Sparkles className="w-5 h-5 mr-2 text-green-400" />
              <span>Stellar Network</span>
            </div>
            <div className="flex items-center">
              <Sparkles className="w-5 h-5 mr-2 text-purple-400" />
              <span>Bank-Grade Security</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
