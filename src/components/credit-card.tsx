import React from "react";
import { CreditCard as CreditCardIcon, Star, Wifi } from "lucide-react";

interface CreditCardProps {
  cardNumber?: string;
  cardHolder?: string;
  expiryDate?: string;
  cvv?: string;
  variant?: "front" | "back";
}

const CreditCardComp: React.FC<CreditCardProps> = ({
  cardNumber = "5432 1098 7654 3210",
  cardHolder = "MEHMET YILDIZ",
  expiryDate = "12/28",
  cvv = "123",
  variant = "front",
}) => {
  const formatCardNumber = (number: string) => {
    return number
      .replace(/\s/g, "")
      .replace(/(.{4})/g, "$1 ")
      .trim();
  };

  if (variant === "back") {
    return (
      <div className="w-96 h-60 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900 via-purple-900 to-indigo-900 rounded-2xl shadow-2xl transform perspective-1000 rotate-y-180">
          {/* Magnetic Strip */}
          <div className="w-full h-12 bg-black mt-6"></div>

          {/* CVV Section */}
          <div className="absolute bottom-16 right-6 bg-white/20 backdrop-blur-sm rounded-lg p-3">
            <div className="text-xs text-white/80 mb-1">CVV</div>
            <div className="text-white font-mono text-sm tracking-wider">
              {cvv}
            </div>
          </div>

          {/* Turkish Pattern */}
          <div className="absolute bottom-4 left-6 text-white/30">
            <div className="text-xs">STELLAR BANK TÜRKIYE</div>
          </div>

          {/* Stars */}
          <Star className="absolute top-4 right-6 w-4 h-4 text-yellow-300 fill-current animate-pulse" />
          <Star className="absolute top-12 right-12 w-3 h-3 text-blue-200 fill-current animate-pulse delay-300" />
          <Star className="absolute bottom-8 left-8 w-2 h-2 text-white fill-current animate-pulse delay-700" />
        </div>
      </div>
    );
  }

  return (
    <div className="w-96 h-60 relative group">
      <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-purple-800 to-indigo-900 rounded-2xl shadow-2xl transform transition-all duration-700 group-hover:scale-105 group-hover:shadow-3xl">
        {/* Cosmic Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-4 left-8 w-32 h-32 border border-white/30 rounded-full"></div>
          <div className="absolute top-12 left-16 w-16 h-16 border border-white/20 rounded-full"></div>
          <div className="absolute bottom-8 right-8 w-24 h-24 border border-red-300/30 rounded-full"></div>
        </div>

        {/* Turkish Geometric Pattern */}
        <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden rounded-tr-2xl">
          <div className="absolute inset-0 bg-gradient-to-bl from-red-500/30 to-transparent">
            <div className="absolute top-2 right-2 w-4 h-4 border-2 border-white/40 rotate-45"></div>
            <div className="absolute top-6 right-6 w-4 h-4 border-2 border-white/40 rotate-45"></div>
            <div className="absolute top-10 right-10 w-4 h-4 border-2 border-white/40 rotate-45"></div>
          </div>
        </div>

        {/* Stars */}
        <Star className="absolute top-6 left-6 w-5 h-5 text-yellow-300 fill-current animate-pulse" />
        <Star className="absolute top-12 left-12 w-3 h-3 text-blue-200 fill-current animate-pulse delay-300" />
        <Star className="absolute top-20 left-20 w-4 h-4 text-white fill-current animate-pulse delay-500" />
        <Star className="absolute bottom-20 right-20 w-3 h-3 text-red-200 fill-current animate-pulse delay-700" />
        <Star className="absolute bottom-12 right-12 w-2 h-2 text-yellow-200 fill-current animate-pulse delay-1000" />

        {/* Card Content */}
        <div className="relative z-10 p-6 h-full flex flex-col justify-between">
          {/* Header */}
          <div className="flex justify-between items-start">
            <div className="flex items-center space-x-2">
              <CreditCardIcon className="w-8 h-8 text-white" />
              <div className="text-white">
                <div className="text-sm font-bold">STELLAR</div>
                <div className="text-xs opacity-80">İSTANBUL</div>
              </div>
            </div>
            <Wifi className="w-6 h-6 text-white/80 rotate-90" />
          </div>

          {/* Card Number */}
          <div className="space-y-4">
            <div className="text-white font-mono text-xl tracking-wider group-hover:tracking-widest transition-all duration-300">
              {formatCardNumber(cardNumber)}
            </div>

            {/* Card Details */}
            <div className="flex justify-between items-end">
              <div>
                <div className="text-white/60 text-xs uppercase tracking-wide">
                  Card Holder
                </div>
                <div className="text-white font-semibold text-sm">
                  {cardHolder}
                </div>
              </div>
              <div>
                <div className="text-white/60 text-xs uppercase tracking-wide">
                  Expires
                </div>
                <div className="text-white font-semibold text-sm">
                  {expiryDate}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Pattern */}
          {/* <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-yellow-400 to-red-500"></div> */}
        </div>

        {/* Holographic Effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
      </div>
    </div>
  );
};

export default CreditCardComp;
