import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Initiatives", path: "/initiatives" },
    { label: "Impact", path: "/impact" },
    { label: "Partner With Us", path: "/partner" },
    { label: "Stories", path: "/stories" },
    { label: "Contact", path: "/contact" },
  ];

  const isActive = (path: any) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar Contract: Zone 1 (Logo) - Zone 2 (Clean text links) - Zone 3 (1 Primary Action) */}
        <div className="flex items-center justify-between h-20 gap-6 lg:gap-8">
          {/* Zone 1: Official Logo */}
          <Link
            to="/"
            className="flex items-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F28524] rounded-sm shrink-0"
            aria-label="Thrive Culture Home"
          >
            <Logo className="h-9 sm:h-10 w-auto transition-transform group-hover:scale-[1.02]" />
          </Link>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-600">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative py-1 whitespace-nowrap transition-colors hover:text-stone-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F28524] rounded-sm ${
                    active ? "text-stone-950 font-bold" : "text-stone-600"
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#F28524] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <Link
              to="/initiatives/thrive-20-camp"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold tracking-wide uppercase text-white bg-stone-950 hover:bg-[#F28524] rounded-md transition-colors whitespace-nowrap shrink-0 shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F28524] focus-visible:ring-offset-2"
            >
              <span>Thrive 20 Camp</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#F28524] group-hover:text-white" />
            </Link>
          </div>

          {/* Mobile hamburger toggle */}
          <div className="flex lg:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-stone-700 hover:text-stone-950 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F28524]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-20 bottom-0 bg-stone-900/50 backdrop-blur-xs z-40 animate-in fade-in duration-150">
          <div className="bg-white border-b border-stone-200 px-6 py-6 shadow-xl max-h-[85vh] overflow-y-auto">
            <div className="flex flex-col space-y-2.5">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-3 py-2.5 text-base font-medium rounded-md transition-colors ${
                      active
                        ? "bg-[#FFF5EC] text-[#D96D14] font-bold border-l-3 border-[#F28524]"
                        : "text-stone-700 hover:bg-stone-100 hover:text-stone-950"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}

              <div className="pt-4 mt-2 border-t border-stone-200 space-y-2">
                <Link
                  to="/initiatives/thrive-20-camp"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold text-white bg-stone-950 hover:bg-[#F28524] rounded-md shadow-xs transition-colors"
                >
                  Explore Thrive 20 Camp
                  <ArrowUpRight className="w-4 h-4 text-[#F28524]" />
                </Link>
                <Link
                  to="/partner"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-stone-900 bg-stone-100 hover:bg-stone-200 rounded-md transition-colors"
                >
                  Partner With Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
