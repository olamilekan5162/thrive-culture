import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  ArrowUpRight 
} from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { SITE_CONFIG } from '../data/siteConfig';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [enquiryType, setEnquiryType] = useState('General Enquiry');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setName('');
    setEmail('');
    setMessage('');
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <div className="space-y-24 sm:space-y-32 pt-8 sm:pt-14 pb-16">
      
      {/* 1. EDITORIAL HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#D35400]">
              Direct Inquiries
            </span>
            <span className="text-stone-300">·</span>
            <span className="text-xs text-stone-500 font-mono">Get in Touch</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-[#121316] leading-[1.08] text-balance">
            Connect with Mirroring Possibilities.
          </h1>
          <p className="mt-6 text-base sm:text-lg text-stone-600 leading-relaxed font-sans">
            Whether you have questions regarding the Thrive 20 application process, wish to join our mentor network, or represent an organisation exploring partnership, we are here to connect.
          </p>
        </div>
      </section>

      {/* 2. CONTACT DETAILS & MESSAGE FORM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Inquiries Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-6 bg-white border border-stone-200/90 rounded-2xl space-y-6">
              <h3 className="font-serif text-2xl text-stone-900 border-b border-stone-100 pb-3">
                Official Channels
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-md bg-stone-100 text-[#D35400] shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-stone-900 block">General Enquiries</span>
                    <a href={`mailto:${SITE_CONFIG.contactEmail}`} className="text-stone-600 hover:text-[#D35400] transition-colors">
                      {SITE_CONFIG.contactEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-md bg-stone-100 text-[#D35400] shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-stone-900 block">Partnership & Philanthropy</span>
                    <a href={`mailto:${SITE_CONFIG.partnershipsEmail}`} className="text-stone-600 hover:text-[#D35400] transition-colors">
                      {SITE_CONFIG.partnershipsEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-md bg-stone-100 text-[#D35400] shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-stone-900 block">Telephone / Secretariat</span>
                    <span className="text-stone-600">{SITE_CONFIG.phonePlaceholder}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-md bg-stone-100 text-[#D35400] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-stone-900 block">Location & Operations</span>
                    <span className="text-stone-600">{SITE_CONFIG.locationPlaceholder}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Channels */}
            <div className="p-6 bg-[#FAF3E8] border border-[#E8DEC9] rounded-2xl">
              <h4 className="font-serif text-lg text-stone-900 mb-2">
                Digital Channels & Social
              </h4>
              <p className="text-xs text-stone-600 mb-4 leading-relaxed">
                Follow our public announcements, cohort dispatches, and participant perspectives across our official channels:
              </p>
              <div className="flex flex-wrap gap-2">
                {SITE_CONFIG.socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-[#E0D2B8] text-stone-800 text-xs font-medium rounded-md hover:border-stone-900 transition-colors"
                  >
                    <span>{social.label}</span>
                    <ArrowUpRight className="w-3 h-3 text-[#D35400]" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7 bg-white border border-stone-200/90 rounded-2xl p-8 sm:p-10 shadow-xs">
            <h3 className="font-serif text-2xl sm:text-3xl text-stone-900 mb-2">
              Send a Message to the Secretariat
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mb-6">
              Fill in your details below and our team will route your enquiry to the appropriate desk.
            </p>

            {submitted ? (
              <div className="p-8 bg-stone-50 border border-emerald-300 rounded-xl text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="text-xl font-serif text-stone-900">Message Received</h4>
                <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto">
                  Thank you for reaching out to Mirroring Possibilities. A member of our facilitation or administrative team will follow up promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                <div>
                  <label className="block text-stone-700 font-medium mb-1">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Maya Lin"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-md text-stone-900 focus:outline-none focus:border-[#D35400]"
                  />
                </div>

                <div>
                  <label className="block text-stone-700 font-medium mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="maya@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-md text-stone-900 focus:outline-none focus:border-[#D35400]"
                  />
                </div>

                <div>
                  <label className="block text-stone-700 font-medium mb-1">
                    Nature of Enquiry
                  </label>
                  <select
                    value={enquiryType}
                    onChange={(e) => setEnquiryType(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-md text-stone-900 focus:outline-none focus:border-[#D35400]"
                  >
                    <option value="General Enquiry">General Enquiry</option>
                    <option value="Thrive 20 Application Question">Thrive 20 Camp / Application Question</option>
                    <option value="Mentorship & Speaking">Mentorship & Speaking Involvement</option>
                    <option value="Institutional Partnership">Institutional Partnership & Funding</option>
                    <option value="Media & Press">Media & Press</option>
                    <option value="Volunteer Support">Volunteer Support</option>
                  </select>
                </div>

                <div>
                  <label className="block text-stone-700 font-medium mb-1">
                    Your Message
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="How can we assist you?"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-md text-stone-900 focus:outline-none focus:border-[#D35400]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#121316] text-white hover:bg-[#D35400] transition-colors rounded-lg font-semibold text-xs sm:text-sm shadow-xs"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
};
