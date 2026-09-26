import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  ArrowUpRight, 
  HandHeart, 
  Building2, 
  GraduationCap, 
  Briefcase, 
  Radio, 
  Network, 
  CheckCircle2, 
  Send 
} from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { PARTNERSHIP_TRACKS, SITE_CONFIG } from '../data/siteConfig';

export const PartnerPage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const elem = document.querySelector(location.hash);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.hash]);

  const [selectedTrack, setSelectedTrack] = useState<string>('funding');
  const [orgName, setOrgName] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [partnerType, setPartnerType] = useState('Funding & Underwriting');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setOrgName('');
    setContactName('');
    setEmail('');
    setNotes('');
    setTimeout(() => setSubmitted(false), 7000);
  };

  const trackIcons: Record<string, React.ReactNode> = {
    funding: <HandHeart className="w-5 h-5 text-[#D35400]" />,
    venue: <Building2 className="w-5 h-5 text-[#D35400]" />,
    knowledge: <GraduationCap className="w-5 h-5 text-[#D35400]" />,
    opportunity: <Briefcase className="w-5 h-5 text-[#D35400]" />,
    media: <Radio className="w-5 h-5 text-[#D35400]" />,
    strategic: <Network className="w-5 h-5 text-[#D35400]" />,
  };

  return (
    <div className="space-y-24 sm:space-y-32 pt-8 sm:pt-14">
      
      {/* 1. EDITORIAL HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#D35400]">
              Institutional Alignment
            </span>
            <span className="text-stone-300">·</span>
            <span className="text-xs text-stone-500 font-mono">Partnership Ecosystem</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-[#121316] leading-[1.08] text-balance">
            Partner with us to expand what young people can achieve.
          </h1>
          <p className="mt-6 text-base sm:text-lg text-stone-600 leading-relaxed font-sans">
            We partner with forward-thinking foundations, venue hosts, companies, educators, and storytellers to construct high-trust, transformative opportunities for emerging young adults.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#pathways"
              className="px-4 py-2 text-xs font-semibold bg-[#121316] text-white rounded-md hover:bg-[#D35400] transition-colors"
            >
              Explore Partnership Pathways
            </a>
            <a
              href="#enquiry-form"
              className="px-4 py-2 text-xs font-medium bg-white text-stone-800 border border-stone-300 rounded-md hover:border-stone-800 transition-colors"
            >
              Submit Partnership Enquiry ↓
            </a>
          </div>
        </div>
      </section>

      {/* 2. THE SIX STRATEGIC PARTNERSHIP PATHWAYS */}
      <section id="pathways" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <SectionHeading
          kicker="Collaboration Pathways"
          title="Six Ways Organisations Can Partner"
          description="Every category is structured for clear, accountable collaboration, ensuring your contributions generate tangible developmental impact."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PARTNERSHIP_TRACKS.map((track) => (
            <div
              key={track.id}
              id={track.id}
              className="p-8 bg-white border border-stone-200/90 rounded-xl hover:border-stone-400 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center mb-6">
                  {trackIcons[track.id] || <Briefcase className="w-5 h-5 text-[#D35400]" />}
                </div>

                <h3 className="font-serif text-2xl text-stone-900 mb-3 leading-snug">
                  {track.title}
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6">
                  {track.description}
                </p>

                <div className="space-y-3 pt-4 border-t border-stone-100">
                  <span className="text-[10px] uppercase font-semibold text-stone-500 tracking-wider block">
                    What Collaboration Involves:
                  </span>
                  <ul className="space-y-2 text-xs text-stone-700">
                    {track.involves.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#D35400]">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-stone-100 text-xs">
                <span className="font-semibold text-stone-900 block mb-0.5">Ideal For:</span>
                <span className="text-stone-500 text-[11px]">{track.idealFor}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. PARTNERSHIP ENQUIRY FORM */}
      <section id="enquiry-form" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="bg-[#121316] text-white rounded-2xl p-8 sm:p-12 lg:p-14 border border-stone-800 shadow-xl">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#D35400] block mb-2">
              Get in Touch
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-white">
              Initiate a Partnership Dialogue
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 mt-2">
              Tell us about your organisation and how you envision collaborating with Mirroring Possibilities.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 bg-stone-900 border border-emerald-700 rounded-xl text-center space-y-3">
              <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
              <h3 className="text-xl font-serif text-white">Partnership Enquiry Received</h3>
              <p className="text-xs sm:text-sm text-stone-300 max-w-md mx-auto">
                Thank you for your leadership and commitment. Our partnerships desk will review your details and respond within 2 business days.
              </p>
            </div>
          ) : (
            <form onSubmit={handlePartnerSubmit} className="space-y-4 max-w-xl mx-auto text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-stone-300 text-xs font-medium mb-1">
                    Organisation / Foundation Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Acme Foundation"
                    value={orgName}
                    onChange={(e) => setOrgName(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-stone-900 border border-stone-700 rounded-md text-white text-xs sm:text-sm focus:outline-none focus:border-[#D35400]"
                  />
                </div>

                <div>
                  <label className="block text-stone-300 text-xs font-medium mb-1">
                    Contact Person & Role
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full name, Title"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-stone-900 border border-stone-700 rounded-md text-white text-xs sm:text-sm focus:outline-none focus:border-[#D35400]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-stone-300 text-xs font-medium mb-1">
                  Official Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="contact@organisation.org"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-stone-900 border border-stone-700 rounded-md text-white text-xs sm:text-sm focus:outline-none focus:border-[#D35400]"
                />
              </div>

              <div>
                <label className="block text-stone-300 text-xs font-medium mb-1">
                  Partnership Category of Interest
                </label>
                <select
                  value={partnerType}
                  onChange={(e) => setPartnerType(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-stone-900 border border-stone-700 rounded-md text-white text-xs sm:text-sm focus:outline-none focus:border-[#D35400]"
                >
                  <option value="Funding & Underwriting">Funding & Underwriting Partner (Scholarships / Camp)</option>
                  <option value="Venue & Retreat">Venue & Retreat Partner (Facility access)</option>
                  <option value="Knowledge & Curriculum">Knowledge & Curriculum Partner (Educational design)</option>
                  <option value="Opportunity & Career">Opportunity & Career Partner (Internships / Shadowing)</option>
                  <option value="Media & Storytelling">Media & Storytelling Partner (Documentary / Reach)</option>
                  <option value="Strategic & Ecosystem">Strategic & Ecosystem Partner (Long-term alliance)</option>
                </select>
              </div>

              <div>
                <label className="block text-stone-300 text-xs font-medium mb-1">
                  Brief Overview of Proposed Collaboration
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell us about your resources, timeline, or geographic focus..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-stone-900 border border-stone-700 rounded-md text-white text-xs sm:text-sm focus:outline-none focus:border-[#D35400]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-white text-[#121316] hover:bg-[#D35400] hover:text-white transition-colors rounded-lg font-semibold text-xs sm:text-sm shadow-md"
              >
                Send Partnership Enquiry
              </button>

              <p className="text-center text-[11px] text-stone-400 mt-2">
                Direct inquiries may also be addressed to{' '}
                <a href={`mailto:${SITE_CONFIG.partnershipsEmail}`} className="text-orange-300 hover:underline">
                  {SITE_CONFIG.partnershipsEmail}
                </a>
              </p>
            </form>
          )}
        </div>
      </section>

    </div>
  );
};
