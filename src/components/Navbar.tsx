import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ChevronDown,
  Menu,
  X,
  ArrowUpRight,
  Sparkles,
  Compass,
  Users,
  Flame,
  Layers,
} from "lucide-react";
import { SITE_CONFIG } from "../data/siteConfig";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [siteIndexOpen, setSiteIndexOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setSiteIndexOpen(false);
    setActiveDropdown(null);
  }, [location.pathname, location.hash]);

  const navHierarchy = [
    {
      label: "Home",
      path: "/",
      hasChildren: false,
    },
    {
      label: "About",
      path: "/about",
      hasChildren: true,
      children: [
        {
          label: "Mirroring Possibilities",
          path: "/about",
          desc: "Our origin, vision, philosophy, and core principles",
        },
        {
          label: "Our Approach & Ecosystem",
          path: "/about#ecosystem",
          desc: "How we connect youth with life frameworks",
        },
      ],
    },
    {
      label: "Plan Twenty",
      path: "/plan-twenty",
      badge: "Flagship",
      hasChildren: true,
      children: [
        {
          label: "About the Camp",
          path: "/plan-twenty#about",
          desc: "The 4-day residential sanctuary for turning 20",
        },
        {
          label: "The Experience",
          path: "/plan-twenty#experience",
          desc: "Immersion sequence, daily rhythm, and retreat life",
        },
        {
          label: "Life Framework / Pillars",
          path: "/plan-twenty#pillars",
          desc: "The 5 foundational developmental pillars",
        },
        {
          label: "Camp FAQs",
          path: "/plan-twenty#faq",
          desc: "Eligibility, logistics, costs, and selection",
        },
      ],
    },
    {
      label: "Possibility Network",
      path: "/possibility-network",
      hasChildren: true,
      children: [
        {
          label: "Mentors",
          path: "/possibility-network#mentors",
          desc: "Intergenerational guides sharing life wisdom",
        },
        {
          label: "Speakers",
          path: "/possibility-network#speakers",
          desc: "Thought leaders in creative and professional craft",
        },
      ],
    },
    {
      label: "Impact",
      path: "/impact",
      hasChildren: true,
      children: [
        {
          label: "Our Results",
          path: "/impact",
          desc: "Measurement frameworks and evidence indicators",
        },
        {
          label: "Stories & Journal",
          path: "/stories",
          desc: "Participant reflections and thought leadership",
        },
      ],
    },
    {
      label: "Partner With Us",
      path: "/partner",
      hasChildren: false,
    },
    {
      label: "Contact",
      path: "/contact",
      hasChildren: false,
    },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          scrolled
            ? "bg-[#FAF9F6]/95 backdrop-blur-md border-b border-stone-200/80 shadow-xs py-3.5"
            : "bg-[#FAF9F6] border-b border-stone-200/50 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Zone 1: Brand Wordmark */}
            <div className="flex items-center gap-3">
              <Link
                to="/"
                className="group flex items-center gap-2.5 focus-visible:outline-2 focus-visible:outline-[#D35400] rounded-sm"
              >
                <div className="w-8 h-8 rounded-full bg-[#121316] text-[#FAF9F6] flex items-center justify-center font-serif text-sm font-bold group-hover:bg-[#D35400] transition-colors">
                  M
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-xs sm:text-xs font-normal tracking-tight text-[#121316] group-hover:text-[#D35400] transition-colors leading-none">
                    Mirroring Possibilities
                  </span>
                  <span className="text-[6px] tracking-wider uppercase text-stone-500 font-medium mt-0.5">
                    Youth Horizon Initiative
                  </span>
                </div>
              </Link>
            </div>

            {/* Zone 2: Navigation Hierarchy */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium text-stone-700">
              {navHierarchy.map((item) => {
                const isActive = location.pathname === item.path;
                if (!item.hasChildren) {
                  return (
                    <Link
                      key={item.label}
                      to={item.path}
                      className={`px-3 py-1.5 rounded-md transition-colors relative whitespace-nowrap ${
                        isActive
                          ? "text-[#121316] font-semibold bg-stone-200/60"
                          : "hover:text-[#121316] hover:bg-stone-100"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                }

                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      to={item.path}
                      className={`flex items-center gap-1 px-3 py-1.5 rounded-md transition-colors whitespace-nowrap ${
                        location.pathname.startsWith(item.path)
                          ? "text-[#121316] font-semibold bg-stone-200/60"
                          : "hover:text-[#121316] hover:bg-stone-100"
                      }`}
                    >
                      <span>{item.label}</span>
                      {item.badge && (
                        <span className="text-[9px] uppercase tracking-wider text-[#D35400] font-bold">
                          • {item.badge}
                        </span>
                      )}
                      <ChevronDown className="w-3.5 h-3.5 opacity-60 text-stone-500" />
                    </Link>

                    {/* Dropdown Menu */}
                    {activeDropdown === item.label && item.children && (
                      <div className="absolute top-full left-0 mt-1 w-64 p-2 bg-[#FAF9F6] border border-stone-200 rounded-lg shadow-lg z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.path}
                            className="block p-2.5 rounded-md hover:bg-stone-100 transition-colors group"
                          >
                            <div className="text-xs font-semibold text-stone-900 group-hover:text-[#D35400] flex items-center justify-between">
                              <span>{child.label}</span>
                              <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#D35400]" />
                            </div>
                            <p className="text-[11px] text-stone-500 line-clamp-1 mt-0.5">
                              {child.desc}
                            </p>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Zone 3: Actions & Hierarchy Drawer Toggle */}
            <div className="flex items-center gap-2.5">
              {/* Site Index Hierarchy Modal Button (Editorial touch) */}
              {/* <button
                type="button"
                onClick={() => setSiteIndexOpen(true)}
                className="hidden md:inline-flex items-center gap-1.5 text-xs font-medium text-stone-600 hover:text-stone-900 px-2.5 py-1.5 rounded-md border border-stone-300 hover:border-stone-400 bg-white/70 transition-colors"
                title="View full website architecture"
              >
                <Layers className="w-3.5 h-3.5 text-stone-500" />
                <span>Site Index</span>
              </button> */}

              {/* Primary Action Button: Apply */}
              <Link
                to="/apply"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#121316] hover:bg-[#D35400] rounded-lg transition-colors whitespace-nowrap shadow-xs"
              >
                <span>Apply</span>
                <span className="hidden sm:inline">for Thrive 20</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>

              {/* Mobile Menu Toggle Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-stone-700 hover:bg-stone-200/60 focus-visible:outline-2 focus-visible:outline-[#D35400]"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
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
      </header>

      {/* Mobile Full-Screen Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] z-30 bg-[#FAF9F6] border-t border-stone-200 overflow-y-auto lg:hidden p-6 animate-in fade-in duration-150">
          <div className="space-y-6 max-w-lg mx-auto pb-12">
            <div className="text-xs font-semibold uppercase tracking-wider text-stone-400">
              Navigation Hierarchy
            </div>

            <div className="space-y-3">
              {navHierarchy.map((item) => (
                <div
                  key={item.label}
                  className="border-b border-stone-200/70 pb-3"
                >
                  <div className="flex items-center justify-between">
                    <Link
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-lg font-serif text-[#121316] hover:text-[#D35400] transition-colors"
                    >
                      {item.label}
                    </Link>
                    {item.badge && (
                      <span className="text-[10px] uppercase font-bold text-[#D35400] bg-orange-100/60 px-2 py-0.5 rounded">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  {item.hasChildren && item.children && (
                    <div className="mt-2.5 pl-3 border-l-2 border-stone-300 space-y-2">
                      {item.children.map((sub) => (
                        <Link
                          key={sub.label}
                          to={sub.path}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block text-sm text-stone-600 hover:text-[#D35400] transition-colors py-0.5"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="pt-4 space-y-3">
              <Link
                to="/apply"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-white bg-[#121316] rounded-lg shadow-sm"
              >
                <span>Apply for Thrive 20</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                to="/partner"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-medium text-stone-800 bg-stone-200/80 rounded-lg hover:bg-stone-300/80"
              >
                <span>Partner With Us</span>
              </Link>
            </div>

            <div className="pt-6 text-xs text-stone-500 border-t border-stone-200">
              <p className="font-semibold text-stone-700">
                {SITE_CONFIG.organizationName}
              </p>
              <p className="mt-1">{SITE_CONFIG.tagline}</p>
            </div>
          </div>
        </div>
      )}

      {/* Site Index / Strategic Architecture Modal */}
      {siteIndexOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#FAF9F6] border border-stone-200 rounded-xl shadow-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8">
            <div className="flex items-center justify-between pb-4 border-b border-stone-200">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-[#D35400]">
                  Architecture Reference
                </span>
                <h3 className="text-2xl font-serif font-normal text-stone-900 mt-0.5">
                  Mirroring Possibilities Site Hierarchy
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSiteIndexOpen(false)}
                className="p-1.5 rounded-lg hover:bg-stone-200 text-stone-500 hover:text-stone-900 transition-colors"
                aria-label="Close Site Index"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-stone-600 mt-3 mb-6 leading-relaxed">
              Mirroring Possibilities is the umbrella organization. Thrive 20
              Camp (Plan Twenty) represents our flagship residential initiative.
              The framework is architected for long-term scalability across
              future programmes and campaigns.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-xs">
              <div className="p-3.5 bg-stone-100/70 rounded-lg border border-stone-200/80">
                <div className="font-semibold text-stone-900 mb-2 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-[#D35400]" />
                  <span>About</span>
                </div>
                <ul className="space-y-1.5 text-stone-600">
                  <li>
                    <Link to="/about" className="hover:text-[#D35400]">
                      └── Mirroring Possibilities
                    </Link>
                  </li>
                  <li className="pl-6 text-[10px] text-stone-500">
                    Story, Vision, Values, Philosophy
                  </li>
                </ul>
              </div>

              <div className="p-3.5 bg-orange-50/60 rounded-lg border border-orange-200/70">
                <div className="font-semibold text-stone-900 mb-2 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 text-[#D35400]" />
                  <span>Plan Twenty (Flagship)</span>
                </div>
                <ul className="space-y-1 text-stone-700">
                  <li>
                    <Link
                      to="/plan-twenty#about"
                      className="hover:text-[#D35400]"
                    >
                      ├── About the Camp
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/plan-twenty#experience"
                      className="hover:text-[#D35400]"
                    >
                      ├── Experience
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/plan-twenty#pillars"
                      className="hover:text-[#D35400]"
                    >
                      ├── Pillars
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/plan-twenty#faq"
                      className="hover:text-[#D35400]"
                    >
                      └── FAQ
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="p-3.5 bg-stone-100/70 rounded-lg border border-stone-200/80">
                <div className="font-semibold text-stone-900 mb-2 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#D35400]" />
                  <span>Apply</span>
                </div>
                <ul className="space-y-1.5 text-stone-600">
                  <li>
                    <Link to="/apply" className="hover:text-[#D35400]">
                      └── Application Form
                    </Link>
                  </li>
                  <li className="pl-6 text-[10px] text-stone-500">
                    Eligibility, Preparation, Form URL
                  </li>
                </ul>
              </div>

              <div className="p-3.5 bg-stone-100/70 rounded-lg border border-stone-200/80">
                <div className="font-semibold text-stone-900 mb-2 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#D35400]" />
                  <span>Possibility Network</span>
                </div>
                <ul className="space-y-1 text-stone-600">
                  <li>
                    <Link
                      to="/possibility-network#mentors"
                      className="hover:text-[#D35400]"
                    >
                      ├── Mentors
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/possibility-network#speakers"
                      className="hover:text-[#D35400]"
                    >
                      └── Speakers
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="p-3.5 bg-stone-100/70 rounded-lg border border-stone-200/80">
                <div className="font-semibold text-stone-900 mb-2 uppercase tracking-wider text-[11px]">
                  Impact
                </div>
                <ul className="space-y-1 text-stone-600">
                  <li>
                    <Link to="/impact" className="hover:text-[#D35400]">
                      ├── Our Results
                    </Link>
                  </li>
                  <li>
                    <Link to="/stories" className="hover:text-[#D35400]">
                      └── Stories & Journal
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="p-3.5 bg-stone-100/70 rounded-lg border border-stone-200/80">
                <div className="font-semibold text-stone-900 mb-2 uppercase tracking-wider text-[11px]">
                  Partnership & Reach
                </div>
                <ul className="space-y-1 text-stone-600">
                  <li>
                    <Link to="/partner" className="hover:text-[#D35400]">
                      ├── Partner With Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="hover:text-[#D35400]">
                      └── Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-200 flex justify-end">
              <button
                type="button"
                onClick={() => setSiteIndexOpen(false)}
                className="px-4 py-2 text-xs font-semibold text-white bg-[#121316] rounded-md hover:bg-stone-800"
              >
                Close Index
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
