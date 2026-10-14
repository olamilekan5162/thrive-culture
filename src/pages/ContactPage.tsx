import React, { useState } from "react";
import { Mail, Send, CheckCircle2, ArrowUpRight } from "lucide-react";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import { siteConfig } from "../data/siteConfig";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [details, setDetails] = useState(null);

  const validate = () => {
    const errs: any = {};
    if (!formData.name.trim()) errs.name = "Please provide your name.";
    if (!formData.email.trim()) {
      errs.email = "Please provide your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email.";
    }
    if (!formData.subject.trim())
      errs.subject = "Please state a brief subject.";
    if (!formData.message.trim() || formData.message.trim().length < 8) {
      errs.message = "Please provide a message of at least 8 characters.";
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setDetails({ ...formData });
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", subject: "", message: "" });
    setErrors({});
    setSubmitted(false);
    setDetails(null);
  };

  return (
    <div className="bg-stone-50">
      {/* 1. PAGE HERO */}
      <PageHero
        kicker="Contact"
        title="Get in Touch With Thrive Culture"
        description="Whether you have questions about Thrive 20 Camp, institutional partnerships, or campus summits, we're here to help."
        breadcrumbs={[{ label: "Contact" }]}
      />

      {/* 2. CHANNELS & FORM */}
      <section className="py-14 lg:py-20 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left: Channels */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <h2 className="text-xl font-bold text-stone-950 mb-2">
                  Dedicated Desks
                </h2>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Reach out directly to the desk relevant to your inquiry:
                </p>
              </div>

              <div className="space-y-3">
                {siteConfig.contact.channels.map((ch, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-stone-50 border border-stone-200 rounded-lg space-y-1 hover:border-[#FED7B2] transition-colors"
                  >
                    <span className="text-xs font-bold uppercase tracking-wider text-[#D96D14]">
                      {ch.name}
                    </span>
                    <a
                      href={`mailto:${ch.address}`}
                      className="block text-sm font-bold text-stone-950 hover:text-[#D96D14] transition-colors"
                    >
                      {ch.address}
                    </a>
                    <p className="text-xs text-stone-500">{ch.note}</p>
                  </div>
                ))}
              </div>

              {/* Social Channels */}
              <div className="pt-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2.5">
                  Connect Online
                </h3>
                <div className="flex flex-wrap gap-2 text-xs">
                  {siteConfig.contact.socials.map((social) => (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 bg-stone-100 hover:bg-[#FFF5EC] hover:text-[#D96D14] border border-stone-200 rounded-md text-stone-700 transition-colors"
                    >
                      <span>{social.platform}</span>
                      <ArrowUpRight className="w-3 h-3 text-stone-400" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Clean Form */}
            <div className="lg:col-span-7">
              <div className="bg-stone-50 border border-stone-200 rounded-xl p-6 sm:p-8 shadow-xs">
                <h3 className="text-lg font-bold text-stone-950 mb-1">
                  Send a Direct Message
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm mb-5">
                  Complete your message below to dispatch directly to our desk.
                </p>

                {submitted ? (
                  <div className="space-y-4 py-3 text-center">
                    <div className="w-12 h-12 rounded-full bg-[#FFF5EC] text-[#F28524] flex items-center justify-center mx-auto border border-[#FED7B2]">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>

                    <div className="space-y-1">
                      <h4 className="text-lg font-bold text-stone-950">
                        Message Ready for Dispatch
                      </h4>
                      <p className="text-stone-600 text-xs sm:text-sm max-w-sm mx-auto leading-relaxed">
                        Thank you, <strong>{details.name}</strong>. Click below
                        to open and dispatch this email directly in your default
                        mail app.
                      </p>
                    </div>

                    <div className="max-w-md mx-auto bg-white border border-stone-200 rounded-lg p-3.5 text-left text-xs space-y-1 text-stone-700">
                      <p>
                        <strong>To:</strong> {siteConfig.contact.officialEmail}
                      </p>
                      <p>
                        <strong>Subject:</strong> {details.subject}
                      </p>
                      <p className="pt-1 border-t border-stone-100 italic">
                        "{details.message}"
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 pt-2">
                      <a
                        href={`mailto:${siteConfig.contact.officialEmail}?subject=${encodeURIComponent(
                          `[Inquiry] ${details.subject}`,
                        )}&body=${encodeURIComponent(
                          `Name: ${details.name}\nEmail: ${details.email}\nSubject: ${details.subject}\n\nMessage:\n${details.message}`,
                        )}`}
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-stone-950 bg-[#F28524] hover:bg-[#DE7519] rounded-md transition-colors"
                      >
                        <Mail className="w-4 h-4 text-stone-950" />
                        Send via Email
                      </a>
                      <button
                        type="button"
                        onClick={handleReset}
                        className="px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-stone-600 hover:text-stone-900 border border-stone-300 rounded-md transition-colors"
                      >
                        Write Another
                      </button>
                    </div>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    noValidate
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="c-name"
                          className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5"
                        >
                          Your Name *
                        </label>
                        <input
                          id="c-name"
                          type="text"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          placeholder="e.g. Samuel Adebayo"
                          className={`w-full px-3.5 py-2.5 rounded-md bg-white border text-sm text-stone-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F28524] ${
                            errors?.name ? "border-red-500" : "border-stone-300"
                          }`}
                        />
                        {errors?.name && (
                          <p className="mt-1 text-xs text-red-600">
                            {errors?.name}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="c-email"
                          className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5"
                        >
                          Email Address *
                        </label>
                        <input
                          id="c-email"
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder="e.g. samuel@example.com"
                          className={`w-full px-3.5 py-2.5 rounded-md bg-white border text-sm text-stone-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F28524] ${
                            errors?.email
                              ? "border-red-500"
                              : "border-stone-300"
                          }`}
                        />
                        {errors?.email && (
                          <p className="mt-1 text-xs text-red-600">
                            {errors?.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="c-subject"
                        className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5"
                      >
                        Subject *
                      </label>
                      <input
                        id="c-subject"
                        type="text"
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        placeholder="e.g. Inquiring about Thrive 20 Camp eligibility"
                        className={`w-full px-3.5 py-2.5 rounded-md bg-white border text-sm text-stone-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F28524] ${
                          errors?.subject
                            ? "border-red-500"
                            : "border-stone-300"
                        }`}
                      />
                      {errors?.subject && (
                        <p className="mt-1 text-xs text-red-600">
                          {errors?.subject}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="c-message"
                        className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5"
                      >
                        Message *
                      </label>
                      <textarea
                        id="c-message"
                        rows={3}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="How can we assist you?..."
                        className={`w-full px-3.5 py-2.5 rounded-md bg-white border text-sm text-stone-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F28524] ${
                          errors?.message
                            ? "border-red-500"
                            : "border-stone-300"
                        }`}
                      />
                      {errors?.message && (
                        <p className="mt-1 text-xs text-red-600">
                          {errors?.message}
                        </p>
                      )}
                    </div>

                    <div className="pt-1">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-stone-950 bg-[#F28524] hover:bg-[#DE7519] rounded-md transition-colors shadow-xs w-full sm:w-auto"
                      >
                        <Send className="w-3.5 h-3.5 text-stone-950" />
                        Send Message
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
