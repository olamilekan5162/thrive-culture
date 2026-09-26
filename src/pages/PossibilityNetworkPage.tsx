import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { 
  ArrowUpRight, 
  Users, 
  Mic, 
  Heart, 
  Compass, 
  Sparkles, 
  CheckCircle2, 
  Send,
  MessageSquare,
  Flame,
  ArrowRight
} from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { CTASection } from '../components/CTASection';

import mentorImage from '../assets/images/mentorship_network_1790379395979.jpg';

export const PossibilityNetworkPage: React.FC = () => {
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

  // Network Registration Form state
  const [formType, setFormType] = useState<'mentor' | 'speaker'>('mentor');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [discipline, setDiscipline] = useState('');
  const [motivation, setMotivation] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setName('');
    setEmail('');
    setDiscipline('');
    setMotivation('');
    setTimeout(() => setSubmitted(false), 6000);
  };

  // Structured archetype placeholders per prompt guidelines (do not invent fake people/credentials)
  const mentorArchetypes = [
    {
      role: 'Enterprise & Entrepreneurship Mentor',
      focusArea: 'Venture Creation, Commercial Strategy & Bootstrapping',
      description: 'Guiding scholars through business fundamentals, early venture risks, and turning technical craft into sustainable enterprise.',
      status: '[Active Mentor Nomination & Vetting in Progress]'
    },
    {
      role: 'Creative Disciplines & Storytelling Mentor',
      focusArea: 'Media, Design, Narrative & Arts Practice',
      description: 'Showing how creative disciplines can become viable, impactful, and enduring lifelong vocations.',
      status: '[Active Mentor Nomination & Vetting in Progress]'
    },
    {
      role: 'Engineering & Emerging Tech Mentor',
      focusArea: 'Software Architecture, Systems Thinking & Applied AI',
      description: 'Helping young builders navigate technical excellence, craft mastery, and avoiding hype traps.',
      status: '[Active Mentor Nomination & Vetting in Progress]'
    },
    {
      role: 'Civic Leadership & Social Innovation Mentor',
      focusArea: 'Grassroots Community Building, Ethics & Governance',
      description: 'Mentoring scholars committed to civic renewal, public interest technology, and policy reform.',
      status: '[Active Mentor Nomination & Vetting in Progress]'
    },
    {
      role: 'Personal Finance & Asset Stewardship Mentor',
      focusArea: 'Financial Literacy, Wealth Architecture & Investment',
      description: 'Dismantling economic anxieties and teaching foundational capital allocation for your twenties.',
      status: '[Active Mentor Nomination & Vetting in Progress]'
    },
    {
      role: 'Emotional Agility & Life Architecture Mentor',
      focusArea: 'Mental Health, Resilience, Purpose & Habit Loops',
      description: 'Providing a confidential sounding board on navigating early adult turbulence, burnout, and expectations.',
      status: '[Active Mentor Nomination & Vetting in Progress]'
    }
  ];

  const speakerThemes = [
    {
      theme: 'The Economics of Your Twenties',
      curriculumSlot: 'Day 2 Masterclass',
      summary: 'Practical mechanics of compensation, savings rates, debt traps, and investing before twenty-five.',
      format: 'Interactive Workshop + Live Q&A'
    },
    {
      theme: 'Unvarnished Failure: What Nobody Tells You',
      curriculumSlot: 'Day 3 Fireside Salon',
      summary: 'Candid breakdowns of lost ventures, career restarts, and what emotional recovery actually requires.',
      format: 'Candid Evening Fireside'
    },
    {
      theme: 'The Art of Relational Capital',
      curriculumSlot: 'Day 2 Keynote',
      summary: 'How to cultivate authentic, high-trust networks without superficial transactional networking.',
      format: 'Dialogue & Roleplay Simulation'
    },
    {
      theme: 'Authoring Your Internal Compass',
      curriculumSlot: 'Day 1 Opening Address',
      summary: 'Distinguishing between parental or societal expectations and your genuine personal strengths.',
      format: 'Inaugural Address & Reflection'
    }
  ];

  return (
    <div className="space-y-24 sm:space-y-32 pt-8 sm:pt-14">
      
      {/* 1. EDITORIAL HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#D35400]">
              The Relational Ecosystem
            </span>
            <span className="text-stone-300">·</span>
            <span className="text-xs text-stone-500 font-mono">Faculty & Mentors</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-[#121316] leading-[1.08] text-balance">
            The Possibility Network: Intergenerational Wisdom in Action.
          </h1>
          <p className="mt-6 text-base sm:text-lg text-stone-600 leading-relaxed font-sans">
            We are curating a network of seasoned practitioners, creators, thinkers, and ethical leaders who believe in giving young people an authentic mirror of what their lives can become.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#mentors"
              className="px-4 py-2 text-xs font-semibold bg-[#121316] text-white rounded-md hover:bg-[#D35400] transition-colors"
            >
              Explore Mentor Circle
            </a>
            <a
              href="#speakers"
              className="px-4 py-2 text-xs font-medium bg-white text-stone-800 border border-stone-300 rounded-md hover:border-stone-800 transition-colors"
            >
              Explore Speaker Themes
            </a>
            <a
              href="#involvement-form"
              className="px-4 py-2 text-xs font-medium text-[#D35400] hover:underline"
            >
              Apply to Join Network ↓
            </a>
          </div>
        </div>
      </section>

      {/* 2. PHILOSOPHY OF MENTORSHIP CALLOUT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF3E8]/80 border border-[#E9DEC9] rounded-2xl p-8 sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#D35400]">
                Ecosystem Philosophy
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#121316] leading-snug">
                Not a Passive Directory, But a Committed Collective.
              </h2>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
                The Possibility Network is intentionally not a transactional marketplace of headshots. Every mentor and guest speaker commits to being an honest, vulnerable mirror—someone who demystifies the tradecraft of their profession and speaks candidly about the challenges of the journey.
              </p>
              <div className="pt-2 flex items-center gap-4 text-xs font-semibold text-stone-900">
                <span>Direct Firesides</span>
                <span>•</span>
                <span>Small Reflection Pods</span>
                <span>•</span>
                <span>Ongoing Check-Ins</span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <img
                src={mentorImage}
                alt="Mentorship in action at Mirroring Possibilities"
                className="w-full h-[320px] object-cover rounded-xl shadow-md border border-stone-200"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. MENTORS SECTION */}
      <section id="mentors" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <SectionHeading
          kicker="Section 01"
          title="The Mentor Guild"
          description="Experienced guides who walk alongside cohort scholars during the 4-day camp immersion and post-camp execution circles."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mentorArchetypes.map((m) => (
            <div
              key={m.role}
              className="p-6 bg-white border border-stone-200/90 rounded-xl hover:border-stone-400 transition-colors flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#D35400] block mb-2">
                  {m.focusArea}
                </span>
                <h4 className="font-serif text-xl text-stone-900 mb-2 leading-snug">
                  {m.role}
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6">
                  {m.description}
                </p>
              </div>

              <div className="pt-4 border-t border-dashed border-stone-200 text-xs font-mono text-stone-500">
                {m.status}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. SPEAKERS SECTION */}
      <section id="speakers" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <SectionHeading
          kicker="Section 02"
          title="Guest Speaker Curriculum & Themes"
          description="High-density masterclasses delivered by thought leaders who bring specialized domain expertise directly to the cohort."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {speakerThemes.map((s) => (
            <div
              key={s.theme}
              className="p-6 sm:p-8 bg-white border border-stone-200/90 rounded-xl hover:border-stone-400 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] uppercase font-mono tracking-wider font-semibold text-[#D35400]">
                    {s.curriculumSlot}
                  </span>
                  <span className="text-[10px] text-stone-500 font-medium">
                    {s.format}
                  </span>
                </div>

                <h4 className="font-serif text-2xl text-stone-900 mb-3">
                  {s.theme}
                </h4>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {s.summary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                <span>[Speaker invitations in circulation]</span>
                <span className="text-[#D35400] font-medium">Flagship Module</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CALL FOR INVOLVEMENT FORM */}
      <section id="involvement-form" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="bg-stone-900 text-white rounded-2xl p-8 sm:p-12 border border-stone-800 shadow-xl">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#D35400] block mb-2">
              Get Involved
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif text-white">
              Join the Possibility Network
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 mt-2">
              Are you an experienced leader, builder, or educator passionate about mentoring youth turning twenty? Express your interest below.
            </p>
          </div>

          {submitted ? (
            <div className="p-6 bg-stone-800 border border-emerald-700 rounded-xl text-center space-y-2">
              <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
              <h4 className="text-lg font-serif text-white">Thank you for stepping forward</h4>
              <p className="text-xs text-stone-300">
                Our faculty circle has received your details. We will reach out ahead of the upcoming cohort onboarding.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto text-xs sm:text-sm">
              <div className="flex gap-4 p-1.5 bg-stone-800 rounded-lg">
                <button
                  type="button"
                  onClick={() => setFormType('mentor')}
                  className={`flex-1 py-2 text-xs font-semibold rounded-md transition-colors ${
                    formType === 'mentor'
                      ? 'bg-white text-[#121316]'
                      : 'text-stone-300 hover:text-white'
                  }`}
                >
                  Join as Mentor
                </button>
                <button
                  type="button"
                  onClick={() => setFormType('speaker')}
                  className={`flex-1 py-2 text-xs font-semibold rounded-md transition-colors ${
                    formType === 'speaker'
                      ? 'bg-white text-[#121316]'
                      : 'text-stone-300 hover:text-white'
                  }`}
                >
                  Join as Speaker
                </button>
              </div>

              <div>
                <label className="block text-stone-300 text-xs font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-stone-800 border border-stone-700 rounded-md text-white text-xs sm:text-sm focus:outline-none focus:border-[#D35400]"
                />
              </div>

              <div>
                <label className="block text-stone-300 text-xs font-medium mb-1">
                  Work / Professional Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="email@organization.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-stone-800 border border-stone-700 rounded-md text-white text-xs sm:text-sm focus:outline-none focus:border-[#D35400]"
                />
              </div>

              <div>
                <label className="block text-stone-300 text-xs font-medium mb-1">
                  Domain / Area of Expertise
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Personal Finance, Technology, Creative Arts, Leadership"
                  value={discipline}
                  onChange={(e) => setDiscipline(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-stone-800 border border-stone-700 rounded-md text-white text-xs sm:text-sm focus:outline-none focus:border-[#D35400]"
                />
              </div>

              <div>
                <label className="block text-stone-300 text-xs font-medium mb-1">
                  Why do you wish to support 20-year-olds?
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="A few sentences on your motivation or what you wish you knew at 20..."
                  value={motivation}
                  onChange={(e) => setMotivation(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-stone-800 border border-stone-700 rounded-md text-white text-xs sm:text-sm focus:outline-none focus:border-[#D35400]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#D35400] text-white hover:bg-orange-600 transition-colors rounded-lg font-semibold text-xs sm:text-sm shadow-md"
              >
                Submit Expression of Interest
              </button>
            </form>
          )}
        </div>
      </section>

      {/* 6. CTA SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CTASection
          kicker="Cohort Application"
          title="Are You Turning Twenty?"
          description="Step into the camp and meet the mentors who can help you map out the decade ahead."
          primaryAction={{
            label: 'Apply for Thrive 20',
            path: '/apply'
          }}
          secondaryAction={{
            label: 'Explore Camp Details',
            path: '/plan-twenty'
          }}
        />
      </section>

    </div>
  );
};
