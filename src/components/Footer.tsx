import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-[#121316] text-stone-300 border-t border-stone-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Newsletter / Dispatch Bar */}
        <div className="pb-12 mb-12 border-b border-stone-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6">
            <span className="text-xs uppercase tracking-widest text-[#D35400] font-semibold">
              The Possibility Dispatch
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-normal text-white mt-1">
              Follow the journey as we build for young people.
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 mt-2 max-w-xl">
              Receive updates on upcoming cohort announcements, applications opening, curriculum dispatches, and stories from our ecosystem.
            </p>
          </div>

          <div className="lg:col-span-6">
            {subscribed ? (
              <div className="p-3 bg-stone-900 border border-emerald-800/80 rounded-lg flex items-center gap-2.5 text-emerald-400 text-xs sm:text-sm">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span>Thank you. You will receive updates as upcoming cohorts are announced.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md lg:ml-auto">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="px-3.5 py-2.5 bg-stone-900 border border-stone-700 rounded-md text-xs sm:text-sm text-white placeholder-stone-500 focus:outline-none focus:border-[#D35400] w-full"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-white text-[#121316] hover:bg-[#D35400] hover:text-white transition-colors text-xs font-semibold rounded-md whitespace-nowrap"
                >
                  Stay Updated
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-stone-800 text-xs sm:text-sm">
          
          {/* Column 1: Organization & Identity */}
          <div className="lg:col-span-2 pr-0 lg:pr-8 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-[#D35400] text-white flex items-center justify-center font-serif font-bold text-sm">
                M
              </div>
              <span className="font-serif text-xl text-white tracking-tight">
                {SITE_CONFIG.organizationName}
              </span>
            </div>
            
            <p className="text-xs text-stone-400 leading-relaxed max-w-md">
              An umbrella organisation dedicated to expanding the imagination of young people by connecting them to what is genuinely possible through mentorship, immersive experiences, and intentional life frameworks.
            </p>

            <div className="p-3 bg-stone-900/80 border border-stone-800 rounded-md text-[11px] text-stone-400">
              <span className="font-semibold text-stone-200">Architectural Note:</span> Mirroring Possibilities is the umbrella body. Thrive 20 Camp represents our flagship initiative for young adults turning twenty.
            </div>
          </div>

          {/* Column 2: Explore */}
          <div>
            <h4 className="font-semibold text-white uppercase tracking-wider text-[11px] mb-3.5">
              Explore
            </h4>
            <ul className="space-y-2 text-stone-400">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Mirroring Possibilities
                </Link>
              </li>
              <li>
                <Link to="/plan-twenty" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span>Thrive 20 Camp</span>
                  <span className="text-[9px] uppercase font-bold text-[#D35400] bg-orange-950/80 px-1.5 py-0.5 rounded">Flagship</span>
                </Link>
              </li>
              <li>
                <Link to="/initiatives" className="hover:text-white transition-colors">
                  All Initiatives & Labs
                </Link>
              </li>
              <li>
                <Link to="/impact" className="hover:text-white transition-colors">
                  Impact & Evidence
                </Link>
              </li>
              <li>
                <Link to="/stories" className="hover:text-white transition-colors">
                  Stories & Journal
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Get Involved */}
          <div>
            <h4 className="font-semibold text-white uppercase tracking-wider text-[11px] mb-3.5">
              Get Involved
            </h4>
            <ul className="space-y-2 text-stone-400">
              <li>
                <Link to="/apply" className="hover:text-white transition-colors flex items-center gap-1">
                  <span>Apply for Camp</span>
                  <ArrowUpRight className="w-3 h-3 text-[#D35400]" />
                </Link>
              </li>
              <li>
                <Link to="/possibility-network#mentors" className="hover:text-white transition-colors">
                  Join as a Mentor
                </Link>
              </li>
              <li>
                <Link to="/possibility-network#speakers" className="hover:text-white transition-colors">
                  Speak at a Cohort
                </Link>
              </li>
              <li>
                <Link to="/partner" className="hover:text-white transition-colors">
                  Partner With Us
                </Link>
              </li>
              <li>
                <Link to="/partner#funding" className="hover:text-white transition-colors">
                  Support a Scholar
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Transparency */}
          <div>
            <h4 className="font-semibold text-white uppercase tracking-wider text-[11px] mb-3.5">
              Contact & Enquiries
            </h4>
            <div className="space-y-2 text-stone-400 text-xs">
              <p>
                <span className="block text-stone-500 text-[10px] uppercase font-semibold">General Enquiries</span>
                <a href={`mailto:${SITE_CONFIG.contactEmail}`} className="text-stone-300 hover:text-white transition-colors">
                  {SITE_CONFIG.contactEmail}
                </a>
              </p>
              <p>
                <span className="block text-stone-500 text-[10px] uppercase font-semibold">Partnership Enquiries</span>
                <a href={`mailto:${SITE_CONFIG.partnershipsEmail}`} className="text-stone-300 hover:text-white transition-colors">
                  {SITE_CONFIG.partnershipsEmail}
                </a>
              </p>
              <p>
                <span className="block text-stone-500 text-[10px] uppercase font-semibold">Direct Enquiries</span>
                <span className="text-stone-400">{SITE_CONFIG.phonePlaceholder}</span>
              </p>
              <p className="pt-1">
                <Link to="/contact" className="inline-flex items-center gap-1 text-[#D35400] hover:underline font-medium">
                  <span>Contact Form & Office Hours</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Principles */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div className="flex flex-wrap items-center gap-4">
            <span>© {new Date().getFullYear()} {SITE_CONFIG.organizationName}. All rights reserved.</span>
            <span>·</span>
            <span>Non-profit youth initiative framework</span>
          </div>

          <div className="flex items-center gap-5 text-stone-400">
            {SITE_CONFIG.socials.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="hover:text-stone-200 transition-colors"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
