import React from "react";
import { Star, Twitter, Linkedin, Github, Mail } from "lucide-react";

const Footer: React.FC = () => {
  const footerSections = [
    {
      title: "Product",
      links: [
        { label: "Features", href: "#features" },
        { label: "Security", href: "#security" },
        { label: "Pricing", href: "#pricing" },
        { label: "API Docs", href: "#api" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#about" },
        { label: "Careers", href: "#careers" },
        { label: "Press", href: "#press" },
        { label: "Partners", href: "#partners" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Help Center", href: "#help" },
        { label: "Contact Us", href: "#contact" },
        { label: "Status", href: "#status" },
        { label: "Community", href: "#community" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "#privacy" },
        { label: "Terms of Service", href: "#terms" },
        { label: "Cookie Policy", href: "#cookies" },
        { label: "Compliance", href: "#compliance" },
      ],
    },
  ];

  return (
    <footer className="bg-slate-900 border-t border-white/10">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-red-600 to-purple-600 p-2 rounded-xl">
                <Star className="w-6 h-6 text-white fill-current" />
              </div>
              <div className="text-white">
                <div className="text-xl font-bold">StellarCard</div>
                <div className="text-xs text-white/60">
                  Virtual Stablecoin Card
                </div>
              </div>
            </div>
            <p className="text-white/70 mb-6 max-w-sm">
              Bridging traditional banking with blockchain innovation. Your
              gateway to stellar finance with Turkish elegance.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white/60 hover:text-white transition-colors duration-200"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-white transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-white transition-colors duration-200"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-white transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-white/60 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/60 text-sm mb-4 md:mb-0">
              © 2025 StellarCard. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-white/60">
              <span>🇹🇷 Made with love in Istanbul</span>
              <span>⭐ Powered by Stellar Network</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
