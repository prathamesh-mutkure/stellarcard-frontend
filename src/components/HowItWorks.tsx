import React from "react";
import { UserPlus, FileCheck, DollarSign, CreditCard } from "lucide-react";

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Sign Up",
      description:
        "Create your Stellar Card account in minutes with just your email",
      step: "01",
    },
    {
      icon: FileCheck,
      title: "Complete KYC",
      description:
        "Verify your identity through our secure Bridge and Plaid integration",
      step: "02",
    },
    {
      icon: DollarSign,
      title: "Deposit USDC",
      description: "Fund your wallet by depositing USDC on the Stellar network",
      step: "03",
    },
    {
      icon: CreditCard,
      title: "Get Your Card",
      description:
        "Receive your physical card and add it to Apple/Google Pay instantly",
      step: "04",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-800 to-slate-900 relative">
      {/* Turkish Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-8 h-8 border-2 border-red-400 rotate-45"></div>
        <div className="absolute top-20 left-20 w-8 h-8 border-2 border-yellow-400 rotate-45"></div>
        <div className="absolute top-30 left-30 w-8 h-8 border-2 border-red-400 rotate-45"></div>
        <div className="absolute bottom-10 right-10 w-8 h-8 border-2 border-purple-400 rotate-45"></div>
        <div className="absolute bottom-20 right-20 w-8 h-8 border-2 border-blue-400 rotate-45"></div>
        <div className="absolute bottom-30 right-30 w-8 h-8 border-2 border-red-400 rotate-45"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            How It Works
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Get your Stellar card in four simple steps and start spending your
            USDC worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-red-600 to-purple-600 transform translate-x-4 z-0"></div>
              )}

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group hover:bg-white/10 relative z-10">
                <div className="text-center">
                  <div className="relative mb-6">
                    <div className="bg-gradient-to-r from-red-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-yellow-400 text-slate-900 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-red-600 to-purple-600 text-white px-12 py-4 rounded-full font-semibold text-lg hover:from-red-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
