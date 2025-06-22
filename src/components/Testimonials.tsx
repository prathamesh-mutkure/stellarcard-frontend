import React from "react";
import { Star, Quote } from "lucide-react";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Ayşe Demir",
      role: "Digital Nomad",
      location: "Istanbul, Turkey",
      content:
        "Finally, a card that bridges my crypto holdings with everyday spending. The KYC process was smooth and I love using it with Apple Pay.",
      rating: 5,
      avatar:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    },
    {
      name: "Marcus Chen",
      role: "Entrepreneur",
      location: "Singapore",
      content:
        "The global acceptance is incredible. I've used my StellarCard in 15 countries without any issues. The Stellar network makes transfers so fast.",
      rating: 5,
      avatar:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    },
    {
      name: "Sofia Rodriguez",
      role: "Freelancer",
      location: "Barcelona, Spain",
      content:
        "The security features give me peace of mind. Bridge integration made verification effortless, and the card design is absolutely stunning.",
      rating: 5,
      avatar:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-yellow-400 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-red-400 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            What Our Users Say
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Join thousands of satisfied users who've made the switch to Stellar
            Istanbul
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group hover:bg-white/10"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="text-white font-semibold">
                    {testimonial.name}
                  </h4>
                  <p className="text-white/60 text-sm">{testimonial.role}</p>
                  <p className="text-white/50 text-xs">
                    {testimonial.location}
                  </p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              <div className="relative">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-red-400/30" />
                <p className="text-white/80 leading-relaxed pl-6">
                  {testimonial.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
