import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail } from 'lucide-react';
import Logo from './Logo';
import { siteConfig } from '../data/siteConfig';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-14 border-b border-stone-800">
          
          {/* Column 1 & 2: Official Brand Logo & Concise Mission */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block" aria-label="Thrive Culture Home">
              <Logo theme="dark" className="h-9 w-auto" />
            </Link>
            <p className="text-stone-400 text-sm leading-relaxed max-w-sm">
              Helping young people expand their possibilities through transformative exposure, practical skills, and lifelong networks.
            </p>
            <div className="pt-1 text-xs text-stone-400 space-y-1">
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#F28524]" />
                <a
                  href={`mailto:${siteConfig.contact.officialEmail}`}
                  className="hover:text-[#F28524] transition-colors underline decoration-stone-700 underline-offset-4"
                >
                  {siteConfig.contact.officialEmail}
                </a>
              </p>
            </div>
          </div>

          {/* Column 3: Navigation */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-100 mb-4">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/about" className="hover:text-[#F28524] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/initiatives" className="hover:text-[#F28524] transition-colors">
                  Initiatives
                </Link>
              </li>
              <li>
                <Link to="/impact" className="hover:text-[#F28524] transition-colors">
                  Impact & Outcomes
                </Link>
              </li>
              <li>
                <Link to="/stories" className="hover:text-[#F28524] transition-colors">
                  Stories & Journal
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#F28524] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Initiatives */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-100 mb-4">
              Programmes
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  to="/initiatives/thrive-20-camp"
                  className="flex items-center gap-1 group hover:text-[#F28524] transition-colors"
                >
                  <span>Thrive 20 Camp</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#F28524] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </li>
              <li>
                <Link to="/initiatives#nslc" className="hover:text-[#F28524] transition-colors">
                  Students Leadership Conf.
                </Link>
              </li>
              <li>
                <span className="text-stone-500 text-xs italic">
                  More initiatives in pipeline
                </span>
              </li>
            </ul>
          </div>

          {/* Column 5: Partnerships */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-100 mb-4">
              Get Involved
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/partner" className="hover:text-[#F28524] transition-colors">
                  Partner Pathways
                </Link>
              </li>
              <li>
                <Link to="/partner#funding" className="hover:text-[#F28524] transition-colors">
                  Funding & Scholarships
                </Link>
              </li>
              <li>
                <Link to="/partner#venue" className="hover:text-[#F28524] transition-colors">
                  Venue Partnerships
                </Link>
              </li>
              <li>
                <Link to="/partner#knowledge" className="hover:text-[#F28524] transition-colors">
                  Knowledge Facilitators
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar with quiet copyright & placeholder social links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            © {currentYear} {siteConfig.orgName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {siteConfig.contact.socials.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noreferrer noopener"
                className="hover:text-[#F28524] transition-colors"
                title={`${social.platform} (Configurable link)`}
              >
                {social.platform}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
