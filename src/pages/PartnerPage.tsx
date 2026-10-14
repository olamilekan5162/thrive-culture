import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, Mail, Send, AlertCircle } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import { siteConfig } from '../data/siteConfig';

export default function PartnerPage() {
  const [formData, setFormData] = useState({
    name: '',
    organisation: '',
    email: '',
    partnerCategory: 'funding',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitDetails, setSubmitDetails] = useState(null);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name.';
    if (!formData.organisation.trim()) errs.organisation = 'Please provide your organisation.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide a contact email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please provide a brief message (at least 10 characters).';
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmitDetails({ ...formData });
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      organisation: '',
      email: '',
      partnerCategory: 'funding',
      message: '',
    });
    setErrors({});
    setSubmitted(false);
    setSubmitDetails(null);
  };

  return (
    <div className="bg-stone-50">
      
      {/* 1. PAGE HERO */}
      <PageHero
        kicker="Partnerships"
        title="Multiply Impact Through Strategic Collaboration"
        description="We collaborate with foundations, retreat centers, companies, and mentors to build high-impact exposure pathways for youth."
        breadcrumbs={[{ label: 'Partner With Us' }]}
      />

      {/* 2. THE 6 PARTNERSHIP MODELS */}
      <section className="py-14 lg:py-20 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            kicker="Six Pathways"
            title="How Organisations & Leaders Contribute"
            description="Clear ways you or your organisation can support our programmes."
            className="mb-10"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteConfig.partnerships.map((partner) => (
              <div
                key={partner.id}
                id={partner.id}
                className="bg-stone-50 border border-stone-200 rounded-xl p-6 flex flex-col justify-between space-y-4 hover:border-[#FED7B2] hover:bg-[#FFF5EC]/30 transition-colors shadow-xs scroll-mt-20"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#D96D14]">
                      {partner.number}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
                      {partner.role}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-stone-950">
                    {partner.title}
                  </h3>

                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                    {partner.description}
                  </p>

                  <div className="pt-2 border-t border-stone-200">
                    <ul className="space-y-1 text-xs text-stone-600">
                      {partner.offerings.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#F28524] shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="#partner-form"
                    onClick={() => setFormData({ ...formData, partnerCategory: partner.id })}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-stone-900 hover:text-[#D96D14] transition-colors"
                  >
                    <span>Inquire for this model</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#F28524]" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. PARTNERSHIP FORM */}
      <section id="partner-form" className="py-14 lg:py-20 bg-stone-50 border-b border-stone-200 scroll-mt-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            kicker="Inquiry"
            title="Start a Partnership Dialogue"
            description="Send us a quick note below. Inquiries route directly to our partnerships team."
            className="mb-8"
          />

          <div className="bg-white border border-stone-200 rounded-xl p-6 sm:p-8 shadow-xs">
            {submitted ? (
              <div className="space-y-5 py-3 text-center">
                <div className="w-12 h-12 rounded-full bg-[#FFF5EC] text-[#F28524] flex items-center justify-center mx-auto border border-[#FED7B2]">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-stone-950">
                    Partnership Note Prepared
                  </h3>
                  <p className="text-stone-600 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{submitDetails.name}</strong>. Click below to open and send this note directly via your email client to our team.
                  </p>
                </div>

                <div className="max-w-md mx-auto bg-stone-50 border border-stone-200 rounded-lg p-4 text-left text-xs space-y-1 text-stone-700">
                  <p><strong>Organisation:</strong> {submitDetails.organisation}</p>
                  <p><strong>Category:</strong> {siteConfig.partnerships.find(p => p.id === submitDetails.partnerCategory)?.title}</p>
                  <p className="pt-1 border-t border-stone-200 italic">"{submitDetails.message}"</p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 pt-2">
                  <a
                    href={`mailto:${siteConfig.contact.partnershipsEmail}?subject=${encodeURIComponent(
                      `[Partnership] ${submitDetails.organisation} - ${submitDetails.partnerCategory.toUpperCase()}`
                    )}&body=${encodeURIComponent(
                      `Name: ${submitDetails.name}\nOrganisation: ${submitDetails.organisation}\nEmail: ${submitDetails.email}\nCategory: ${submitDetails.partnerCategory}\n\nMessage:\n${submitDetails.message}`
                    )}`}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-stone-950 bg-[#F28524] hover:bg-[#DE7519] rounded-md transition-colors"
                  >
                    <Mail className="w-4 h-4 text-stone-950" />
                    Open in Your Email Client
                  </a>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-stone-600 hover:text-stone-900 border border-stone-300 rounded-md transition-colors"
                  >
                    Submit Another
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="p-name" className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      id="p-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Dr. Jane Okonkwo"
                      className={`w-full px-3.5 py-2.5 rounded-md bg-stone-50 border text-sm text-stone-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F28524] ${
                        errors.name ? 'border-red-500' : 'border-stone-300'
                      }`}
                    />
                    {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="p-org" className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                      Organisation *
                    </label>
                    <input
                      id="p-org"
                      type="text"
                      value={formData.organisation}
                      onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                      placeholder="e.g. Horizon Youth Foundation"
                      className={`w-full px-3.5 py-2.5 rounded-md bg-stone-50 border text-sm text-stone-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F28524] ${
                        errors.organisation ? 'border-red-500' : 'border-stone-300'
                      }`}
                    />
                    {errors.organisation && <p className="mt-1 text-xs text-red-600">{errors.organisation}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="p-email" className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      id="p-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. jane@foundation.org"
                      className={`w-full px-3.5 py-2.5 rounded-md bg-stone-50 border text-sm text-stone-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F28524] ${
                        errors.email ? 'border-red-500' : 'border-stone-300'
                      }`}
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="p-cat" className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                      Partnership Category *
                    </label>
                    <select
                      id="p-cat"
                      value={formData.partnerCategory}
                      onChange={(e) => setFormData({ ...formData, partnerCategory: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-md bg-stone-50 border border-stone-300 text-sm text-stone-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F28524]"
                    >
                      {siteConfig.partnerships.map((p) => (
                        <option key={p.id} value={p.id}>
                          {p.title} ({p.role})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="p-msg" className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                    How You'd Like to Collaborate *
                  </label>
                  <textarea
                    id="p-msg"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly state how you'd like to work with us (e.g. scholarship funding, retreat hosting, mentorship)..."
                    className={`w-full px-3.5 py-2.5 rounded-md bg-stone-50 border text-sm text-stone-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F28524] ${
                      errors.message ? 'border-red-500' : 'border-stone-300'
                    }`}
                  />
                  {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-stone-950 bg-[#F28524] hover:bg-[#DE7519] rounded-md transition-colors shadow-xs"
                  >
                    <Send className="w-3.5 h-3.5 text-stone-950" />
                    Review & Send Proposal
                  </button>
                </div>

              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
}
