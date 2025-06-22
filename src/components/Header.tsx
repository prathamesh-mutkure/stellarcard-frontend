import React, { useState } from "react";
import { Star, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Security", href: "#security" },
    { label: "Pricing", href: "#pricing" },
    { label: "Support", href: "#support" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-red-600 to-purple-600 p-2 rounded-xl">
              <Star className="w-6 h-6 text-white fill-current" />
            </div>
            <div className="text-white">
              <div className="text-xl font-bold">StellarCard</div>
              <div className="text-xs text-white/60">Digital Wallet</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white/80 hover:text-white transition-colors duration-200 font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/signin">
              <button className="text-white/80 hover:text-white transition-colors duration-200 font-medium">
                Sign In
              </button>
            </Link>
            <Link to="/signup">
              <button className="bg-gradient-to-r from-red-600 to-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:from-red-700 hover:to-purple-700 transition-all duration-300">
                Get Started
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-white/10">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-white/80 hover:text-white transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col space-y-3 pt-4 border-t border-white/10">
                <Link to="/signin">
                  <button className="text-white/80 hover:text-white transition-colors duration-200 font-medium text-left">
                    Sign In
                  </button>
                </Link>

                <Link to="/signup">
                  <button className="bg-gradient-to-r from-red-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:from-red-700 hover:to-purple-700 transition-all duration-300 text-center">
                    Get Started
                  </button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
