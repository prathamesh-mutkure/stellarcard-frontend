import React from "react";
import {
  Shield,
  Globe,
  Smartphone,
  CreditCard,
  Zap,
  Users,
} from "lucide-react";

const Features: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: "Global KYC Verification",
      description:
        "Powered by Bridge and Plaid for seamless identity verification across 180+ countries",
      highlight: "Bridge & Plaid Integration",
    },
    {
      icon: Smartphone,
      title: "Mobile Wallet Ready",
      description:
        "Add your card instantly to Apple Pay and Google Pay for contactless payments worldwide",
      highlight: "Apple & Google Pay",
    },
    {
      icon: CreditCard,
      title: "Real Credit Card",
      description:
        "Get a physical and virtual Visa card that works at millions of merchants globally",
      highlight: "Visa Network",
    },
    {
      icon: Globe,
      title: "Worldwide Acceptance",
      description:
        "Use your card anywhere Visa is accepted - that's over 100 million locations worldwide",
      highlight: "100M+ Locations",
    },
    {
      icon: Zap,
      title: "Instant USDC Deposits",
      description:
        "Deposit USDC on Stellar network with lightning-fast settlement and low fees",
      highlight: "Stellar Network",
    },
    {
      icon: Users,
      title: "Enterprise Security",
      description:
        "Bank-grade security with multi-signature wallets and advanced fraud protection",
      highlight: "Bank-Grade Security",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 border border-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 border border-red-300 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 border border-purple-300 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Why Choose
            <span className="bg-gradient-to-r from-red-400 to-yellow-400 bg-clip-text text-transparent">
              {" "}
              StellarCard
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Experience the perfect fusion of traditional banking and blockchain
            innovation, designed for the modern global citizen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group hover:bg-white/10"
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-red-600 to-purple-600 p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {feature.title}
                  </h3>
                  <span className="text-sm text-red-400 font-medium">
                    {feature.highlight}
                  </span>
                </div>
              </div>
              <p className="text-white/70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
