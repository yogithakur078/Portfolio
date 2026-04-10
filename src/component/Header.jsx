import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import SocialBar from "./SocialBar";

const Header = React.memo(() => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "#home" },
    { path: "/work", label: "#works" },
    { path: "/about", label: "#about-me" },
    { path: "/contact", label: "#contacts" }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="w-full flex items-center justify-between px-4 md:px-6 lg:px-10 py-6 bg-[#1f242d] text-white sticky top-0 z-50 border-b border-purple-500/10">
      <SocialBar />
      
      {/* Logo */}
      <Link to="/" className="text-lg font-medium ml-5 hover:text-purple-400 transition-colors hidden sm:block">
        Yogesh
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-4 lg:gap-8 text-xs lg:text-sm">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`transition-colors ${
              isActive(link.path)
                ? "text-purple-400 font-semibold"
                : "text-gray-400 hover:text-gray-300"
            }`}
          >
            {link.label}
          </Link>
        ))}
        <div className="text-xs lg:text-sm text-gray-400">EN</div>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden text-white hover:text-purple-400 transition-colors"
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#252d36] border-b border-purple-500/10 md:hidden">
          <nav className="flex flex-col p-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2 rounded transition-all ${
                  isActive(link.path)
                    ? "bg-purple-600/30 text-purple-400 font-semibold"
                    : "text-gray-400 hover:text-gray-300 hover:bg-[#2a2f3a]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
});

Header.displayName = "Header";

export default Header;