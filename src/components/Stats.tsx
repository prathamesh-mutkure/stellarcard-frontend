import React from "react";
import { TrendingUp, Users, Globe, Shield } from "lucide-react";

const Stats: React.FC = () => {
  const stats = [
    {
      icon: Users,
      value: "500K+",
      label: "Active Users",
      description: "Trusted by users worldwide",
    },
    {
      icon: Globe,
      value: "180+",
      label: "Countries",
      description: "Global KYC coverage",
    },
    {
      icon: TrendingUp,
      value: "$2.5B+",
      label: "Transaction Volume",
      description: "Processed securely",
    },
    {
      icon: Shield,
      value: "99.9%",
      label: "Uptime",
      description: "Enterprise reliability",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-r from-red-900/20 via-purple-900/20 to-indigo-900/20 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:bg-white/20">
                <div className="bg-gradient-to-r from-red-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-xl font-semibold text-white/90 mb-2">
                  {stat.label}
                </div>
                <div className="text-white/70">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
